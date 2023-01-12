/* eslint-disable no-shadow */
import {
  getAllFavs,
  addOne,
  deleteOne,
} from '../services/favorites';
import { Request, Response } from 'express';

export const getAllFavorites = async(req: Request, res: Response) => {
  const allFavorites = await getAllFavs();

  if (!allFavorites) {
    res.sendStatus(404);

    return;
  }

  res.statusCode = 200;
  res.json(allFavorites);
};

export const addFavorite = async(req: Request, res: Response) => {
  const { phoneId } = req.params;
  const allFavorites = await addOne(phoneId);

  if (!allFavorites) {
    res.sendStatus(404);

    return;
  }

  res.statusCode = 200;
  res.json(allFavorites);
};

export const deleteFavorite = async(req: Request, res: Response) => {
  const { phoneId } = req.params;
  const allFavorites = await deleteOne(phoneId);

  if (!allFavorites) {
    res.sendStatus(404);

    return;
  }

  res.statusCode = 200;
  res.json(allFavorites);
};
