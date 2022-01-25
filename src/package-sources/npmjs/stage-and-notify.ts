// undefined
import * as path from 'path';
import * as lambda from '@aws-cdk/aws-lambda';
import { Construct } from '@aws-cdk/core';

export interface StageAndNotifyProps extends lambda.FunctionOptions {
}

export class StageAndNotify extends lambda.Function {
  constructor(scope: Construct, id: string, props?: StageAndNotifyProps) {
    super(scope, id, {
      description: 'package-sources/npmjs/stage-and-notify.lambda.ts',
      ...props,
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '/stage-and-notify.lambda.bundle')),
    });
  }
}