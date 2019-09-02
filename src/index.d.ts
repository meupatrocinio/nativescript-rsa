import { IMPCrypto } from './mpcrypto.common';

export declare class MPCrypto implements IMPCrypto {
    // define your typings manually
    // or..
    // take the ios or android .d.ts files and copy/paste them here
    encryptRSA(
        pubKey: string,
        text: string
    ): string;
}
