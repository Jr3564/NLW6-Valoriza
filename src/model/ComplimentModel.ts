import { getCustomRepository } from 'typeorm';
import { ComplimentRepository } from './repositories/ComplimentRepository';
import { ComplimentInterface } from '../interfaces';

export default class ComplimentModel {
  async create(newCompliment : ComplimentInterface ) {
    const repository = getCustomRepository(ComplimentRepository);
    const compliment = await repository.create(newCompliment);
    await repository.save(compliment);
    return compliment;
  }

  async getAllSendByUserId (userSenderId: string) {
    const repository = getCustomRepository(ComplimentRepository);
    const result = await repository.find({
      where: { user_sender: userSenderId },
      relations: ["userSender", "userReceiver", "tag"]
    });
    return result;
  }

  async getAllReceiverByUserId (userReceiverId: string) {
    const repository = getCustomRepository(ComplimentRepository);
    const result = repository.find({ where: { user_receiver: userReceiverId } });
    return result;
  }
}
