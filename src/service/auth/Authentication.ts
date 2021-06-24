import UserAuthInterface from "../../interfaces/UserAuthInterface";
import { sign, verify, decode } from 'jsonwebtoken';

export class Authentication {
  private readonly secret : string;
  constructor (secret?: string) {
    this.secret = secret || 'umsegredomuitoseguro';
  }

  private defaultCallbackError =  (err, decoded) => {
    if (!err) return decoded;
    throw new Error('Token inválido')
  };  

  generateToken(user: UserAuthInterface) {
    return sign(user, this.secret, {
      expiresIn: '7d',
      algorithm: 'HS256',
    });
  }

  verifyToken(token: string, callback = this.defaultCallbackError) {
    return verify(token, this.secret, callback);
  }

  decodedToken(token: string) {
    return decode(token);
  }
}