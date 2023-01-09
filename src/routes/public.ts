import express from 'express';
import { getImageById, sendAllImgPathsById } from '../controllers/public';

export const publicRouter = express.Router();

publicRouter.get('/img/:phoneId', sendAllImgPathsById);
publicRouter.get('/:phoneId/:img', getImageById);
