import { SupportedRsaAlgorithm } from './models/supported-signature-algorithm';
import { createVerify } from 'crypto';
import { PublicKey } from './models/public-key';
import { completeRsaSignatureAlgorithm } from './utils/complete-rsa-signature-algorithm';

export function verifyRsaSignature(
  message: string,
  cipher: string,
  key: PublicKey,
  algorithm: SupportedRsaAlgorithm
) {
  return createVerify(completeRsaSignatureAlgorithm(algorithm))
    .update(message)
    .verify(key.keyObject, cipher, 'base64url');
}
