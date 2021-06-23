import IUserRequest from '../interfaces/UserInterface';
import { UserModel } from '../model/UserModel';

export class UserService {
  async create({ email, name, admin } : IUserRequest) {
    const userModel = new UserModel();
    if (!email) throw new Error('Email incorrect');
    const userAlreadyExists = await userModel.getByEmail(email);
    if (userAlreadyExists) throw new Error('User already exists');
    return userModel.create({ email, name, admin });
  }
}
