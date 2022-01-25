// undefined
import * as path from 'path';
import * as lambda from '@aws-cdk/aws-lambda';
import { Construct } from '@aws-cdk/core';

export interface HttpGetFunctionProps extends lambda.FunctionOptions {
}

export class HttpGetFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: HttpGetFunctionProps) {
    super(scope, id, {
      description: 'monitoring/http-get-function.lambda.ts',
      ...props,
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '/http-get-function.lambda.bundle')),
    });
  }
}