import { Request, Response } from 'express';
import { AuthUserService } from '../service';

export default class AuthUserController {
  async getToken(req: Request, res: Response) {
    const { email, password } = req.body;

    const authService = new AuthUserService();

    const token = await authService.generateToken({ email, password });

    return res.status(200).json(token);
  }
}