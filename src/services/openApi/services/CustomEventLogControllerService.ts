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
     * @returns CustomEventLog OK
     * @throws ApiError
     */
    public static getDLogUsingGet({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<CustomEventLog> {
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
     * @returns CustomEventLog OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveDLogUsingPost({
        customEventLog,
    }: {
        /**
         * customEventLog
         */
        customEventLog: CustomEventLog,
    }): CancelablePromise<CustomEventLog | any> {
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
     * @returns any OK
     * @throws ApiError
     */
    public static deleteDLogUsingDelete({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<any> {
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
     * @returns Page_CustomEventLog_ OK
     * @throws ApiError
     */
    public static getDLogListUsingGet({
        page,
        size = 10,
    }: {
        /**
         * page
         */
        page?: number,
        /**
         * size
         */
        size?: number,
    }): CancelablePromise<Page_CustomEventLog_> {
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
