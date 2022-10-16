import jwt from 'jsonwebtoken';
const secret = process.env.ACCESS_TOKEN_SECRET;

export function generateToken(payload) {
    const token = jwt.sign(payload, secret);

    return token;
}

export function verifyToken(token) {
    const decodeToken = jwt.verify(token, secret);

    return decodeToken;
}