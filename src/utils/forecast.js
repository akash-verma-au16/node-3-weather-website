const axios = require('axios')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude 
    + '&lon=' + longitude + '&appid=a19ae9e380f363ef152f2a8e081a03a3'

    axios.get(url).then(response => {
        const { current } = response.data;
        callback(undefined, current.weather[0].description + '. It is currently ' 
        + (parseFloat(current.temp) - 273).toFixed(2) + ' degress out. The wind speed today is ' 
        + current.wind_speed + ' mph with a humidity of ' + current.humidity + '.'
        )
    }).catch(error => {
        callback('Unable to connect to weather service! Try Another Search!', undefined)
    })
}

module.exports = forecast