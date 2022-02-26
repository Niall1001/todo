import axios from 'axios';
const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/'
});
console.log(APP_API_URL)

export default instance;