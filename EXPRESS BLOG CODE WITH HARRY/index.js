const express = require('express')
const app = express()
const path = require('path')
const engine = require('express-handlebars').engine

const port = 3000

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', require(path.join(__dirname, 'routes/blog.js')))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})