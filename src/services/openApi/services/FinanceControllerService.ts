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
     * @returns Finance OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveFinanceUsingPost({
        finance,
    }: {
        /**
         * finance
         */
        finance: Finance,
    }): CancelablePromise<Finance | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/finance',
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
     * @returns Finance OK
     * @throws ApiError
     */
    public static getFinanceOptionsUsingGet({
        providerId,
        recipientId,
    }: {
        /**
         * providerId
         */
        providerId?: number,
        /**
         * recipientId
         */
        recipientId?: number,
    }): CancelablePromise<Array<Finance>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/finance/options',
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
