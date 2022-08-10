/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InsuranceUpdateRequest } from '../models/InsuranceUpdateRequest';
import type { Page_InsuranceUpdateRequest_ } from '../models/Page_InsuranceUpdateRequest_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InsuranceUpdateRequestControllerService {

    /**
     * getInsuranceUpdate
     * @param id id
     * @returns InsuranceUpdateRequest OK
     * @throws ApiError
     */
    public static getInsuranceUpdateUsingGet(
id: number,
): CancelablePromise<InsuranceUpdateRequest> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/insuranceUpdate',
            query: {
                'id': id,
            },
        });
    }

    /**
     * saveInsuranceUpdate
     * @param insuranceUpdateRequest insuranceUpdateRequest
     * @returns InsuranceUpdateRequest OK
     * @throws ApiError
     */
    public static saveInsuranceUpdateUsingPost(
insuranceUpdateRequest: InsuranceUpdateRequest,
): CancelablePromise<InsuranceUpdateRequest> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/insuranceUpdate',
            body: insuranceUpdateRequest,
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
            url: '/insuranceUpdate',
            query: {
                'id': id,
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
state?: 'PENDING' | 'DONE' | 'REJECT',
): CancelablePromise<Page_InsuranceUpdateRequest_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/insuranceUpdate/list',
            query: {
                'centerId': centerId,
                'keyword': keyword,
                'managerId': managerId,
                'page': page,
                'providerId': providerId,
                'size': size,
                'state': state,
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
state: 'PENDING' | 'DONE' | 'REJECT',
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/insuranceUpdate/setState',
            query: {
                'id': id,
                'state': state,
            },
        });
    }

}
