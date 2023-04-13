// module.exports = (req, res, next) => {
//   const {description, createdAt, rating, difficulty} = req.body;
//   if(!description) res.status(400).json({ message: "O campo description é obrigatorio"})
//   if(!description.createdAt) res.status(400).json({ message: "O campo createdAt é obrigatorio"})
//   if(!description.rating) res.status(400).json({ message: "O campo rating é obrigatorio"})
//   if(!description.difficulty) res.status(400).json({ message: "O campo difficulty é obrigatorio"})

//   next()
// }

const descriptionValidation = (reqValue, res, value) => {
  if(!value) {
    return res.status(400).json({message: `O campo ${value} é obrigatorio`})
  }
};

module.exports = (req, res, next) => {
  const {description} = req.body

  return descriptionValidation(description, res, 'description')
  || descriptionValidation(description.createdAt, res, 'createdAt')
  || descriptionValidation(description.rating, res, 'rating')
  || descriptionValidation(description.difficulty, res, 'difficulty')
  || next()
}