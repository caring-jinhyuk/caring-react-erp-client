/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CaringProviderRes } from '../models/CaringProviderRes';
import type { Iterable_ProviderPay_ } from '../models/Iterable_ProviderPay_';
import type { Page_ProviderPay_ } from '../models/Page_ProviderPay_';
import type { ProviderPayReq } from '../models/ProviderPayReq';
import type { ProviderPayRes } from '../models/ProviderPayRes';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProviderPayControllerService {

    /**
     * saveProviderPay
     * @param providerPay providerPay
     * @returns ProviderPayRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveProviderPayUsingPost(
        providerPay: ProviderPayReq,
    ): CancelablePromise<ProviderPayRes | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/providerPay',
            body: providerPay,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * saveProviderPayAll
     * @param providerPay providerPay
     * @returns Iterable_ProviderPay_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveProviderPayAllUsingPost(
        providerPay: Array<ProviderPayReq>,
    ): CancelablePromise<Iterable_ProviderPay_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/providerPay/all',
            body: providerPay,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * cancelAll
     * @param centerId centerId
     * @param month month
     * @returns any OK
     * @throws ApiError
     */
    public static cancelAllUsingPost1(
        centerId: number,
        month: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/providerPay/cancelAll',
            query: {
                'centerId': centerId,
                'month': month,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * centerPayList
     * @param center center
     * @param month month
     * @param providerId providerId
     * @param scheduleReset scheduleReset
     * @param userIdList userIdList
     * @returns ProviderPayRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static centerPayListUsingPost(
        center: number,
        month: string,
        providerId?: number,
        scheduleReset: boolean = false,
        userIdList?: Array<number>,
    ): CancelablePromise<Array<ProviderPayRes> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/providerPay/centerPayList',
            query: {
                'center': center,
                'month': month,
                'providerId': providerId,
                'scheduleReset': scheduleReset,
            },
            body: userIdList,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * completeProviderPay
     * @param providerPay providerPay
     * @returns ProviderPayRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static completeProviderPayUsingPost(
        providerPay: Array<ProviderPayReq>,
    ): CancelablePromise<Array<ProviderPayRes> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/providerPay/completeAll',
            body: providerPay,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * delete
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteUsingDelete(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/providerPay/each',
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
     * getProviderPayList
     * @param page page
     * @param size size
     * @returns Page_ProviderPay_ OK
     * @throws ApiError
     */
    public static getProviderPayListUsingGet(
        page?: number,
        size: number = 10,
    ): CancelablePromise<Page_ProviderPay_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/providerPay/list',
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

    /**
     * getTargetCaringProviderList
     * @param month month
     * @param centerId centerId
     * @returns CaringProviderRes OK
     * @throws ApiError
     */
    public static getTargetCaringProviderListUsingGet(
        month: string,
        centerId?: Array<number>,
    ): CancelablePromise<Array<CaringProviderRes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/providerPay/list/target',
            query: {
                'centerId': centerId,
                'month': month,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getProviderPayByMonth
     * @param month month
     * @param providerId providerId
     * @returns ProviderPayRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static getProviderPayByMonthUsingPost(
        month: string,
        providerId: number,
    ): CancelablePromise<ProviderPayRes | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/providerPay/month',
            query: {
                'month': month,
                'providerId': providerId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getProviderPayMonthList
     * @param centerId centerId
     * @returns string OK
     * @throws ApiError
     */
    public static getProviderPayMonthListUsingGet(
        centerId?: Array<number>,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/providerPay/monthList',
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

    /**
     * getProviderPayMonthListByProviderId
     * @param providerId providerId
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static getProviderPayMonthListByProviderIdUsingPost(
        providerId: number,
    ): CancelablePromise<Array<string> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/providerPay/monthList/providerId',
            body: providerId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getProviderPayByProvider
     * @param providerId providerId
     * @returns ProviderPayRes OK
     * @throws ApiError
     */
    public static getProviderPayByProviderUsingGet(
        providerId: number,
    ): CancelablePromise<Array<ProviderPayRes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/providerPay/providerId',
            query: {
                'providerId': providerId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
