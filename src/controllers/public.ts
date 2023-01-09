/* eslint-disable max-len */
import { getImageByQuery } from '../services/public';
import { getPhoneInfoById } from '../services/phones';

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

export async function sendAllImgPathsById(req: any, res: any) {
  const { phoneId } = req.params;
  const foundPhone = await getPhoneInfoById(phoneId);

  if (!foundPhone) {
    res.sendStatus(404);

    return;
  }

  const imagesPaths = foundPhone.images;

  res.statusCode = 200;
  res.send(imagesPaths);
}
