import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { ListUserSenderComplimentsController } from "./controllers/ListUserSenderComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

const authenticateUserController = new AuthenticateUserController();

const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();

const createComplimentController = new CreateComplimentController();

const listUserSenderComplimentsController = new ListUserSenderComplimentsController();
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();

router.post('/users', createUserController.handle);
router.get('/users', ensureAuthenticated, listUsersController.handle);

router.post('/login', authenticateUserController.handle);

router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get('/tags', ensureAuthenticated, listTagsController.handle);

router.post('/compliments', ensureAuthenticated, createComplimentController.handle);

router.get('/users/compliments/send', ensureAuthenticated, listUserSenderComplimentsController.handle);
router.get('/users/compliments/receive', ensureAuthenticated, listUserReceiverComplimentsController.handle);

export { router };
