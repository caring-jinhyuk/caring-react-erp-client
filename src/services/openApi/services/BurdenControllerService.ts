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
     * @returns any Created
     * @throws ApiError
     */
    public static saveBurdenUsingPost(
        burden: Burden,
    ): CancelablePromise<Burden | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/burden',
            body: burden,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * saveBurdenAll
     * @param burden burden
     * @returns Iterable_Burden_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveBurdenAllUsingPost(
        burden: Array<Burden>,
    ): CancelablePromise<Iterable_Burden_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/burden/all',
            body: burden,
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
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * centerAllBurdenList
     * @param center center
     * @param month month
     * @param managerId managerId
     * @returns Burden OK
     * @returns any Created
     * @throws ApiError
     */
    public static centerAllBurdenListUsingPost(
        center: number,
        month: string,
        managerId?: Array<number>,
    ): CancelablePromise<Array<Burden> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/burden/centerAllBurdenList',
            query: {
                'center': center,
                'month': month,
            },
            body: managerId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * centerBurdenList
     * @param center center
     * @param month month
     * @param managerId managerId
     * @returns Burden OK
     * @returns any Created
     * @throws ApiError
     */
    public static centerBurdenListUsingPost(
        center: number,
        month: string,
        managerId?: Array<number>,
    ): CancelablePromise<Array<Burden> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/burden/centerBurdenList',
            query: {
                'center': center,
                'month': month,
            },
            body: managerId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * centerBurdenMonthList
     * @param center center
     * @returns string OK
     * @throws ApiError
     */
    public static centerBurdenMonthListUsingGet(
        center: number,
    ): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/burden/centerBurdenMonthList',
            query: {
                'center': center,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * completeBurden
     * @param burdens burdens
     * @returns Burden OK
     * @returns any Created
     * @throws ApiError
     */
    public static completeBurdenUsingPost(
        burdens: Array<Burden>,
    ): CancelablePromise<Array<Burden> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/burden/completeAll',
            body: burdens,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getBurden
     * @param month month
     * @param recipientId recipientId
     * @returns Burden OK
     * @returns any Created
     * @throws ApiError
     */
    public static getBurdenUsingPost(
        month: string,
        recipientId: number,
    ): CancelablePromise<Burden | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/burden/get',
            query: {
                'month': month,
            },
            body: recipientId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getBurdenByMonth
     * @param data data
     * @param month month
     * @param workCenterId workCenterId
     * @returns Burden OK
     * @returns any Created
     * @throws ApiError
     */
    public static getBurdenByMonthUsingPost(
        data: ProviderOrRecipientId,
        month: string,
        workCenterId: number,
    ): CancelablePromise<Burden | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/burden/month',
            query: {
                'month': month,
                'workCenterId': workCenterId,
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
     * getBurdenMonthListByRecipientId
     * @param recipientId recipientId
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static getBurdenMonthListByRecipientIdUsingPost(
        recipientId: number,
    ): CancelablePromise<Array<string> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/burden/monthList/recipientId',
            body: recipientId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
