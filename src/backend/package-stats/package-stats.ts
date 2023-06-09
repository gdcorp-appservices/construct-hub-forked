// ~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export interface PackageStatsProps extends lambda.FunctionOptions {
}

export class PackageStats extends lambda.Function {
  constructor(scope: Construct, id: string, props?: PackageStatsProps) {
    super(scope, id, {
      description: 'backend/package-stats/package-stats.lambda.ts',
      ...props,
      architecture: lambda.Architecture.ARM_64,
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '/package-stats.lambda.bundle')),
    });
  }
}