const custonExpress = require('./config/custonExpress')
const app = custonExpress()
app.listen(3000, () => console.log('servidor rodando na porta 3000'))

//req --> o que foi enviado para a  gente
//res --> nossa resposta para quem requisitou
