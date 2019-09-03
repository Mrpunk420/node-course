const express = require('express')
const path = require('path')
//for partials i.e for includes like header and footer
const hbs = require('hbs')

// console.log(__dirname)
// console.log(path.join(__dirname, '..//public'))

const app = express()

const geocodePath = path.join(__dirname, '../../weather-app/utils/geocode');

const forecastPath = path.join(__dirname, '../../weather-app/utils/geocode');


const geocode = require(geocodePath);
const forecastcode = require(forecastPath);



//define paths for express config 
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath)



//setup handlebars and config different   
app.set('view engine', 'hbs')  
app.set('views',viewsPath)
 
app.use(express.static(publicDirPath))


app.get('/', (req, res) =>
{
    res.render('index', {
        title: 'Weather App',
        name: 'Amit',
    })
})

app.get('/help', (req, res) =>
{
    res.render('help', {
        title: 'Help Page',
        message: 'This is the help page',
        name: 'Amit',
        
    })
})

app.get('/help', (req, res) => 
{
    res.send({
        name: 'Amit',
        age:17
    })
})

app.get('/about', (req, res) =>
{
    res.render('about',{
        title: 'Weather App',
        name: 'Amit',
    })
})

// app.get('/weather', (req, res) =>
// {
//     if (!(req.query.address)) {
//         return res.send({
//             error: 'You must provide a search term',
//            })         
//     }

//     const address = req.query.address
    
//     const data = geocode(address, (error,{latitude,longitude,location}) => {
//     if (error) {
//         return console.log('error', error); 
//         }
    
//         forecastcode(latitude, longitude, (error, data) =>
//         {
//             if (error) {
//                 return console
//             }
//             return {
//                 data,
//                 location
//             }
//         })
    
//     })

//     res.send({
//         data,
//     })
// })

app.get('/products', (req, res) =>{
    
    if (!(req.query.q)) {
        return res.send({
            error: 'You must provide a search term',
           })         
    }
    
    // console.log(req.query.q)
    
    res.send({
        products: req.query,
    })
})

app.get('/help/*', (req, res) =>
{
    res.render('404', {
        message: 'Help page not found!',
    })
})

app.get('*', (req, res) =>
{
    res.render('404',{
        message: 'Page not found'
    })
})

app.listen(3000, () =>
{
    console.log('Server is up on port 3000')
})