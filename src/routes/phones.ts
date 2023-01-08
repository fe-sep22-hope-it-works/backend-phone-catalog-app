import express from 'express';
import {
  getAll,
  getOne,
  getPhoneImages,
  getAllData,
} from '../controllers/phones';

export const phonesRouter = express.Router();

phonesRouter.get('/img/:phoneId', getPhoneImages);
phonesRouter.get('/all/:phoneId', getAllData);
phonesRouter.get('/:phoneId', getOne);
phonesRouter.get('/', getAll);
