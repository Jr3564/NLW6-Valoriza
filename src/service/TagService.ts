import { TagModel } from '../model';

export default class TagService {
  async create(name: string) {
    const tagModel = new TagModel();

    if (!name) throw new Error('Incorrect name!');

    const tagAlreadyExists = await tagModel.getByName(name);

    if (tagAlreadyExists) throw new Error('Tag already exists');
    
    return tagModel.create(name);  
  }

  async getAll() {
    const tagModel = new TagModel();
    return tagModel.getAll();
  }
}
