import { Response, Request, NextFunction } from 'express';
import { Authentication } from '../service';
import { TokenPayload } from '../interfaces';

const ensureAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  try {
    const [,token] = req.headers.authorization.split(' ');

    if (!token) throw new Error("Inválid token");
  
    const auth = new Authentication();
    
    auth.verifyToken(token, (err) => {
      if (err) throw new Error("Unauthorized");
    });

    const { id } = auth.decodedToken(token) as TokenPayload;

    req.user_id = id;

    return next();

  } catch ({ message }) {
    return res.status(401).json({ message });  }

  

}

export default ensureAuthenticated;