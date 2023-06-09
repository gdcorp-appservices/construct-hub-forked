// ~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export interface PackageVersionsTableWidgetFunctionProps extends lambda.FunctionOptions {
}

export class PackageVersionsTableWidgetFunction extends lambda.SingletonFunction {
  constructor(scope: Construct, id: string, props?: PackageVersionsTableWidgetFunctionProps) {
    super(scope, id, {
      description: 'backend/inventory/package-versions-table-widget-function.lambda.ts',
      ...props,
      uuid: '5fa84825-9c1d-5e38-8c0d-f69f05c016df',
      lambdaPurpose: 'PackageVersionsTableWidget-Handler',
      architecture: lambda.Architecture.ARM_64,
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '/package-versions-table-widget-function.lambda.bundle')),
    });
  }
}