import { ComplimentModel } from '../model/ComplimentModel';
import { ComplimentInterface } from '../interfaces';
import { UserModel } from '../model/UserModel';

export class ComplimentService {
  async create(newCompliment: ComplimentInterface) {
    const complimentModel = new ComplimentModel();

    if (newCompliment.user_sender === newCompliment.user_receiver) {
      throw new Error('Incorrect User Receive')
    };

    const userModel = new UserModel();
    const senderAlreadyExists = await userModel.getById(newCompliment.user_sender);
    const receiverAlreadyExists = await userModel.getById(newCompliment.user_receiver);

    if (!senderAlreadyExists || !receiverAlreadyExists) {
      throw new Error(`User ${senderAlreadyExists ? 'Reciver' : 'Sender'} does not exist!`);
    };
    
    return complimentModel.create(newCompliment);  
  }
}
