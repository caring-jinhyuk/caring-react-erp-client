import { OpenAPI } from './openApi';

export const getToken = (key: string) => {
	return localStorage.getItem(key);
};

export const setToken = (token: string) => {
	OpenAPI.TOKEN = token;
	localStorage.setItem('token', token);
};
