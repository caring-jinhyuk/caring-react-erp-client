/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PlanDataReq } from '../models/PlanDataReq';
import type { PlanDataRes } from '../models/PlanDataRes';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PlanDataControllerService {

    /**
     * getPlanData
     * @param id id
     * @returns PlanDataRes OK
     * @throws ApiError
     */
    public static getPlanDataUsingGet(
        id: number,
    ): CancelablePromise<PlanDataRes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/planData',
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
     * savePlanData
     * @param planData planData
     * @returns any OK
     * @throws ApiError
     */
    public static savePlanDataUsingPost(
        planData: Array<PlanDataReq>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/planData',
            body: planData,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
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
            url: '/api/planData',
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
            url: '/api/planData/deletePlan',
            query: {
                'centerId': centerId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
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
            url: '/api/planData/deleteReal',
            query: {
                'centerId': centerId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
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
            url: '/api/planData/param',
            query: {
                'end': end,
                'start': start,
                'workCenterId': workCenterId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
