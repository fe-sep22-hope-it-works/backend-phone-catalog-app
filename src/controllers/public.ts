/* eslint-disable max-len */
import { getImageByQuery } from '../services/public';
import { getPhoneInfoById } from '../services/phones';
import path from 'path';
import fs from 'fs';
import http from 'http';
import { send } from 'process';

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

// export async function sendAllImagesPathsById(req: any, res: any) {
//   const { phoneId } = req.params;
//   const phoneInfo = await getPhoneInfoById(phoneId);

//   if (!phoneInfo) {
//     return null;
//   }

//   const imagesPath = phoneInfo.images;

//   const phoneImages = imagesPath.reduce((accumulator: any, element: any) => {
//     const filePath = path.resolve('public/', element);
//     const image = fs.readFile(filePath, function(err: any, data: any) {
//       if (err) {
//         throw err;
//       }

//       http.createServer(function() {
//         res.writeHead(200, { 'Content-Type': 'image/jpeg' });
//         res.end(data);
//       });
//     });

//     return [...accumulator, image];
//   }, []);

//   const results = Promise.all(phoneImages);

//   return results;
// }

export async function sendImageByPath(req: any, res: any) {
  const { namespaceId, color, pic } = req.params;
  const filePath = path.resolve(`./public/img/phones/${namespaceId}/${color}/${pic}`);

  // res.send(filePath);

  fs.readFile(filePath, (error, data) => {
    if (!error) {
      res.writeHead(200, { 'Content-Type': 'image/jpg' });
      res.end(data);
    }

    // res.send(data);

    // res.writeHead(200, { 'Content-Type': 'image/jpg' });
    // res.end(data);

    // http.createServer(function(req, res) {
    //   res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    //   res.end(data);
    // });

    res.statusCode = 404;
    res.end();
  });
}
