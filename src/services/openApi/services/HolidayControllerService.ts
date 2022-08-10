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
     * @param id id
     * @returns Holiday OK
     * @throws ApiError
     */
    public static getHolidayUsingGet(
id: number,
): CancelablePromise<Holiday> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/holiday',
            query: {
                'id': id,
            },
        });
    }

    /**
     * saveHoliday
     * @param holiday holiday
     * @returns Holiday OK
     * @throws ApiError
     */
    public static saveHolidayUsingPost(
holiday: Holiday,
): CancelablePromise<Holiday> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/holiday',
            body: holiday,
        });
    }

    /**
     * deleteHoliday
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteHolidayUsingDelete(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/holiday',
            query: {
                'id': id,
            },
        });
    }

    /**
     * getHolidayList
     * @param yyyyMm yyyyMM
     * @returns Holiday OK
     * @throws ApiError
     */
    public static getHolidayListUsingGet(
yyyyMm: string,
): CancelablePromise<Array<Holiday>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/holiday/list',
            query: {
                'yyyyMM': yyyyMm,
            },
        });
    }

}
