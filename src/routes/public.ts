import express from 'express';
import { getImage } from '../controllers/public';

export const publicRouter = express.Router();

publicRouter.get('/img/phones/', getImage);
