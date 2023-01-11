import fs from 'fs/promises';
import { getPhoneById } from '../services/phones';
import { getPathByParams } from '../modules/getPathByParams';

export async function getImageByQuery(phoneId: number, img: string) {
  const foundPhone = await getPhoneById(phoneId);

  if (!foundPhone) {
    return null;
  }

  const filePath = getPathByParams(foundPhone.image, img);

  let image;

  try {
    image = await fs.readFile(filePath, 'base64');
  } catch {
    return null;
  }

  return image;
}
