/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Burden } from '../models/Burden';
import type { Iterable_Burden_ } from '../models/Iterable_Burden_';
import type { ProviderOrRecipientId } from '../models/ProviderOrRecipientId';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BurdenControllerService {

    /**
     * saveBurden
     * @param burden burden
     * @returns Burden OK
     * @throws ApiError
     */
    public static saveBurdenUsingPost(
burden: Burden,
): CancelablePromise<Burden> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/burden',
            body: burden,
        });
    }

    /**
     * saveBurdenAll
     * @param burden burden
     * @returns Iterable_Burden_ OK
     * @throws ApiError
     */
    public static saveBurdenAllUsingPost(
burden: Array<Burden>,
): CancelablePromise<Iterable_Burden_> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/burden/all',
            body: burden,
        });
    }

    /**
     * cancelAll
     * @param centerId centerId
     * @param month month
     * @returns any OK
     * @throws ApiError
     */
    public static cancelAllUsingPost(
centerId: number,
month: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/burden/cancelAll',
            query: {
                'centerId': centerId,
                'month': month,
            },
        });
    }

    /**
     * centerAllBurdenList
     * @param center center
     * @param month month
     * @param managerId managerId
     * @returns Burden OK
     * @throws ApiError
     */
    public static centerAllBurdenListUsingPost(
center: number,
month: string,
managerId?: Array<number>,
): CancelablePromise<Array<Burden>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/burden/centerAllBurdenList',
            query: {
                'center': center,
                'month': month,
            },
            body: managerId,
        });
    }

    /**
     * centerBurdenList
     * @param month month
     * @param centerId centerId
     * @param managerId managerId
     * @returns Burden OK
     * @throws ApiError
     */
    public static centerBurdenListUsingPost(
month: string,
centerId?: Array<number>,
managerId?: Array<number>,
): CancelablePromise<Array<Burden>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/burden/centerBurdenList',
            query: {
                'centerId': centerId,
                'month': month,
            },
            body: managerId,
        });
    }

    /**
     * centerBurdenMonthList
     * @param centerId centerId
     * @returns string OK
     * @throws ApiError
     */
    public static centerBurdenMonthListUsingGet(
centerId?: Array<number>,
): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/burden/centerBurdenMonthList',
            query: {
                'centerId': centerId,
            },
        });
    }

    /**
     * completeBurden
     * @param burdens burdens
     * @returns Burden OK
     * @throws ApiError
     */
    public static completeBurdenUsingPost(
burdens: Array<Burden>,
): CancelablePromise<Array<Burden>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/burden/completeAll',
            body: burdens,
        });
    }

    /**
     * getBurden
     * @param month month
     * @param recipientId recipientId
     * @returns Burden OK
     * @throws ApiError
     */
    public static getBurdenUsingPost(
month: string,
recipientId: number,
): CancelablePromise<Burden> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/burden/get',
            query: {
                'month': month,
            },
            body: recipientId,
        });
    }

    /**
     * getBurdenByMonth
     * @param data data
     * @param month month
     * @param workCenterId workCenterId
     * @returns Burden OK
     * @throws ApiError
     */
    public static getBurdenByMonthUsingPost(
data: ProviderOrRecipientId,
month: string,
workCenterId: number,
): CancelablePromise<Burden> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/burden/month',
            query: {
                'month': month,
                'workCenterId': workCenterId,
            },
            body: data,
        });
    }

    /**
     * getBurdenMonthListByRecipientId
     * @param recipientId recipientId
     * @returns string OK
     * @throws ApiError
     */
    public static getBurdenMonthListByRecipientIdUsingPost(
recipientId: number,
): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/burden/monthList/recipientId',
            body: recipientId,
        });
    }

}
