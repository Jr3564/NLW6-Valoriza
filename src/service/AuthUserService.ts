import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UserAuthInterface, UserInterface } from "../interfaces";
import { UserRepository } from "../model/repositories/UserRepository";
import Authentication from "./auth/Authentication"

export default class AuthUserService {
  async generateToken(loginUser: UserAuthInterface) {
    const repository = getCustomRepository(UserRepository);
    const user = await repository.findOne({ email: loginUser.email });

    if(!user) throw new Error('Email/password incorrect');

    const isPasswordMatch = await compare(loginUser.password, user.password);

    if(!isPasswordMatch) throw new Error('Email/password incorrect');

    const { admin, email, id } = user;
    const auth = new Authentication();
    return auth.generateToken({ admin, email, id });
  }
}