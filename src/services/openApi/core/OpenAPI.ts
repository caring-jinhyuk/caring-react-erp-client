/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiRequestOptions } from './ApiRequestOptions';
import { getToken } from '../../authService';

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

export type OpenAPIConfig = {
	BASE: string | undefined;
	VERSION: string;
	WITH_CREDENTIALS: boolean;
	CREDENTIALS: 'include' | 'omit' | 'same-origin';
	TOKEN?: string | Resolver<string>;
	USERNAME?: string | Resolver<string>;
	PASSWORD?: string | Resolver<string>;
	HEADERS?: Headers | Resolver<Headers>;
	ENCODE_PATH?: (path: string) => string;
};

export const OpenAPI: OpenAPIConfig = {
	BASE: process.env.REACT_APP_BASE_URL,
	VERSION: '1.0',
	WITH_CREDENTIALS: false,
	CREDENTIALS: 'include',
	TOKEN: getToken('token') ?? undefined,
	USERNAME: undefined,
	PASSWORD: undefined,
	HEADERS: undefined,
	ENCODE_PATH: undefined,
};
