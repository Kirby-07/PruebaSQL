import { Router } from 'express'
import controller from '../controllers/itemsController.js'
const router = Router();

router.get('/',controller.list);

export default router