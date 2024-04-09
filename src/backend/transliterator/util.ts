import * as fs from 'fs';
import * as internal from 'stream';
import { shellOut } from '../shared/shell-out.lambda-shared';

export async function writeFile(
  filePath: string,
  readStream: internal.Readable
): Promise<void> {
  return new Promise<void>((ok, ko) => {
    const writeStream = fs.createWriteStream(filePath);
    readStream.pipe(writeStream);
    readStream.once('error', ko);
    writeStream.once('error', ko);
    writeStream.once('finish', () => {
      ok();
    });
  });
}

/**
 * The properties required to log into a private NPM registry.
 */
export interface PrivateNpmRegistryProps {
  /**
   * The URL of the private NPM registry.
   */
  readonly privateNpmRegistryUrl: string;

  /**
   * The authentication token for the private NPM registry.
   */
  readonly privateNpmRegistryToken: string;
}

/**
 * Logs into the provided private NPM registry, and makes it the default NPM
 * registry for this environment.
 */
export async function setNpmConfig({
  privateNpmRegistryUrl,
  privateNpmRegistryToken,
}: PrivateNpmRegistryProps) {
  // Remove the protocol part of the endpoint URL, keeping the rest intact.
  const protoRelativeEndpoint = privateNpmRegistryUrl.replace(/^[^:]+:/, '');
  await shellOut('npm', 'config', 'set', `registry=${privateNpmRegistryUrl}`);
  await shellOut(
    'npm',
    'config',
    'set',
    `${protoRelativeEndpoint}:_authToken=${privateNpmRegistryToken}`
  );
  await shellOut(
    'npm',
    'config',
    'set',
    `${protoRelativeEndpoint}:always-auth=true`
  );
}
