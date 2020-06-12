let express = require('express')
let app = express()
let personRoute = require('./routes/person')
let customerRoute = require('./routes/customer')
let path = require('path')


app.use(express.json())
app.use(express.urlencoded());

app.use((req, res, next) => {
    console.log(`${new Date().toString()} ${req.originalUrl}`)
    next()
})

app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public'))

//hander for 404 - not found
app.use((req, res, next) => {
    res.status(404).send('We think you are lost!')
})

// handler for 500 
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendFile(path.join(__dirname, '../public/500.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))