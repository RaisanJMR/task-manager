import express from 'express'
const router = express.Router()
import { getTask } from '../controllers/taskController.js';


router.route('/').get(getTask);

export default router