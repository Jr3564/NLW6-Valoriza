import { getCustomRepository } from 'typeorm';
import { TagRepository } from './repositories/TagRepository';

export default class TagModel {
  async create(name: string) {
    const repository: TagRepository = getCustomRepository(TagRepository);
    const tag = await repository.create({ name });
    await repository.save(tag);
    return tag;
  }

  async getByName(name: string) {
    const repository: TagRepository = getCustomRepository(TagRepository);
    const tag = await repository.findOne({ name });
    return tag;
  }
}
