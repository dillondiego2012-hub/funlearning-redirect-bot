import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const urlsPath = path.resolve('./urls.json');
  const urls = JSON.parse(fs.readFileSync(urlsPath));

  const oldUrl = req.url; // e.g., "/link1"
  if (urls[oldUrl]) {
    res.writeHead(302, { Location: urls[oldUrl] });
    res.end();
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
}
