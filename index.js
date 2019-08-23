module.exports = {
    encrypt:function(
        pubkey,
        text
    ) {
        return com.org.myrsacrypto.MyRSACrypto.encrypt(
            pubkey,
            text
        );
    }
};
