module.exports = (req, res, next) => {
  const {name} = req.body
  if(!name){
    res.status(400).json({ message: "O campo name é obrigatorio"})
  }
  if(name.length < 4){
    res.status(400).json({ message: "O campo name precisa ter pelo menos 4 caracteres"})
  }
  next()
}