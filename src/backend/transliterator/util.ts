import * as fs from 'fs';
import * as internal from 'stream';
import * as aws from '../shared/aws.lambda-shared';
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
 * Artifactory Secret containing the Artifactory URL and token.
 */
interface ArtifactorySecret {
  /**
   * The URL of the Artifactory instance.
   */
  url: string;

  /**
   * The token to authenticate with the Artifactory instance.
   */
  token: string;
}

/**
 * Logs into the provided private NPM registry, and makes it the default NPM
 * registry for this environment.
 */
export async function setNpmConfig(secretArn: string) {
  // Get the Artifactory secret from AWS Secrets Manager
  const artifactorySecret = await getArtifactorySecret(secretArn);
  const registryUrl = `${artifactorySecret.url}/artifactory/api/npm/node-virt/`;

  // Remove the protocol part of the endpoint URL, keeping the rest intact.
  const protoRelativeEndpoint = registryUrl.replace(/^[^:]+:/, '');
  await shellOut('npm', 'config', 'set', `registry=${registryUrl}`);
  await shellOut(
    'npm',
    'config',
    'set',
    `${protoRelativeEndpoint}:_authToken=${artifactorySecret.token}`
  );
  await shellOut(
    'npm',
    'config',
    'set',
    `${protoRelativeEndpoint}:always-auth=true`
  );
}

/**
 * Gets the Artifactory secret from AWS Secrets Manager.
 * @param secretArn
 */
async function getArtifactorySecret(
  secretArn: string
): Promise<ArtifactorySecret> {
  try {
    // Call the AWS Secrets Manager API to get the secret values
    const data = await aws
      .secretsManager()
      .getSecretValue({ SecretId: secretArn })
      .promise();

    return JSON.parse(data.SecretString || '');
  } catch (error) {
    throw error;
  }
}
