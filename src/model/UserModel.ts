import { getCustomRepository } from 'typeorm';
import { UserRepository } from './repositories/UserRepository';
import { UserInterface } from '../interfaces';

export default class UserModel {
  async create(newUser: UserInterface) {
    const repository: UserRepository = getCustomRepository(UserRepository);
    const user = await repository.create(newUser);
    await repository.save(user);
    return user;
  }

  async getByEmail(email: string) : Promise<UserInterface> {
    const repository: UserRepository = getCustomRepository(UserRepository);
    const user = await repository.findOne({ email });
    return user;
  }

  async getById(id: string) : Promise<UserInterface> {
    const repository: UserRepository = getCustomRepository(UserRepository);
    const user = await repository.findOne(id);
    return user;
  }
}
