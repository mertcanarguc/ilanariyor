const axios = require("axios")

axios.get('https://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key={your API key}').then(resp => {
    console.log(resp.data);
});
aaaa