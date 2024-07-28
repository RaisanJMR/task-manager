import express from 'express'
const router = express.Router()
import { authUser } from '../controllers/userController.js';


router.route('/').get(authUser);

export default router