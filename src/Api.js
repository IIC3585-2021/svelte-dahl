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

const API = {getAll};

export default API;