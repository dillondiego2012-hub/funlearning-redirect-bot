import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Path to urls.json in the root of the repo
  const urlsPath = path.resolve('./urls.json');

  // Read and parse urls.json
  const urls = JSON.parse(fs.readFileSync(urlsPath));

  // The path user visited, e.g., "/link1"
  const oldUrl = req.url;

  if (urls[oldUrl]) {
    // Redirect to the target URL
    res.writeHead(302, { Location: urls[oldUrl] });
    res.end();
  } else {
    // If path not found, show 404
    res.writeHead(404);
    res.end('Page not found');
  }
}
