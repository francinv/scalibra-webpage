import axios from "axios";

const baseURL = 'http://127.0.0.1:8000/api/';

const axiosService = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosService;