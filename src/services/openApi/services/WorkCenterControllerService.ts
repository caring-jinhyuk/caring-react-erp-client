/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkCenter } from '../models/WorkCenter';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WorkCenterControllerService {

    /**
     * getWorkCenter
     * @param id id
     * @returns WorkCenter OK
     * @throws ApiError
     */
    public static getWorkCenterUsingGet(
id: number,
): CancelablePromise<WorkCenter> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workCenter',
            query: {
                'id': id,
            },
        });
    }

    /**
     * saveWorkCenter
     * @param workCenter workCenter
     * @returns WorkCenter OK
     * @throws ApiError
     */
    public static saveWorkCenterUsingPost(
workCenter: WorkCenter,
): CancelablePromise<WorkCenter> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workCenter',
            body: workCenter,
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
            url: '/workCenter',
            query: {
                'id': id,
            },
        });
    }

    /**
     * getWorkCenterList
     * @param forAll forAll
     * @param withMain withMain
     * @returns WorkCenter OK
     * @throws ApiError
     */
    public static getWorkCenterListUsingGet(
forAll: boolean = false,
withMain: boolean = false,
): CancelablePromise<Array<WorkCenter>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workCenter/list',
            query: {
                'forAll': forAll,
                'withMain': withMain,
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
            url: '/workCenter/state',
            query: {
                'centerId': centerId,
            },
        });
    }

}
