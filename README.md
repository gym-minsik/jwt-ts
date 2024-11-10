# JWT TS
A TypeScript approach to JWT signing and verification.

Status: **Work In Progress**

## Features
-	**Type-Safe:** Enhanced type safety through TypeScript’s powerful type system, reducing errors and increasing reliability.
-	**Lightweight:** Built without any third-party libraries, ensuring minimal dependencies.

## Getting Started
### Creating an Access Token
```ts
import { Duration, SecretKey, sign } from 'jwt-ts';

const userId = 'user-id';
const secretKey = new SecretKey('very-secure');

const result = sign({
  subject: userId,
  expiresIn: new Duration({
    minutes: 5,
  }),
  algorithm: 'HS256',
  key: secretKey,
});

console.log(result);
```

**Example Output:**
```ts
{
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWIiOiJ1c2VyLWlkIiwiZXhwIjoxNzMxMjQ1MjM1LCJpYXQiOjE3MzEyNDQ5MzV9c_9lKMVeCHlBfm2jSKqTrEWe5pL_vQFwORuR_kmONrs",
  header: {
    alg: "HS256",
    typ: "JWT"
  },
  payload: {
    sub: "user-id",
    exp: 1731245235,
    iat: 1731244935
  }
}
```

