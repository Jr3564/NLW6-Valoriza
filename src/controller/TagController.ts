import { Request, Response } from 'express';
import { TagService } from '../service';

export default class TagController {
  async create(request: Request, response: Response) {
    const { name } = request.body;

    const tagService = new TagService();

    const tag = await tagService.create(name);

    return response.status(200).json(tag);
  }

  async getAll(request: Request, response: Response) {
    const tagService = new TagService();

    const tags = await tagService.getAll();
  
    return response.status(200).json(tags);

  }
}
