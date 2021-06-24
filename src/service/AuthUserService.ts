import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UserAuthInterface, UserInterface } from "../interfaces";
import { UserRepository } from "../model/repositories/UserRepository";
import Authentication from "./auth/Authentication"

export default class AuthUserService {
  async generateToken(loginUser: UserAuthInterface) {
    const repository = getCustomRepository(UserRepository);
    const user : UserInterface = await repository.findOne({ email: loginUser.email });

    if(!user) throw new Error('1Email/password incorrect');

    const isPasswordMatch = await compare(loginUser.password, user.password);

    if(!isPasswordMatch) throw new Error('Email/password incorrect');

    const secret = '778c7097e8a0838947fbadd40b879a07';
    const auth = new Authentication(secret);
    return auth.generateToken(loginUser);
  }
}