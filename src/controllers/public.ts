// eslint-disable-next-line no-shadow
import { Response, Request } from 'express';
import { getImageByQuery } from '../services/public';
import { getPhoneInfoById } from '../services/phones';

export async function getImageById(req: Request, res: Response) {
  const { phoneId, img } = req.params;
  const image = await getImageByQuery(Number(phoneId), img);

  if (!image) {
    res.sendStatus(404);

    return;
  }

  res.statusCode = 200;
  res.send(image);
}

export async function sendAllImgPathsById(req: Request, res: Response) {
  const { phoneId } = req.params;
  const foundPhone = await getPhoneInfoById(Number(phoneId));

  if (!foundPhone) {
    res.sendStatus(404);

    return;
  }

  const imagesPaths = foundPhone.images;

  res.statusCode = 200;
  res.send(imagesPaths);
}
