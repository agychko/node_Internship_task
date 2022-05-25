const express = require('express');
const app = express();
const countries = require('country-json/src/country-by-capital-city.json');

app.get('/capital', function(request, response) {
    try {
        const { country, city } = countries.find((el) => el.country.toLowerCase() == request.query.country.toLowerCase())
        response.status(200).send(`Capital of ${country} is ${city}`)
    } catch (err) {
        response.status(404).send('Country is not defined')
    }

})

app.listen(3000)
