/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Finance } from '../models/Finance';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FinanceControllerService {

    /**
     * saveFinance
     * @param finance finance
     * @returns Finance OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveFinanceUsingPost(
        finance: Finance,
    ): CancelablePromise<Finance | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/finance',
            body: finance,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getFinanceOptions
     * @param providerId providerId
     * @param recipientId recipientId
     * @returns Finance OK
     * @throws ApiError
     */
    public static getFinanceOptionsUsingGet(
        providerId?: number,
        recipientId?: number,
    ): CancelablePromise<Array<Finance>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/finance/options',
            query: {
                'providerId': providerId,
                'recipientId': recipientId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
