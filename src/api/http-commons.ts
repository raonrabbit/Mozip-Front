import axios from "axios";

const localAxios = axios.create({
	baseURL: `${import.meta.env.VITE_API_URI}/api/v1/`,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json;charset=utf-8",
	},
});

export default localAxios;
