module.exports = (req, res) => {
  const { path } = req.query;
  const url = `https://${path}`;
  fetch(url).then(r => r.text()).then(body => res.send(body)).catch(() => res.status(500).send('Error'));
};