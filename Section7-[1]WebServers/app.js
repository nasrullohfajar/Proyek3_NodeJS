// // [To get started, add Express to your project]
// const express = require('express')
// const app = express()

app.get('', (req, res) => {
    res.send('Hello express!')
})
app.get('/weather', (req, res) => {
    res.send('Your weather')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})


// [Serving up HTML and JSON]
app.get('', (req, res) => {
    // Provide HTML to render in the browser
    res.send('<h1>Weather</h1>')
})
app.get('/weather', (req, res) => {
    // Provide an object to send as JSON
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})


// [Serving up a Static Directory]
const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res) => {
    res.send({
    forecast: 'It is snowing',
    location: 'Philadelphia'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})


// [Setting up Handlebars]
app.set('view engine', 'hbs')

app.get('', (req, res) => {
    res.render('index', {
    title: 'My title',
    name: 'Andrew Mead'
    })
})


// [Customizing the Views Directory]
const viewsPath = path.join(__dirname, '../templates/views')
app.set('views', viewsPath)


// [Setting up Partials]
const hbs = require('hbs')

// Other lines hidden for brevity
const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)


// [Setting up a 404 Page]
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    })
})