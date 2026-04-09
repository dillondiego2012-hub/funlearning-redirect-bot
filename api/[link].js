export default function handler(req, res) {
  const links = {
    link1: "https://sites.google.com/view/math-staar-review/home"
  };

  const { link } = req.query;

  if (links[link]) {
    res.writeHead(302, { Location: links[link] });
    res.end();
  } else {
    res.status(404).send("Not found");
  }
}
