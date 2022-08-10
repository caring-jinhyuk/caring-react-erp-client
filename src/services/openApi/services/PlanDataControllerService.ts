/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PlanData } from '../models/PlanData';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PlanDataControllerService {

    /**
     * getPlanData
     * @param id id
     * @returns PlanData OK
     * @throws ApiError
     */
    public static getPlanDataUsingGet(
id: number,
): CancelablePromise<PlanData> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/planData',
            query: {
                'id': id,
            },
        });
    }

    /**
     * savePlanData
     * @param planData planData
     * @returns any OK
     * @throws ApiError
     */
    public static savePlanDataUsingPost(
planData: Array<PlanData>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/planData',
            body: planData,
        });
    }

    /**
     * deletePlanData
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deletePlanDataUsingDelete(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/planData',
            query: {
                'id': id,
            },
        });
    }

    /**
     * deleteEachPlanData
     * @param centerId centerId
     * @param data data
     * @returns any OK
     * @throws ApiError
     */
    public static deleteEachPlanDataUsingPost(
centerId: number,
data: Array<string>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/planData/deletePlan',
            query: {
                'centerId': centerId,
            },
            body: data,
        });
    }

    /**
     * deleteEachRealData
     * @param centerId centerId
     * @param data data
     * @returns any OK
     * @throws ApiError
     */
    public static deleteEachRealDataUsingPost(
centerId: number,
data: Array<string>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/planData/deleteReal',
            query: {
                'centerId': centerId,
            },
            body: data,
        });
    }

    /**
     * getPlanDataParamList
     * @param end end
     * @param start start
     * @param workCenterId workCenterId
     * @returns string OK
     * @throws ApiError
     */
    public static getPlanDataParamListUsingGet(
end: string,
start: string,
workCenterId: number,
): CancelablePromise<Array<Array<string>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/planData/param',
            query: {
                'end': end,
                'start': start,
                'workCenterId': workCenterId,
            },
        });
    }

}
