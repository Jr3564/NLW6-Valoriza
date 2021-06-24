import { Response, Request, NextFunction } from 'express';

const ensureAdmin = (_req: Request, res: Response, next: NextFunction) => {

  const admin = true;

  if (admin) return next();

  return res.status(401).json({ error: 'Unauthorized'})
}

export default ensureAdmin;