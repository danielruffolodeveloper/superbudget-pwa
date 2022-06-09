const axios = require('axios');
const baseUrl = 'localhost:5000/api/users';

export const registerUser = (name, email, password) => {
    return axios.post(`${baseUrl}/register`, {
        name,
        email,
        password
    });
}
export const loginUser = (email, password) => {
    return axios.post(`${baseUrl}/login`, {
        email,
        password
    });
}
export const getUser = (token) => {
    return axios.get(`${baseUrl}/user`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
