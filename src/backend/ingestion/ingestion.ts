// undefined
import * as path from 'path';
import * as lambda from '@aws-cdk/aws-lambda';
import { Construct } from '@aws-cdk/core';

export interface IngestionProps extends lambda.FunctionOptions {
}

export class Ingestion extends lambda.Function {
  constructor(scope: Construct, id: string, props?: IngestionProps) {
    super(scope, id, {
      description: 'backend/ingestion/ingestion.lambda.ts',
      ...props,
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '/ingestion.lambda.bundle')),
    });
  }
}