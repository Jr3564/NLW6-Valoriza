import { Router } from 'express';

import { TagController } from './controller/TagController';
import { UserController } from './controller/UserController';

const router = Router();

const userController = new UserController();
const tagController = new TagController();

router.route('/users')
  .post(userController.create);

router.route('/tags')
  .post(tagController.create);


export { router };
