# JWT TS
A TypeScript approach to JWT signing and verification.

Status: **Work In Progress**

## Features
-	**Type-Safe:** Enhanced type safety through TypeScript’s powerful type system, reducing errors and increasing reliability.
-	**Lightweight:** Built without any third-party libraries, ensuring minimal dependencies.

## Getting Started
### Creating an Access Token
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

