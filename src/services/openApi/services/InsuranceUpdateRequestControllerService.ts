/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InsuranceUpdateRequestReq } from '../models/InsuranceUpdateRequestReq';
import type { InsuranceUpdateRequestRes } from '../models/InsuranceUpdateRequestRes';
import type { Page_InsuranceUpdateRequest_ } from '../models/Page_InsuranceUpdateRequest_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InsuranceUpdateRequestControllerService {

    /**
     * getInsuranceUpdate
     * @param id id
     * @returns InsuranceUpdateRequestRes OK
     * @throws ApiError
     */
    public static getInsuranceUpdateUsingGet(
        id: number,
    ): CancelablePromise<InsuranceUpdateRequestRes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/insuranceUpdate',
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
     * saveInsuranceUpdate
     * @param insuranceUpdateRequest insuranceUpdateRequest
     * @returns InsuranceUpdateRequestRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveInsuranceUpdateUsingPost(
        insuranceUpdateRequest: InsuranceUpdateRequestReq,
    ): CancelablePromise<InsuranceUpdateRequestRes | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/insuranceUpdate',
            body: insuranceUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteInsuranceUpdate
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteInsuranceUpdateUsingDelete(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/insuranceUpdate',
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
     * getInsuranceUpdateList
     * @param centerId centerId
     * @param keyword keyword
     * @param managerId managerId
     * @param page page
     * @param providerId providerId
     * @param size size
     * @param state state
     * @returns Page_InsuranceUpdateRequest_ OK
     * @throws ApiError
     */
    public static getInsuranceUpdateListUsingGet(
        centerId?: number,
        keyword?: string,
        managerId?: number,
        page?: number,
        providerId?: number,
        size: number = 10,
        state?: 'DONE' | 'PENDING' | 'REJECT',
    ): CancelablePromise<Page_InsuranceUpdateRequest_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/insuranceUpdate/list',
            query: {
                'centerId': centerId,
                'keyword': keyword,
                'managerId': managerId,
                'page': page,
                'providerId': providerId,
                'size': size,
                'state': state,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * setState
     * @param id id
     * @param state state
     * @returns any OK
     * @throws ApiError
     */
    public static setStateUsingPost(
        id: number,
        state: 'DONE' | 'PENDING' | 'REJECT',
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/insuranceUpdate/setState',
            query: {
                'id': id,
                'state': state,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
