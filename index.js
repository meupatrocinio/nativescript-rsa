module.exports = {
    encrypt:function(
        pubkey,
        text
    ) {
        return com.org.mprsacrypto.MPRSACrypto.encrypt(
            pubkey,
            text
        );
    }
};
