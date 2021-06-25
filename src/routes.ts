import { Router } from 'express';
import { TagController, UserController, AuthUserController, ComplimentController } from './controller';
import { ensureAdmin, ensureAuthenticated } from './middlewares'

const userController = new UserController();
const tagController = new TagController();
const authController = new AuthUserController();
const complimentController = new ComplimentController();

const router = Router();

router.route('/login')
  .get(authController.getToken);

router.route('/users')
  .get(ensureAuthenticated, ensureAdmin, userController.getAll)
  .post(userController.create);

router.route('/tags')
  .get(ensureAuthenticated, tagController.getAll)
  .post(ensureAuthenticated, ensureAdmin, tagController.create);

router.route('/compliments')
  .get(ensureAuthenticated, complimentController.getByQueryParam)
  .post(ensureAuthenticated, complimentController.create);


export default router;
