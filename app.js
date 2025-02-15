require('@babel/register')
require('dotenv/config')
const express = require('express')

const app = express()
const path = require('path')
const cookieParser = require('cookie-parser');
const { verifyAccessToken } = require('./middleware/verifyJWT');

const indexRouter = require('./routes/index.route')
const ssr = require('./middleware/ssr')

const getUser = require('./middleware/getUser')

app.use(cookieParser());
app.use(express.urlencoded({ extended: 'true' }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(ssr)
app.use(verifyAccessToken);
app.use(getUser)
app.use('/', indexRouter)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Сервер работает на ${PORT} порту и желает вам хорошего дня.`)
})
