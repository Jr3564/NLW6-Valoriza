import { Router } from 'express';

import { UserController } from './controller/UserController';

const router = Router();

const userController = new UserController();

router.route('/users')
  .post(userController.create);

export { router };
