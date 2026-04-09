export default function handler(req, res) {
  const links = {
    link1: [
      "https://sites.google.com/view/math-staar-review/home",
      "https://sites.google.com/view/math-staar-review/home",
      "https://sites.google.com/view/math-staar-review/home"
    ]
  };

  const { link } = req.query;

  if (!links[link]) {
    return res.status(404).send("Not found");
  }

  const arr = links[link];

  const index = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 3)) % arr.length;

  res.writeHead(302, { Location: arr[index] });
  res.end();
}
