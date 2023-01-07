import { getImageByQuery } from '../services/public';

export async function getImage(req: Request, res: any) {
  const image = await getImageByQuery(req);

  res.send(image);
}
