// undefined
import * as path from 'path';
import * as lambda from '@aws-cdk/aws-lambda';
import { Construct } from '@aws-cdk/core';

export interface CertificateMonitorProps extends lambda.FunctionOptions {
}

export class CertificateMonitor extends lambda.Function {
  constructor(scope: Construct, id: string, props?: CertificateMonitorProps) {
    super(scope, id, {
      description: 'monitored-certificate/certificate-monitor.lambda.ts',
      ...props,
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '/certificate-monitor.lambda.bundle')),
    });
  }
}