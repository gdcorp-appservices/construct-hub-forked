// undefined
import * as path from 'path';
import * as lambda from '@aws-cdk/aws-lambda';
import { Construct } from '@aws-cdk/core';

export interface NpmjsPackageCanaryProps extends lambda.FunctionOptions {
}

export class NpmjsPackageCanary extends lambda.Function {
  constructor(scope: Construct, id: string, props?: NpmjsPackageCanaryProps) {
    super(scope, id, {
      description: 'package-sources/npmjs/canary/npmjs-package-canary.lambda.ts',
      ...props,
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '/npmjs-package-canary.lambda.bundle')),
    });
  }
}