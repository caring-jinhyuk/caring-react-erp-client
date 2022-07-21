/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Holiday } from '../models/Holiday';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HolidayControllerService {

    /**
     * getHoliday
     * @returns Holiday OK
     * @throws ApiError
     */
    public static getHolidayUsingGet({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<Holiday> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/holiday',
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
     * saveHoliday
     * @returns Holiday OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveHolidayUsingPost({
        holiday,
    }: {
        /**
         * holiday
         */
        holiday: Holiday,
    }): CancelablePromise<Holiday | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/holiday',
            body: holiday,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteHoliday
     * @returns any OK
     * @throws ApiError
     */
    public static deleteHolidayUsingDelete({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/holiday',
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
     * getHolidayList
     * @returns Holiday OK
     * @throws ApiError
     */
    public static getHolidayListUsingGet({
        yyyyMm,
    }: {
        /**
         * yyyyMM
         */
        yyyyMm: string,
    }): CancelablePromise<Array<Holiday>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/holiday/list',
            query: {
                'yyyyMM': yyyyMm,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
