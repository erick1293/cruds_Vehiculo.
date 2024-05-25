import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost/Tracelink/', 
    headers: {
        'Content-Type': 'application/json',
    }
});

export default instance;
