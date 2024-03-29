const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db

consign()
.then('./config/middlewares.js')
.then('./api')
.then('./config/routes.js')
.then(app)


app.listen(3001, () => {
    console.log('Backend executando...')
})