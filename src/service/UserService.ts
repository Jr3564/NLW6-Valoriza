/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
import IUserRequest from '../interfaces/UserInterface';
import UserModel from '../model/UserModel';

export default class UserService {
  async create({ email } : IUserRequest) {
    if (!email) throw new Error('Email incorrect');
    const userAlreadyExists = await UserModel.getByEmail(email);
    if (!userAlreadyExists) throw new Error('User already exists');
    return UserModel.getByEmail(email);
  }
}
