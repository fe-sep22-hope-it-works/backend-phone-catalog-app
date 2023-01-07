import fs from 'fs/promises';
import path from 'path';
import { getQueryInfo } from '../modules/getQueryInfo';

export async function getImageByQuery(req: Request) {
  const { model, color, fileName } = getQueryInfo(req);
  const filePath = path.resolve(`public/img/phones/${model}/${color}/`, fileName);
  const image = await fs.readFile(filePath, 'base64');

  return image;
}
