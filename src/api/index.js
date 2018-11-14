import axios from 'axios';
import { baseURL } from '../config.dev.json';

let api = axios.create({
	baseURL,
	timeout: 30000,
	withCredentials: true
});

api.interceptors.response.use(
	(res) => {
		return res.data;
	},
	(err) => {
		return `api_err -> ${err.data}`;
	}
);

export default api;
