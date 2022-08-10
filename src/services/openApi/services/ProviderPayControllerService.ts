/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CaringProvider } from '../models/CaringProvider';
import type { Iterable_ProviderPay_ } from '../models/Iterable_ProviderPay_';
import type { Page_ProviderPay_ } from '../models/Page_ProviderPay_';
import type { ProviderPay } from '../models/ProviderPay';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProviderPayControllerService {

    /**
     * saveProviderPay
     * @param providerPay providerPay
     * @returns ProviderPay OK
     * @throws ApiError
     */
    public static saveProviderPayUsingPost(
providerPay: ProviderPay,
): CancelablePromise<ProviderPay> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providerPay',
            body: providerPay,
        });
    }

    /**
     * saveProviderPayAll
     * @param providerPay providerPay
     * @returns Iterable_ProviderPay_ OK
     * @throws ApiError
     */
    public static saveProviderPayAllUsingPost(
providerPay: Array<ProviderPay>,
): CancelablePromise<Iterable_ProviderPay_> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providerPay/all',
            body: providerPay,
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
            url: '/providerPay/cancelAll',
            query: {
                'centerId': centerId,
                'month': month,
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
     * @returns ProviderPay OK
     * @throws ApiError
     */
    public static centerPayListUsingPost(
center: number,
month: string,
providerId?: number,
scheduleReset: boolean = false,
userIdList?: Array<number>,
): CancelablePromise<Array<ProviderPay>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providerPay/centerPayList',
            query: {
                'center': center,
                'month': month,
                'providerId': providerId,
                'scheduleReset': scheduleReset,
            },
            body: userIdList,
        });
    }

    /**
     * completeProviderPay
     * @param providerPay providerPay
     * @returns ProviderPay OK
     * @throws ApiError
     */
    public static completeProviderPayUsingPost(
providerPay: Array<ProviderPay>,
): CancelablePromise<Array<ProviderPay>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providerPay/completeAll',
            body: providerPay,
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
            url: '/providerPay/each',
            query: {
                'id': id,
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
            url: '/providerPay/list',
            query: {
                'page': page,
                'size': size,
            },
        });
    }

    /**
     * getTargetCaringProviderList
     * @param month month
     * @param centerId centerId
     * @returns CaringProvider OK
     * @throws ApiError
     */
    public static getTargetCaringProviderListUsingGet(
month: string,
centerId?: Array<number>,
): CancelablePromise<Array<CaringProvider>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providerPay/list/target',
            query: {
                'centerId': centerId,
                'month': month,
            },
        });
    }

    /**
     * getProviderPayByMonth
     * @param month month
     * @param providerId providerId
     * @returns ProviderPay OK
     * @throws ApiError
     */
    public static getProviderPayByMonthUsingPost(
month: string,
providerId: number,
): CancelablePromise<ProviderPay> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providerPay/month',
            query: {
                'month': month,
                'providerId': providerId,
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
            url: '/providerPay/monthList',
            query: {
                'centerId': centerId,
            },
        });
    }

    /**
     * getProviderPayMonthListByProviderId
     * @param providerId providerId
     * @returns string OK
     * @throws ApiError
     */
    public static getProviderPayMonthListByProviderIdUsingPost(
providerId: number,
): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/providerPay/monthList/providerId',
            body: providerId,
        });
    }

    /**
     * getProviderPayByProvider
     * @param providerId providerId
     * @returns ProviderPay OK
     * @throws ApiError
     */
    public static getProviderPayByProviderUsingGet(
providerId: number,
): CancelablePromise<Array<ProviderPay>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/providerPay/providerId',
            query: {
                'providerId': providerId,
            },
        });
    }

}
