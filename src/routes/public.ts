import express from 'express';
import { getImageById } from '../controllers/public';

export const publicRouter = express.Router();

publicRouter.get('/:phoneId/:img', getImageById);
