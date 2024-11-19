import { generateKeyPairSync } from 'crypto';
import { PrivateKey } from '../models/private-key';
import { PublicKey } from '../models/public-key';

export function generateRsaKeyPair(args?: {
  readonly modulusLength?: 2048 | 3072 | 4096;
}) {
  const modulusLength = args?.modulusLength ?? 2048;

  const keyPair = generateKeyPairSync('rsa', {
    modulusLength,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    },
  });

  const privateKey = new PrivateKey(keyPair.privateKey);
  const publicKey = new PublicKey(keyPair.publicKey);

  return { privateKey, publicKey };
}
