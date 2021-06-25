import { Request, Response } from 'express';
import { UserService } from '../service';

export default class UserController {
  async create(request: Request, response: Response) {
    const { name, email, admin = false, password } = request.body;

    const userService = new UserService();

    const user = await userService.create({ name, email, admin, password });

    return response.json(user);
  }

  async getAll(_request: Request, response: Response) {
    const userService = new UserService();
    const users = await userService.getAll();
    return response.json(users);
  }
}
