import { IMPCrypto } from './mpcrypto.common';

export class MPCrypto implements IMPCrypto {
    encryptRSA(
        pubKey: string,
        text: string
    ): string {
        throw Error(
            'Encrypt not implemented on IOS:' +
            pubKey +
            ':' +
            text
        );
    }
}
