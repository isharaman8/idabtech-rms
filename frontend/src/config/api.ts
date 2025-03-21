import axios from "axios";
import config from "@/config/default";

const axiosInstance = axios.create({
	baseURL: config.apiUrl,
	headers: {
		"Content-Type": "application/json",
	},
});

export default axiosInstance;
