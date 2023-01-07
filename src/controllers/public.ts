import { getImageByQuery } from '../services/public';

export async function getImageById(req: any, res: any) {
  const { phoneId } = req.params;
  const image = await getImageByQuery(phoneId);

  if (!image) {
    res.sendStatus(404);

    return;
  }

  res.statusCode = 200;
  res.send(image);
}
