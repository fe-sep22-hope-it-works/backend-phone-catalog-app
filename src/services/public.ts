import fs from 'fs/promises';
import path from 'path';
import { getPhoneById } from '../services/phones';

export async function getImageByQuery(phoneId: string) {
  const foundPhone = await getPhoneById(phoneId);

  if (!foundPhone) {
    return null;
  }

  const filePath = path.resolve(`public/${foundPhone.image}`);
  const image = await fs.readFile(filePath, 'base64');

  return image;
}
