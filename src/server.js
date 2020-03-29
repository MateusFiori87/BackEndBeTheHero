const app = require('./app')

// console.log('Servidor rodando na porta: ', process.env.PORT || 3333)

app.listen(process.env.PORT || 3333);