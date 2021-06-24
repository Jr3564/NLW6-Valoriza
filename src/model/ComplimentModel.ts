import { getCustomRepository } from 'typeorm';
import { ComplimentRepository } from './repositories/ComplimentRepository';
import { ComplimentInterface } from '../interfaces';

export class ComplimentModel {
  async create(newCompliment : ComplimentInterface ) {
    const repository: ComplimentRepository = getCustomRepository(ComplimentRepository);
    const compliment = await repository.create(newCompliment);
    await repository.save(compliment);
    return compliment;
  }
}
