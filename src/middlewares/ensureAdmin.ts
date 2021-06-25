import { Response, Request, NextFunction } from 'express';

const ensureAdmin = (req: Request, res: Response, next: NextFunction) => {

  const admin = true;
  console.log(req.user_id);
  if (admin) return next();

  return res.status(401).json({ error: 'Unauthorized'})
}

export default ensureAdmin;