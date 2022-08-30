const path = require('path')
const express = require('express')
const { response } = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

const viewPath=path.join(__dirname+'../../views')


app.set('views',path.join(__dirname+'../../views'))
app.set('view engine', 'hbs')

// app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Andrew Mead'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.'
    })
})

app.get('/weather', (req, res) => {
    
    if(!req.query.address){
        res.send({
            error:'provide some address'
        })
    }    

    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia',
        address: req.query.address
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})