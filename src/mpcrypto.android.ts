import { IMPCrypto } from './mpcrypto.common';

declare var android: any;
declare var java: any;
declare var javax: any;

const KeyFactory = java.security.KeyFactory;
const Base64 = android.util.Base64;
const X509EncodedKeySpec = java.security.spec.X509EncodedKeySpec;
const Cipher = javax.crypto.Cipher;

export class MPCrypto implements IMPCrypto {
    private getPublicKey(base64PublicKey: string) {
        let publicKey = null;

        try {
            const keySpec = new X509EncodedKeySpec(
                Base64.decode(
                    new java.lang.String(base64PublicKey).getBytes(),
                    Base64.DEFAULT
                )
            );
            const keyFactory = KeyFactory.getInstance("RSA");
            publicKey = keyFactory.generatePublic(keySpec);
        } catch (e) {
            e.printStackTrace();
        }

        return publicKey;
    }

    private removePubKeyComment(
        pubKey: string
    ): string {
         pubKey = pubKey.replace("-----BEGIN PUBLIC KEY-----\n", "");
         pubKey = pubKey.replace("\n-----END PUBLIC KEY-----", "");
 
         return pubKey;
     }

    public encryptRSA(
        pubKey: string,
        text: string
    ): string {
        pubKey = this.removePubKeyComment(pubKey);

        try {
            let cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");
            cipher.init(Cipher.ENCRYPT_MODE, this.getPublicKey(pubKey));
            return new java.lang.String(
                Base64.encode(
                    cipher.doFinal(
                        new java.lang.String(text).getBytes()
                    ),
                    Base64.DEFAULT
                )
            );
        } catch (e) {
            e.printStackTrace();
        }

        return "";
    }
}
