export interface IMPCrypto {
    encryptRSA(
        pubKey: string,
        text: string
    ): string;
}