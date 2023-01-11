import {
  getAllFavs,
  addOne,
  deleteOne,
} from '../services/favorites';

export const getAllFavorites = async(req: any, res: any) => {
  const allFavorites = await getAllFavs();

  if (!allFavorites) {
    res.sendStatus(404);

    return;
  }

  res.statusCode = 200;
  res.json(allFavorites);
};

export const addFavorite = async(req: any, res: any) => {
  const { phoneId } = req.params;
  const allFavorites = await addOne(phoneId);

  if (!allFavorites) {
    res.sendStatus(404);

    return;
  }

  res.statusCode = 200;
  res.json(allFavorites);
};

export const deleteFavorite = async(req: any, res: any) => {
  const { phoneId } = req.params;
  const allFavorites = await deleteOne(phoneId);

  if (!allFavorites) {
    res.sendStatus(404);

    return;
  }

  res.statusCode = 200;
  res.json(allFavorites);
};
