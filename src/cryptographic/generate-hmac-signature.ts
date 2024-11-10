import { SupportedHmacAlgorithm } from './models/supported-signature-algorithm';
import { SecretKey } from './models/secret-key';
import { createHmac, Hmac } from 'crypto';

export function generateHmacSignature(
  message: string,
  key: SecretKey,
  algorithm: SupportedHmacAlgorithm
) {
  let hmac: Hmac | null = null;
  switch (algorithm) {
    case 'HS256':
      hmac = createHmac('sha256', key.keyObject);
      break;
  }

  return hmac.update(message).digest('base64url');
}
