import { ComplimentModel, UserModel } from '../model';
import { ComplimentInterface } from '../interfaces';

export default class ComplimentService {
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
