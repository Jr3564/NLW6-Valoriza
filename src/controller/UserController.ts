import { Request, Response } from 'express';
import { UserService } from '../service/UserService';

export class UserController {
  async create(request: Request, response: Response) {
    const { name, email, admin, password } = request.body;

    const userService = new UserService();

    const user = await userService.create({ name, email, admin, password });

    return response.json(user);
  }
}
