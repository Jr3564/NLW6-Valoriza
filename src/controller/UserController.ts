import { Request, Response } from 'express';
import { UserService } from '../service/UserService';

class UserController {
  async create(request: Request, response: Response) {
    const { name, email, admin } = request.body;

    const userService = new UserService();

    const user = await userService.create({ name, email, admin });

    return response.json(user);
  }
}

export { UserController };
