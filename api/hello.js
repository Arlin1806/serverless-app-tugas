export default function handler(req, res) {
  const name = req.query.name || "Dunia";
  res.status(200).json({
    message: `Halo, ${name}!`,
    time: new Date().toISOString(),
  });
}
