import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Read urls.json from the root
  const urlsPath = path.resolve('./urls.json');
  const urls = JSON.parse(fs.readFileSync(urlsPath));

  // Extract the path after /api
  // req.url might be like "/link1" or "/link1?foo=bar"
  const oldUrl = req.url.split('?')[0]; // remove query string

  // Check if the path exists in urls.json
  if (urls[oldUrl]) {
    res.writeHead(302, { Location: urls[oldUrl] });
    res.end();
  } else {
    res.writeHead(404);
    res.end(`Page not found: ${oldUrl}`);
  }
}
