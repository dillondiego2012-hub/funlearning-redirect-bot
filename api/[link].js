import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.resolve('./links.json');
  const data = JSON.parse(fs.readFileSync(filePath));

  const { link } = req.query;

  if (!data[link]) {
    return res.status(404).send("Not found");
  }

  const linksArray = data[link];

  // rotate based on time (every 3 days)
  const index = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 3)) % linksArray.length;

  const target = linksArray[index];

  res.writeHead(302, { Location: target });
  res.end();
}
