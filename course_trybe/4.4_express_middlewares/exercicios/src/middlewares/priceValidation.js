module.exports = (req, res, next) => {
  const {name} = req.body
  if(!name){
    res.status(400).json({ message: "O campo price é obrigatorio"})
  }
  if(name.length < 0){
    res.status(400).json({ message: "O campo price precisa ter um numero maior ou igual a zero"})
  }
  next()
}