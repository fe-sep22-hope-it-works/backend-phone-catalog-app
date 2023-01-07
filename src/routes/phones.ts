import express from 'express';
import { getAll, getOne } from '../controllers/phones';

export const phonesRouter = express.Router();

phonesRouter.get('/', getAll);
phonesRouter.get('/:phoneId', getOne);
