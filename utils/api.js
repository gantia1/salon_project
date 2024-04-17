import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/v1/',
});

api.interceptors.request.use(function (config) {
    config.headers = config.headers || {};
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    config.params = {...config.params, lang: localStorage.getItem('language')};
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default api;
