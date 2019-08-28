const express = require('express')
const path = require('path')


// console.log(__dirname)
// console.log(path.join(__dirname, '..//public'))

const app = express()

const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath))

//req is request and res is response

// app.get('', (req, res) =>{
//      res.send('<h1>Hello Express</h1>')
// })

app.get('/help', (req, res) =>
{
    res.send({
        name: 'Amit',
        age:17
    })
})

app.get('/about', (req, res) =>
{
    res.send('<h2>About Page</h2>')
})

app.get('/weather', (req, res) =>
{
    res.send({
        location: 'Patiala',
        forecast: {
            latitude: 45.34,
            longitude: 74.36
        }
    })
})


app.listen(3000, () =>
{
    console.log('Server is up on port 3000')
})