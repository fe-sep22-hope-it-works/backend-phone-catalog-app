import fs from 'fs/promises';
import path from 'path';

const filePath = path.resolve('public/api', 'phones.json');

export async function getAllPhones() {
  const data = await fs.readFile(filePath, 'utf-8');
  const parsedData = JSON.parse(data);

  return parsedData;
}
