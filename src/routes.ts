import { Router } from 'express';

import { TagController } from './controller/TagController';
import { UserController } from './controller/UserController';
import { AuthUserController } from './controller/AuthUserController';
import { ensureAdmin } from './middlewares/ensureAdmin'

const userController = new UserController();
const tagController = new TagController();
const authController = new AuthUserController();

const router = Router();

router.route('/login')
  .get(ensureAdmin, authController.getToken);

router.route('/users')
  .post(userController.create);

router.route('/tags')
  .post(ensureAdmin, tagController.create);


export { router };
