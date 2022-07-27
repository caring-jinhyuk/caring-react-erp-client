/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProviderMatchedRecipientReq } from '../models/ProviderMatchedRecipientReq';
import type { ProviderMatchedRecipientRes } from '../models/ProviderMatchedRecipientRes';
import type { ServiceScheduleData } from '../models/ServiceScheduleData';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProviderMatchedRecipientControllerService {

    /**
     * getProviderRecipient
     * @param id id
     * @returns ProviderMatchedRecipientRes OK
     * @throws ApiError
     */
    public static getProviderRecipientUsingGet(
        id: number,
    ): CancelablePromise<ProviderMatchedRecipientRes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/providerRecipient',
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
     * saveProviderRecipient
     * @param providerMatchedRecipient providerMatchedRecipient
     * @returns ProviderMatchedRecipientRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveProviderRecipientUsingPost(
        providerMatchedRecipient: ProviderMatchedRecipientReq,
    ): CancelablePromise<ProviderMatchedRecipientRes | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/providerRecipient',
            body: providerMatchedRecipient,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
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
            url: '/api/providerRecipient',
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
            url: '/api/providerRecipient/getParams',
            query: {
                'id': id,
                'month': month,
                'year': year,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getProviderRecipientList
     * @returns ProviderMatchedRecipientRes OK
     * @throws ApiError
     */
    public static getProviderRecipientListUsingGet(): CancelablePromise<Array<ProviderMatchedRecipientRes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/providerRecipient/list',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
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
            url: '/api/providerRecipient/registerWorkRecords',
            query: {
                'id': id,
                'month': month,
                'year': year,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
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
            url: '/api/providerRecipient/registerWorkRecordsAll',
            query: {
                'centerId': centerId,
                'month': month,
                'year': year,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
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
            url: '/api/providerRecipient/updateByData',
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

}
