# Nativescript RSA

## About
This plugin encrypt RSA Pub Key using a java library with the following parameters:

```java
"RSA/ECB/PKCS1Padding"
```

The only thing that it require to be passed is the pubKey __base64__ encoded and the plugin will return the **RSA** data encrypted __base64__ encoded as well.

## Installation
```sh
tns plugin add "https://github.com/meupatrocinio/nativescript-rsa.git"
```

## Usage
A usage example can be viewed in the following code:
```javascript
const crypto = require('nativescript-rsa');

const dataToBeEncrypted = 'dataEncrypted';

const pubkey = 
    '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAx6VW+yt95I8D3Xf/hGRU\n' +
    '9fkY8auuILepDBjdPJfRJiGukc/iX3EXF2JrC/wPzq99mDgbW7ok3Hp9d3HeIZJx\n' +
    'MCMKdcSrfY6nHtPY3ymfk9lsdhZtTZwHtgLukFxrBML/jjFsqpLydypPMJXyimfL\n' +
    'ldDLIQ917n1yVQKhsbco5iG1xFf/aO3oY5lqZVnNuOSOOvh31s718Vl/w+B7WM7/\n' +
    '7L7UR03lQaJ8cAPgbqk+ctq9JWlnd3v/lg5J238C7W5pXgRR/w8Uy7QCQ3225EBK\n' +
    'nETDMjWWLgd+TGVQsgVcOxnhk3IQZC6uXelhjEIx8qrgQ+TjWgQ7isjEAn3KEsDc\n' +
    'rwIDAQAB\n'
    '-----END PUBLIC KEY-----';

const hash = crypto.encrypt(
    pubkey,
    dataToBeEncrypted
);

/*
hash =
    tnzNnfL80kHuuU8ayyJRqdItRLWs91jU8chvu9/c22+wxRfv4XANnUTNTTTwY6S8IHQNWu81tpMR
    CSygYbsKyLhdBrAQROFldeQwyGXSdmvYcbtjOJRgcfavwjWJlqSpl9NF+NgrvESxAm9cqaNOu7YT
    vJjWrARJEub20+qHOdrFagZqkZNTjIPcKNg4EFLuZJbfqOm68t1knjxpTmJ1geySEjsCGIuB3DOp
    uMFOfZMYpjSVPWwEu7bo5zha9rRASjM2yssx3pzjEfRnULH2pwRvY+CkUQwyFfMhqGF+JaFa3iQN
    968xBJ2qiBem/PlVa/dA/SLFTlgU4U2ggHl4hQ==
*/
```
