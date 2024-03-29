import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import { classToPlain } from 'class-transformer';

class ListUsersService {
  async execute() {
    const userRepository = getCustomRepository(UserRepository);

    const users = userRepository.find();

    return classToPlain(users);
  }
}

export { ListUsersService };
