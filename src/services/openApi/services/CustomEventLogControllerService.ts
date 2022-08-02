/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomEventLog } from '../models/CustomEventLog';
import type { Page_CustomEventLog_ } from '../models/Page_CustomEventLog_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CustomEventLogControllerService {

    /**
     * getDLog
     * @param id id
     * @returns CustomEventLog OK
     * @throws ApiError
     */
    public static getDLogUsingGet(
        id: number,
    ): CancelablePromise<CustomEventLog> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dLog',
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
     * saveDLog
     * @param customEventLog customEventLog
     * @returns CustomEventLog OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveDLogUsingPost(
        customEventLog: CustomEventLog,
    ): CancelablePromise<CustomEventLog | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dLog',
            body: customEventLog,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteDLog
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteDLogUsingDelete(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/dLog',
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
     * getDLogList
     * @param page page
     * @param size size
     * @returns Page_CustomEventLog_ OK
     * @throws ApiError
     */
    public static getDLogListUsingGet(
        page?: number,
        size: number = 10,
    ): CancelablePromise<Page_CustomEventLog_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dLog/list',
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

}
