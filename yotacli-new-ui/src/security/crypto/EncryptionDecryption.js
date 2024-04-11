/*
  Created on - 11-04-2024
  Created By - yash.raj
  Project - YOTA-UI
  IDE used - IntelliJ IDEA
  Path of this file - yotacli-new-ui/src/security/crypto
 */
import * as CryptoJS from "crypto-js";

const encryptionKey = 'encryption-key';

export function getEncryption(plainText) {
    return CryptoJS
        .AES
        .encrypt(plainText, encryptionKey)
        .toString();
}

export function getDecryption(encText) {
    try {
        return CryptoJS
            .AES
            .decrypt(encText, encryptionKey)
            .toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.log("Error while decrypting the token")
    }
}
