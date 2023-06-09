// ~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".
import * as path from 'path';
import * as ecrAssets from 'aws-cdk-lib/aws-ecr-assets';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export interface TransliteratorProps extends Omit<ecs.ContainerDefinitionOptions, 'image'> {
  readonly taskDefinition: ecs.FargateTaskDefinition;
}

export class Transliterator extends ecs.ContainerDefinition {
  public constructor(scope: Construct, id: string, props: TransliteratorProps) {
    super(scope, id, {
      ...props,
      image: ecs.ContainerImage.fromAsset(path.join(__dirname, 'transliterator.ecs-entrypoint.bundle'), { platform: ecrAssets.Platform.LINUX_ARM64 }),
    });

    props.taskDefinition.taskRole.addToPrincipalPolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        'states:SendTaskFailure',
        'states:SendTaskHeartbeat',
        'states:SendTaskSuccess',
      ],
      resources: ['*'],
    }));
  }
}