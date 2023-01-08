import path from 'path';

export function getPathByParams(prevImgPath: string, img: string) {
  const arrPath = prevImgPath.split('/');

  arrPath.splice(arrPath.length - 1, 1, img);

  const nextPath = arrPath.join('/');

  return path.resolve(`public/${nextPath}.jpg`);
}
