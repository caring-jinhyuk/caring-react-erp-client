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
     * @throws ApiError
     */
    public static saveFinanceUsingPost(
finance: Finance,
): CancelablePromise<Finance> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/finance',
            body: finance,
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
            url: '/finance/options',
            query: {
                'providerId': providerId,
                'recipientId': recipientId,
            },
        });
    }

}
