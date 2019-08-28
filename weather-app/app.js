const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const yargs = require('yargs')

/////////////////// using yargs NOTE:- You can only use one method as both develop differnt results as get comand used as perameter 3 on command line 

yargs.command({
    command: 'get',
    describe: 'Get the weather!',
    builder: {
        location: {
            describe: 'Location',
            demandOption: true,
            type:"string"
        }
    },
    handler(argv)
    {
        
        geoCode(argv.location, (error, {latitude,longitude,location}) =>{
            if (error) {
                return console.log('error',error)    
            }

            // const {latitude,longitude,location} = response

            forecast(latitude,longitude, (error, data) => {
                if (error) {
                    return console.log('Error', error)
                }
                console.log(location)
                console.log(data)
            })

        })
    }
})


yargs.parse()

///////////////// using process

const address = process.argv[2]

if (!address) {
    console.log('please place the third parameter as address or use get --location command')
} else {
    geoCode(address, (error, { latitude, longitude, location }) =>{
            if (error) {
                return console.log('error',error)    
            }

            forecast(latitude,longitude, (error, data) => {
                if (error) {
                    return console.log('Error', error)
                }
                console.log(location)
                console.log(data)
            })

        })
}