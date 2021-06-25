import { UserInterface } from '../interfaces';
import { UserModel } from '../model';
import { hash } from 'bcryptjs';

export default class UserService {
  async create(user : UserInterface) {
    const userModel = new UserModel();
    
    if (!user.email) throw new Error('Email incorrect');

    const userAlreadyExists = await userModel.getByEmail(user.email);
    if (userAlreadyExists) throw new Error('User already exists');

    const passwordHash = await hash(user.password, 8);

    return userModel.create({ ...user, password: passwordHash });
  }

  async getAll() {
    const userModel = new UserModel();
    return userModel.getAll();
  }
}
