/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProviderMatchedRecipient } from '../models/ProviderMatchedRecipient';
import type { ServiceScheduleData } from '../models/ServiceScheduleData';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProviderMatchedRecipientControllerService {

    /**
     * getProviderRecipient
     * @param id id
     * @returns ProviderMatchedRecipient OK
     * @throws ApiError
     */
    public static getProviderRecipientUsingGet(
id: number,
): CancelablePromise<ProviderMatchedRecipient> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providerRecipient',
            query: {
                'id': id,
            },
        });
    }

    /**
     * saveProviderRecipient
     * @param providerMatchedRecipient providerMatchedRecipient
     * @returns ProviderMatchedRecipient OK
     * @throws ApiError
     */
    public static saveProviderRecipientUsingPost(
providerMatchedRecipient: ProviderMatchedRecipient,
): CancelablePromise<ProviderMatchedRecipient> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providerRecipient',
            body: providerMatchedRecipient,
        });
    }

    /**
     * deleteProviderRecipient
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteProviderRecipientUsingDelete(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/providerRecipient',
            query: {
                'id': id,
            },
        });
    }

    /**
     * getRequestApiParameter
     * @param id id
     * @param month month
     * @param year year
     * @returns any OK
     * @throws ApiError
     */
    public static getRequestApiParameterUsingGet(
id: number,
month: number,
year: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providerRecipient/getParams',
            query: {
                'id': id,
                'month': month,
                'year': year,
            },
        });
    }

    /**
     * getProviderRecipientList
     * @returns ProviderMatchedRecipient OK
     * @throws ApiError
     */
    public static getProviderRecipientListUsingGet(): CancelablePromise<Array<ProviderMatchedRecipient>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providerRecipient/list',
        });
    }

    /**
     * registerWorkRecords
     * @param id id
     * @param month month
     * @param year year
     * @returns any OK
     * @throws ApiError
     */
    public static registerWorkRecordsUsingPost(
id: number,
month: number,
year: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providerRecipient/registerWorkRecords',
            query: {
                'id': id,
                'month': month,
                'year': year,
            },
        });
    }

    /**
     * registerWorkRecordsAll
     * @param centerId centerId
     * @param month month
     * @param year year
     * @returns any OK
     * @throws ApiError
     */
    public static registerWorkRecordsAllUsingPost(
centerId: number,
month: number,
year: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providerRecipient/registerWorkRecordsAll',
            query: {
                'centerId': centerId,
                'month': month,
                'year': year,
            },
        });
    }

    /**
     * updateByData
     * @param centerId centerId
     * @param data data
     * @returns any OK
     * @throws ApiError
     */
    public static updateByDataUsingPost(
centerId: number,
data: Array<ServiceScheduleData>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providerRecipient/updateByData',
            query: {
                'centerId': centerId,
            },
            body: data,
        });
    }

}
