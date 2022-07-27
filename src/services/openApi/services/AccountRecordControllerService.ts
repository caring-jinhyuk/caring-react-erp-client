/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountRecordReq } from '../models/AccountRecordReq';
import type { AccountRecordRes } from '../models/AccountRecordRes';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AccountRecordControllerService {

    /**
     * getAccountRecord
     * @param id id
     * @returns AccountRecordRes OK
     * @throws ApiError
     */
    public static getAccountRecordUsingGet(
        id: number,
    ): CancelablePromise<AccountRecordRes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/accountRecord',
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
     * saveAccountRecord
     * @param accountRecord accountRecord
     * @returns AccountRecordRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveAccountRecordUsingPost(
        accountRecord: AccountRecordReq,
    ): CancelablePromise<AccountRecordRes | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/accountRecord',
            body: accountRecord,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteAccountRecord
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteAccountRecordUsingDelete(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/accountRecord',
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
     * getAccountRecordList
     * @param centerAndNumbers centerAndNumbers
     * @param month month
     * @returns AccountRecordRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static getAccountRecordListUsingPost(
        centerAndNumbers: Array<string>,
        month: string,
    ): CancelablePromise<Array<AccountRecordRes> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/accountRecord/list',
            query: {
                'month': month,
            },
            body: centerAndNumbers,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * load
     * @param centerAndNumbers centerAndNumbers
     * @param month month
     * @returns any OK
     * @throws ApiError
     */
    public static loadUsingPost(
        centerAndNumbers: Array<string>,
        month: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/accountRecord/load',
            query: {
                'month': month,
            },
            body: centerAndNumbers,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
