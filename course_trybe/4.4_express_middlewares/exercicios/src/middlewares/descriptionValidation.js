module.exports = (req, res, next) => {
  const {description, createdAt, rating, difficulty} = req.body;
  if(!description) res.status(400).json({ message: "O campo description é obrigatorio"})
  if(!description.createdAt) res.status(400).json({ message: "O campo createdAt é obrigatorio"})
  if(!description.rating) res.status(400).json({ message: "O campo rating é obrigatorio"})
  if(!description.difficulty) res.status(400).json({ message: "O campo difficulty é obrigatorio"})

  next()
}