
// //Async 101
// console.log('Starting')

// // Wait 2 second before running the function
// setTimeout(() => {
//     console.log('2 Second Timer')
// }, 2000)

// console.log('Stopping')

// //Making HTTP Request
// const request = require('request')

// const url =
// 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233'

// request({ url: url }, (error, response) => {
//     // Parse the response body from JSON string into JavaScript object
//     const data = JSON.parse(response.body)
    
//     // Will print the current temperature to the console
//     console.log(data.currently.temperature)
// })

// //Request Options
// const request = require('request')

// const url =
// 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
//     console.log(response.body.daily.data[0].summary + ' It is currently ' +
// response.body.currently.temperature + ' degrees out. There is a ' +
// response.body.currently.precipProbability + '% chance of rain.')
// })

// //Handling Errors
// const request = require('request')

// const geocodeURL =
// 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//  }
// })

// //The Callback Function
// const geocode = (address, callback) =>{
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }

//         callback(data)
//     }, 2000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })

// //Callback Abstraction
// const request = require('request')

// const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to location services!', undefined)
//         } else if (response.body.features.length === 0) {
//             callback('Unable to find location. Try another search.', undefined)
//         } else {
//             callback(undefined, {
//                 latitude: response.body.features[0].center[0],
//                 longitude: response.body.features[0].center[1],
//                 location: response.body.features[0].place_name
//             })
//         }
//     })
// }

// module.exports = geocode

// const geocode = require('./utils/geocode')

// geocode('Boston', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

// //Callback Chaining
// geocode(address, (error, data) => {
//     if (error) {
//         return console.log(error)
//     }

//     forecast(data.latitude, data.longitude, (error, forecastData) => {
//         if (error) {
//             return console.log(error)
//         }

//         console.log(data.location)
//         console.log(forecastData)
//     })
// })


//    //properly Shorthand
// const name = 'Andrew'
// const userAge = 27

// const user = {
//     name: name,
//     age: userAge,
//     location: 'Philadelphia'
// }

// const name = 'Andrew'
// const userAge = 27

// const user = {
//     name,
//     age: userAge,
//     location: 'Philadelphia'
// }

// console.log(user)


// //Object Destructuring
// const user = {
//     name: 'Andrew',
//     age: 27,
//     location: 'Philadelphia'
//    }

// // The line below uses destructuring
// const { age, location:address } = user
   
// console.log(age)
// console.log(address)


//    //Destrukturing Function Argument
// const product = {
//     label: 'Red notebook',
//     price: 3,
//     stock: 201,
//     salePrice: undefined,
//     rating: 4.2
//    }

// const transaction = (type, { label, stock }) => {
//     console.log(type, label, stock)
// }
// transaction('order', product)


//The HTTP Module
const https = require('https')
const url =
'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/40,-75'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()