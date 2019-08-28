const request = require('request')

const forecast = (latitude, longitude, callback) =>
{
    const url = 'https://api.darksky.net/forecast/8fca39aebc506a677c5b619c85227ba7/' + latitude + ',' + longitude + '?units=si'

    
    request({ url, json: true }, (error, response) =>
    {
        const { error: responeError, } = response.body
        const { summary, temperature, precipProbability } = response.body.currently
        
        if (error) {
        callback('Unable to find the Location',undefined)
        } else if (responeError) {
            callback(response.body.error,undefined)
        } else {
            callback(undefined, {
                summary,
                temperature,
                precipProbability
            })
        }
    })
    
}

module.exports = forecast;