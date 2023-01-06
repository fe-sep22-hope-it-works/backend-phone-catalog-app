import express from 'express';
import { getAll } from '../controllers/phones';

export const phonesRouter = express.Router();

phonesRouter.get('/', getAll);
