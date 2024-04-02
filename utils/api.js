import axios from  'axios';

const api = axios.create({
    baseURL: process.env.SERVICE,
    headers: {
        'Content-Type': "application/json",
        Accept: 'application/json'
    },
});

export default api;
