import IUserRequest from '../interfaces/UserInterface';
import { UserModel } from '../model/UserModel';
import { hash } from 'bcryptjs';

export class UserService {
  async create(user : IUserRequest) {
    const userModel = new UserModel();
    
    if (!user.email) throw new Error('Email incorrect');

    const userAlreadyExists = await userModel.getByEmail(user.email);
    if (userAlreadyExists) throw new Error('User already exists');

    const passwordHash = await hash(user.password, 8);

    return userModel.create({ ...user, password: passwordHash });
  }
}
