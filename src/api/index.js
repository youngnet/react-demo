import axios from 'axios';

let api = axios.create({
	timeout: 30000,
	withCredentials: true
});

if (process.env.NODE_ENV == 'development') {
	api.config.baseURL = process.env.BASE_URL;
}

api.interceptors.response.use(
	(res) => {
		return res.data;
	},
	(err) => {
		return `api_err -> ${err.data}`;
	}
);

export default api;
