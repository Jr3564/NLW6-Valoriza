import { getCustomRepository } from 'typeorm';
import { UserRepository } from './repositories/UserRepository';
import IUserRequest from '../interfaces/UserInterface';

class UserModel {
  async create(newUser: IUserRequest) {
    const repository: UserRepository = getCustomRepository(UserRepository);
    const user: IUserRequest = await repository.create(newUser);
    await repository.save(user);
    return user;
  }

  async getByEmail(email: string) {
    const repository: UserRepository = getCustomRepository(UserRepository);
    const user: IUserRequest = await repository.findOne({ email });
    return user;
  }
}

export { UserModel };
