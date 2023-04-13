module.exports = (req, res, next) => {
  const { createdAt, rating, difficulty } = req.body.description;

  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (!isFormatDate.test(createdAt)) {
    return res.status(400).json({ message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' })
  }

  if(!Number.isInteger(rating) || rating < 1 || rating > 5) res.status(400).json({ message: "O campo rating deve ser um número inteiro entre 1 e 5" })

  if(difficulty  !== ("Fácil" || "Médio" || "Difícil")) res.status(400).json({ message: "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" })

  next()
}