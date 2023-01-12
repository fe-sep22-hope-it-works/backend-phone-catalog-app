import path from 'path';
import fs from 'fs/promises';
import { getPhoneById } from './phones';
import { Phone } from '../types/Phone';

export async function getAllFavs() {
  const filePath = path.resolve('public/api', 'favorites.json');
  const data = await fs.readFile(filePath, 'utf-8');
  const parsedData = JSON.parse(data);

  return parsedData;
}

export async function addOne(phoneId: string) {
  const allFavs = await getAllFavs();
  const foundPhone = await getPhoneById(phoneId);
  const allIds = allFavs.map((favorite: Phone) => favorite.id);

  if (!foundPhone) {
    return null;
  }

  if (allIds.includes(foundPhone.id)) {
    return allFavs;
  }

  const editedFavs = [...allFavs, foundPhone];
  const string = JSON.stringify(editedFavs);
  const filePath = path.resolve('public/api', 'favorites.json');

  await fs.writeFile(filePath, string);

  const newFavs = await getAllFavs();

  return newFavs;
}

export async function deleteOne(phoneId: string) {
  const allFavs = await getAllFavs();
  const foundPhone = await getPhoneById(phoneId);
  const allIds = allFavs.map((favorite: Phone) => favorite.id);

  if (!foundPhone) {
    return null;
  }

  if (!allIds.includes(foundPhone.id)) {
    return allFavs;
  }

  const editedFavs = allFavs
    .filter((favorite: Phone) => +favorite.id !== +phoneId);
  const string = JSON.stringify(editedFavs);
  const filePath = path.resolve('public/api', 'favorites.json');

  await fs.writeFile(filePath, string);

  const newFavs = await getAllFavs();

  return newFavs;
}
