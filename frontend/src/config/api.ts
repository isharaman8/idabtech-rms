import axios from "axios";
import config from "@/config/default";

const axiosInstance = axios.create({
	baseURL: config.apiUrl, // API Base URL from config
	headers: {
		"Content-Type": "application/json",
	},
});

export default axiosInstance;
