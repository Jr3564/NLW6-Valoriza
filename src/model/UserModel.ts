/* eslint-disable class-methods-use-this */
import { getCustomRepository } from 'typeorm';
import { UserRepository } from './repositories/UserRepository';
import IUserRequest from '../interfaces/UserInterface';

export default class {
  async create(newUser: IUserRequest) {
    const repository: UserRepository = getCustomRepository(UserRepository);
    const user: IUserRequest = repository.create(newUser);
    await repository.save(user);
    return user;
  }

  async getByEmail(email: string) {
    const repository: UserRepository = getCustomRepository(UserRepository);
    const user: IUserRequest = repository.findOne({ email });
    return user;
  }
}
