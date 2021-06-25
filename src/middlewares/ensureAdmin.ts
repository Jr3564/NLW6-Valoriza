import { Response, Request, NextFunction } from 'express';
import { UserModel } from '../model';

const ensureAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const { user_id } = req;

  const model = new UserModel();
  const { admin } = await model.getById(user_id);

  if (admin) return next();

  return res.status(401).json({ error: 'Unauthorized'})
}

export default ensureAdmin;