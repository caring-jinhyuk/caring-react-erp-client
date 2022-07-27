/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkCenterReq } from '../models/WorkCenterReq';
import type { WorkCenterRes } from '../models/WorkCenterRes';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WorkCenterControllerService {

    /**
     * getWorkCenter
     * @param id id
     * @returns WorkCenterRes OK
     * @throws ApiError
     */
    public static getWorkCenterUsingGet(
        id: number,
    ): CancelablePromise<WorkCenterRes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/workCenter',
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
     * saveWorkCenter
     * @param workCenter workCenter
     * @returns WorkCenterRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveWorkCenterUsingPost(
        workCenter: WorkCenterReq,
    ): CancelablePromise<WorkCenterRes | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/workCenter',
            body: workCenter,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteWorkCenter
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteWorkCenterUsingDelete(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/workCenter',
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
     * getWorkCenterList
     * @param forAll forAll
     * @param withMain withMain
     * @returns WorkCenterRes OK
     * @throws ApiError
     */
    public static getWorkCenterListUsingGet(
        forAll: boolean = false,
        withMain: boolean = false,
    ): CancelablePromise<Array<WorkCenterRes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/workCenter/list',
            query: {
                'forAll': forAll,
                'withMain': withMain,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getState
     * @param centerId centerId
     * @returns any OK
     * @throws ApiError
     */
    public static getStateUsingGet(
        centerId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/workCenter/state',
            query: {
                'centerId': centerId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
