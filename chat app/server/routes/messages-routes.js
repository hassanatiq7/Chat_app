import express from 'express'
import {sendMessage, getMessage} from '../controllers/message-controller.js'
import protectedRoute from '../middlewares/protectedRoutes.js';

const router = express.Router()

router.get('/:id', protectedRoute ,getMessage);

router.post('/send/:id', protectedRoute ,sendMessage);


export default router;