import { Router } from 'express';
import {signup} from "../controller/signup.js"
import {  login } from '../controller/login.js';
// import { deletes } from '../controller/delete.js';
// import { updates } from '../controller/update.js';

const router = Router();

router.route('/signup')
  // .get(reads)
  .post(signup)
//   .patch(updates)
//   .delete(deletes);

router.route('/login')
  .post(login);

export default router;
