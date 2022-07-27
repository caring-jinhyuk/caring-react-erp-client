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
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
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
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * healthCheck
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static healthCheckUsingPost(): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * healthCheck
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static healthCheckUsingPut(): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
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
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
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
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
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
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
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
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
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
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * healthCheck
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static healthCheckUsingPost1(): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/health',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * healthCheck
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static healthCheckUsingPut1(): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/health',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
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
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
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
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
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
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
