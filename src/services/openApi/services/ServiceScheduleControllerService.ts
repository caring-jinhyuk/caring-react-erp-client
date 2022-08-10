/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Map_string_long_ } from '../models/Map_string_long_';
import type { Page_ServiceSchedule_ } from '../models/Page_ServiceSchedule_';
import type { ProviderOrRecipientId } from '../models/ProviderOrRecipientId';
import type { ServiceSchedule } from '../models/ServiceSchedule';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ServiceScheduleControllerService {

    /**
     * saveSchedule
     * @param schedule schedule
     * @returns ServiceSchedule OK
     * @throws ApiError
     */
    public static saveScheduleUsingPost(
schedule: ServiceSchedule,
): CancelablePromise<ServiceSchedule> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/serviceSchedule',
            body: schedule,
        });
    }

    /**
     * deleteSchedule
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteScheduleUsingDelete(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/serviceSchedule',
            query: {
                'id': id,
            },
        });
    }

    /**
     * getServiceScheduleCount
     * @param data data
     * @returns number OK
     * @throws ApiError
     */
    public static getServiceScheduleCountUsingPost(
data: ProviderOrRecipientId,
): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/serviceSchedule/count',
            body: data,
        });
    }

    /**
     * getServiceScheduleList
     * @param data data
     * @param from from
     * @param page page
     * @param size size
     * @param to to
     * @returns Page_ServiceSchedule_ OK
     * @throws ApiError
     */
    public static getServiceScheduleListUsingPost(
data: ProviderOrRecipientId,
from?: string,
page?: number,
size: number = 10,
to?: string,
): CancelablePromise<Page_ServiceSchedule_> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/serviceSchedule/list',
            query: {
                'from': from,
                'page': page,
                'size': size,
                'to': to,
            },
            body: data,
        });
    }

    /**
     * getScheduleByMonth
     * @param data data
     * @param month month
     * @param workCenterId workCenterId
     * @returns ServiceSchedule OK
     * @throws ApiError
     */
    public static getScheduleByMonthUsingPost(
data: ProviderOrRecipientId,
month: string,
workCenterId: number,
): CancelablePromise<Array<ServiceSchedule>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/serviceSchedule/list/month',
            query: {
                'month': month,
                'workCenterId': workCenterId,
            },
            body: data,
        });
    }

    /**
     * getServiceScheduleRate
     * @param centerId centerId
     * @param from from
     * @param to to
     * @returns Map_string_long_ OK
     * @throws ApiError
     */
    public static getServiceScheduleRateUsingPost(
centerId?: number,
from?: string,
to?: string,
): CancelablePromise<Array<Map_string_long_>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/serviceSchedule/list/rate',
            query: {
                'centerId': centerId,
                'from': from,
                'to': to,
            },
        });
    }

    /**
     * getScheduleMonthList
     * @param centerId centerId
     * @param providerId providerId
     * @returns string OK
     * @throws ApiError
     */
    public static getScheduleMonthListUsingPost(
centerId?: Array<number>,
providerId?: number,
): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/serviceSchedule/monthList',
            query: {
                'centerId': centerId,
                'providerId': providerId,
            },
        });
    }

    /**
     * getScheduleMonthListForRecipient
     * @param recipientId recipientId
     * @returns string OK
     * @throws ApiError
     */
    public static getScheduleMonthListForRecipientUsingPost(
recipientId: number,
): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/serviceSchedule/monthList/recipient',
            query: {
                'recipientId': recipientId,
            },
        });
    }

    /**
     * removeByList
     * @param centerId centerId
     * @param data data
     * @returns number OK
     * @throws ApiError
     */
    public static removeByListUsingPost(
centerId: number,
data: Array<Array<string>>,
): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/serviceSchedule/removeByList',
            query: {
                'centerId': centerId,
            },
            body: data,
        });
    }

    /**
     * updateByList
     * @param centerId centerId
     * @param data data
     * @returns any OK
     * @throws ApiError
     */
    public static updateByListUsingPost(
centerId: number,
data: Array<Array<string>>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/serviceSchedule/updateByList',
            query: {
                'centerId': centerId,
            },
            body: data,
        });
    }

}
