import { Request, Response } from 'express';
import { ComplimentService } from '../service';

export default class ComplimentController {
  async create(request: Request, response: Response) {
    const { tag_id, user_receiver, message } = request.body;
    const user_sender = request.user_id;

    const complimentService = new ComplimentService();

    const compliment = await complimentService.create({ tag_id, user_sender, user_receiver, message });

    return response.json(compliment);
  }
}
