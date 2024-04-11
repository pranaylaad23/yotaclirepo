/*
  Created on - 11-04-2024
  Created By - yash.raj
  Project - YOTA-UI
  IDE used - IntelliJ IDEA
  Path of this file - yotacli-new-ui/src/security/jwt
 */
import {jwtDecode} from "jwt-decode";
import {getDecryption} from "../crypto/EncryptionDecryption";

function decodeToken(token) {
    try {
        return jwtDecode(token);
    } catch (error) {
        console.log("Error while decoding the token")
    }
}

export function getFullNameFromToken(token) {
    const decryptedToken = getDecryption(token);
    const decodedToken = decodeToken(decryptedToken);
    if (decodedToken) {
        return decodedToken.name;
    }
}

export function getUserNameFromToken(token) {
    const decryptedToken = getDecryption(token);
    const decodedToken = decodeToken(decryptedToken);
    if (decodedToken) {
        return decodedToken.sub;
    }
}

export function getRoleFromToken(token) {
    const decryptedToken = getDecryption(token);
    const decodedToken = decodeToken(decryptedToken);
    if (decodedToken) {
        return decodedToken.roles;
    }
}

export function getExpirationTimeFromToken(token) {
    const decryptedToken = getDecryption(token);
    const decodedToken = decodeToken(decryptedToken);
    if (decodedToken) {
        return decodedToken.exp;
    }
}

export function isTokenExpired(token) {
    const expDate = getExpirationTimeFromToken(token);
    const floorDate = Math.floor(Date.now() / 1000);
    if (expDate) {
        return expDate < floorDate;
    } else
        return false;
}
