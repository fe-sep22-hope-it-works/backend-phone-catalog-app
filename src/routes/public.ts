import express from 'express';
import { getImageById, sendImageByPath } from '../controllers/public';

export const publicRouter = express.Router();

publicRouter.get('/:phoneId/:img', getImageById);
publicRouter.get('/img/phones/:namespaceId/:color/:pic', sendImageByPath);
