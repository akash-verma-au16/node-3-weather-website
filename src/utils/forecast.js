const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude 
    + '&lon=' + longitude + '&appid=a19ae9e380f363ef152f2a8e081a03a3'

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.message) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.current.weather.description + ' It is currently ' 
            + response.current.temp + ' degress out. This wind speed today is ' 
            + response.current.wind_speed + ' with a humidity of ' 
            + response.current.humidity + '.')
        }
    })
}

module.exports = forecast