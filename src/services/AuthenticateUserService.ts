import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({ email });

    if (!user) {
      throw new Error('Email/Password Incorrect!');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email/Password Incorrect!');
    }

    const token = sign(
      { email: user.email },
      '3f905e9d392f880be3239b3b3af34389',
      {
        subject: user.id,
        expiresIn: '1d'
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
