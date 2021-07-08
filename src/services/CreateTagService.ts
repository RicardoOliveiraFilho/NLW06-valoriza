import { getCustomRepository } from "typeorm";
import { CustomError } from "../errors/CustomError";
import { TagRepository } from "../repositories/TagRepository";

class CreateTagService {
  async execute(name: string) {
    const tagRepository = getCustomRepository(TagRepository);

    if (!name) {
      throw new CustomError(400, 'Incorrect name!');
    }

    const tagAlreadyExists = await tagRepository.findOne({ name });

    if (tagAlreadyExists) {
      throw new CustomError(400, 'Tag already exists!');
    }

    const tag = tagRepository.create({ name });

    await tagRepository.save(tag);

    return tag;
  }
}

export { CreateTagService };
