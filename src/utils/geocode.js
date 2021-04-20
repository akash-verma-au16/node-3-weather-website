const axios = require('axios')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address 
    + '.json?limit=2&access_token=pk.eyJ1IjoiYWthc2hjb29sMjAxNCIsImEiOiJja25wandzZjIxcHVvMm9ueDhrYTdteW9nIn0.NYLhcZT82ddE-5hg7Bk7JA'

    axios.get(url).then(response => {
        const { features } = response.data;
        callback(undefined, {
            latitude: features[0].center[1],
            longitude: features[0].center[0],
            location: features[0].place_name
        })
    }).catch(error => {
        callback('Unable to connect to location services! Try Another Search!', undefined)
    })
}

module.exports = geocode