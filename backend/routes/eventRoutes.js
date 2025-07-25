// routes/eventRoutes.js
import express from 'express';
import { getAllEvents } from '../controllers/eventController.js';

const router = express.Router();
router.get('/', getAllEvents);
export default router;
