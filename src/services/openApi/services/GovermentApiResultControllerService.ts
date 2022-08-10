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
            url: '/goverApi',
            query: {
                'id': id,
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
            url: '/goverApi',
            body: body,
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
            url: '/goverApi',
            query: {
                'id': id,
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
            url: '/goverApi/list',
            query: {
                'page': page,
                'size': size,
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
            url: '/goverApi/result',
            query: {
                'id': id,
            },
        });
    }

}
