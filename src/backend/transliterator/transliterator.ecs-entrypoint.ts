#!/usr/bin/env node
// undefined

import * as os from 'os';
import { argv, env, exit } from 'process';
import { SendTaskFailureCommand, SendTaskHeartbeatCommand, SendTaskSuccessCommand, SFNClient } from '@aws-sdk/client-sfn';
import { handler } from './transliterator.ecstask';

const sfn = new SFNClient({});

const taskToken = env.SFN_TASK_TOKEN!;
delete env.SFN_TASK_TOKEN;

function sendHeartbeat(): void {
  sfn.send(new SendTaskHeartbeatCommand({ taskToken })).then(
    () => console.log('Successfully sent task heartbeat!'),
    (reason) => {
      console.error('Failed to send task heartbeat:', reason);
      if (reason.code === 'TaskTimedOut') {
        exit(-(os.constants.errno.ETIMEDOUT || 1));
      }
    },
  );
}

sendHeartbeat();
const heartbeat = setInterval(sendHeartbeat, 60_000);

async function main(): Promise<void> {
  try {
    const input: readonly any[] = argv.slice(2).map((text) => JSON.parse(text));
    const result = await (handler as (...args: any[]) => unknown)(...input);
    console.log('Task result:', result);
    await sfn.send(new SendTaskSuccessCommand({ output: JSON.stringify(result), taskToken }));
  } catch (err) {
    console.log('Task failed:', err);
    process.exitCode = 1;
    await sfn.send(new SendTaskFailureCommand({
      cause: JSON.stringify(err instanceof Error ? { message: err.message, name: err.name, stack: err.stack } : err),
      error: err.name ?? err.constructor.name ?? 'Error',
      taskToken,
    }));
  } finally {
    clearInterval(heartbeat);
  }
}

main().catch((cause) => {
  console.log('Unexpected error:', cause);
  exit(-1);
});