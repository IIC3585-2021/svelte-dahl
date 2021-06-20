import axios from "axios";

async function getAll() {
    const options = {
        method: 'GET',
        url: 'https://worldometers.p.rapidapi.com/api/coronavirus/all/',
        headers: {
          'x-rapidapi-key': '531a08cec7msh94a6d9b4e4a844ep15f8fbjsnb6421a2820ce',
          'x-rapidapi-host': 'worldometers.p.rapidapi.com'
        }
      };

    const response = await axios.request(options);
    return response;
}

async function getCountry(country) {
    const options = {
        method: 'GET',
        url: 'https://worldometers.p.rapidapi.com/api/coronavirus/country/${country}',
        headers: {
            'x-rapidapi-key': '531a08cec7msh94a6d9b4e4a844ep15f8fbjsnb6421a2820ce',
            'x-rapidapi-host': 'worldometers.p.rapidapi.com'
        }
        };

    const response = await axios.request(options);
    return response;
    return axios.request(options).then(function (response) {
        console.log(response.data);
        }).catch(function (error) {
        console.error(error);
    });
}

const API = {getAll, getCountry};

export default API;