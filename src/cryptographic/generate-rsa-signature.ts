import { SupportedRsaAlgorithm } from './models/supported-signature-algorithm';
import { PrivateKey } from './models/private-key';
import { createSign, Sign } from 'crypto';
import { completeRsaSignatureAlgorithm } from './utils/complete-rsa-signature-algorithm';

export function generateRsaSignature(
  message: string,
  privateKey: PrivateKey,
  algorithm: SupportedRsaAlgorithm
) {
  const sign: Sign = createSign(completeRsaSignatureAlgorithm(algorithm));

  return sign.update(message).sign(privateKey.keyObject, 'base64url');
}
