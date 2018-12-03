import axios from 'axios';

let api = axios.create({
	baseURL: process.env.NODE_ENV == 'development' ? process.env.BASE_URL : null,
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
