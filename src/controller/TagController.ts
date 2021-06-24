import { Request, Response } from 'express';
import { TagService } from '../service';

export default class TagController {
  async create(request: Request, response: Response) {
    const { name } = request.body;

    const tagService = new TagService();

    const tag = await tagService.create(name);

    return response.json(tag);
  }
}
