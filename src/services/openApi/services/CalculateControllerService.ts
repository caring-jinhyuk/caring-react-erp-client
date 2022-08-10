/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CalculateData } from '../models/CalculateData';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CalculateControllerService {

    /**
     * getCalculatedList
     * @param end end
     * @param month month
     * @param start start
     * @param workCenterId workCenterId
     * @param myOnly myOnly
     * @returns CalculateData OK
     * @throws ApiError
     */
    public static getCalculatedListUsingGet(
end: string,
month: string,
start: string,
workCenterId: number,
myOnly: boolean = false,
): CancelablePromise<CalculateData> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/calculate/list',
            query: {
                'end': end,
                'month': month,
                'myOnly': myOnly,
                'start': start,
                'workCenterId': workCenterId,
            },
        });
    }

}
