/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { CreateUserService } from '../service/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin } = request.body;

    const createUserService = new CreateUserService();

    const user = createUserService.execute({ name, email, admin });

    return response.json(user);
  }
}

export { CreateUserController };
