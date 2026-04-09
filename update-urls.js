import fs from 'fs';
import path from 'path';

const urlsPath = path.resolve('./urls.json');
const urls = JSON.parse(fs.readFileSync(urlsPath));

const newUrl = "https://sites.google.com/studentmail.conroeisd.net/funlearning/home"; // change target here
urls["/link1"] = newUrl;

fs.writeFileSync(urlsPath, JSON.stringify(urls, null, 2));
console.log('URL updated!');
