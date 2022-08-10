/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CheckControllerService {

    /**
     * healthCheck
     * @returns string OK
     * @throws ApiError
     */
    public static healthCheckUsingGet(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/',
        });
    }

    /**
     * healthCheck
     * @returns string OK
     * @throws ApiError
     */
    public static healthCheckUsingHead(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/',
        });
    }

    /**
     * healthCheck
     * @returns string OK
     * @throws ApiError
     */
    public static healthCheckUsingPost(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/',
        });
    }

    /**
     * healthCheck
     * @returns string OK
     * @throws ApiError
     */
    public static healthCheckUsingPut(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/',
        });
    }

    /**
     * healthCheck
     * @returns string OK
     * @throws ApiError
     */
    public static healthCheckUsingDelete(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/',
        });
    }

    /**
     * healthCheck
     * @returns string OK
     * @throws ApiError
     */
    public static healthCheckUsingOptions(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/',
        });
    }

    /**
     * healthCheck
     * @returns string OK
     * @throws ApiError
     */
    public static healthCheckUsingPatch(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/',
        });
    }

    /**
     * healthCheck
     * @returns string OK
     * @throws ApiError
     */
    public static healthCheckUsingGet1(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/health',
        });
    }

    /**
     * healthCheck
     * @returns string OK
     * @throws ApiError
     */
    public static healthCheckUsingHead1(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/health',
        });
    }

    /**
     * healthCheck
     * @returns string OK
     * @throws ApiError
     */
    public static healthCheckUsingPost1(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/health',
        });
    }

    /**
     * healthCheck
     * @returns string OK
     * @throws ApiError
     */
    public static healthCheckUsingPut1(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/health',
        });
    }

    /**
     * healthCheck
     * @returns string OK
     * @throws ApiError
     */
    public static healthCheckUsingDelete1(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/health',
        });
    }

    /**
     * healthCheck
     * @returns string OK
     * @throws ApiError
     */
    public static healthCheckUsingOptions1(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/health',
        });
    }

    /**
     * healthCheck
     * @returns string OK
     * @throws ApiError
     */
    public static healthCheckUsingPatch1(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/health',
        });
    }

}
