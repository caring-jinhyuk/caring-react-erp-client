/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GovermentApiResult } from '../models/GovermentApiResult';
import type { Page_GovermentApiResult_ } from '../models/Page_GovermentApiResult_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GovermentApiResultControllerService {

    /**
     * getGoverApi
     * @param id id
     * @returns GovermentApiResult OK
     * @throws ApiError
     */
    public static getGoverApiUsingGet(
        id: number,
    ): CancelablePromise<GovermentApiResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/goverApi',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * doWork
     * @param body body
     * @returns any OK
     * @throws ApiError
     */
    public static doWorkUsingPost(
        body: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/goverApi',
            body: body,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteGoverApi
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteGoverApiUsingDelete(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/goverApi',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getGoverApiList
     * @param page page
     * @param size size
     * @returns Page_GovermentApiResult_ OK
     * @throws ApiError
     */
    public static getGoverApiListUsingGet(
        page?: number,
        size: number = 10,
    ): CancelablePromise<Page_GovermentApiResult_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/goverApi/list',
            query: {
                'page': page,
                'size': size,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getResult
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static getResultUsingGet(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/goverApi/result',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
