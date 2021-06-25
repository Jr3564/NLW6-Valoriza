import { Request, Response } from 'express';
import { ComplimentService } from '../service';

export default class ComplimentController {
  async create(request: Request, response: Response) {
    const complimentService = new ComplimentService();
    const { tag_id, user_receiver, message } = request.body;
    const user_sender = request.user_id;

    const compliment = await complimentService
      .create({ tag_id, user_sender, user_receiver, message });

    return response.json(compliment);
  }

  async getByQueryParam (request: Request, response: Response) {
    const { senderId, receiverId } = request.query;
    const complimentService = new ComplimentService();

    const result = [];

    if (senderId) {
      const user_send = await complimentService.getAllSendByUserId(senderId as string);
      result.push({ user_send });
    }
    if (receiverId) {
      const user_received = await complimentService.getAllReceiverByUserId(receiverId as string);
      result.push({ user_received });
    }

    response.status(200).json(result);
  }
}
