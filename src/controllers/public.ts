import { getImageByQuery } from '../services/public';

export async function getImageById(req: any, res: any) {
  const { phoneId, img } = req.params;
  const image = await getImageByQuery(phoneId, img);

  if (!image) {
    res.sendStatus(404);

    return;
  }

  res.statusCode = 200;
  res.send(image);
}
