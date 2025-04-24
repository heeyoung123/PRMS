import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from "axios";
import {getToken, removeToken} from "../store/authStore";

const BASE_URL = "http://localhost:1111";
const DEFAULT_TIMEOOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
	const axiosInstance = axios.create({
		baseURL: BASE_URL,
		timeout: DEFAULT_TIMEOOUT,
		headers: {
			"content-type": "application/json",
			Authorization: getToken() ? getToken() : "",
		},
		withCredentials: true,
		...config,
	});
	axiosInstance.interceptors.response.use((response) => {
			return response;
		},
		(error) => {

			if (error.response.status === 401) {
				removeToken();
				window.location.href = "/login";
				return;
			}
			return Promise.reject(error);
		},
	);
	return axiosInstance;
};

export const httpClient = createClient();