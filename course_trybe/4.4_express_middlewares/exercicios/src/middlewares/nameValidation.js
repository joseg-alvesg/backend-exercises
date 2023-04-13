module.exports = (req, res, next) => {
  const {name} = req.body
  if(!name){
    res.status(400).json({ message: "O campo name é obrigatorio"})
  } else {
    next()
  }
}