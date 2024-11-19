# JWT TS
A TypeScript approach to JWT signing and verification.

Status: **Work In Progress**

## Features
-	**Type-Safe:** Enhanced type safety through TypeScript’s powerful type system, reducing errors and increasing reliability.
-	**Lightweight:** Built without any third-party libraries, ensuring minimal dependencies.

## Getting Started
### Creating a token
```ts
import { SecretKey, sign } from '../index';

const result = sign({
  subject: 'user-id',
  expiresIn: { minutes: 5, seconds: 30 },
  algorithm: 'HS256',
  key: new SecretKey('very-secure'),
});

console.log(result);
```

**Example Output:**
```bash
{
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyLWlkIiwiZXhwIjoxNzMyMDIzNTMzLCJpYXQiOjE3MzIwMjMyMDN9.XiU2BJRpY8Iyzzf-1sT14amwr0tKAqD5cm-ESNuP_lw',
  header: { alg: 'HS256', typ: 'JWT' },
  payload: { sub: 'user-id', exp: 1732023533, iat: 1732023203 }
}
```

## Type Safety
### Key
```ts
const { privateKey, publicKey } = generateRsaKeyPair({ modulusLength: 3072 });

const { token } = sign({
  algorithm: 'HS256',
  key: privateKey, // ❌ Compile-time error: A PrivateKey is not valid for the HS256 algorithm.
});
```

### Registered Claims
```ts
const { token } = sign({
  algorithm: 'HS256',
  key: new SecretKey('very-secure'),
  customClaims: { // ❌ Compile-time error: exp is a registered claim.
    exp: 123456789,
  },
});
```

### Expires In
```ts
const { token } = sign({
  algorithm: 'HS256',
  key: new SecretKey('very-secure'),
  subject: 'user-id',
  expiresIn: { 
    // Human-readable configuration for token expiration
    // ✅ More type-safe than Vercel's string-based configuration
    // Vercel example: expiresIn: '5m 30s' (string-based, prone to runtime errors)  
    minutes: 5,
    seconds: 30,
  },
});
```



