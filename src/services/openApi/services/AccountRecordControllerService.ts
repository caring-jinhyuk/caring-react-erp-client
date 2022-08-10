/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountRecord } from '../models/AccountRecord';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AccountRecordControllerService {

    /**
     * getAccountRecord
     * @param id id
     * @returns AccountRecord OK
     * @throws ApiError
     */
    public static getAccountRecordUsingGet(
id: number,
): CancelablePromise<AccountRecord> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accountRecord',
            query: {
                'id': id,
            },
        });
    }

    /**
     * saveAccountRecord
     * @param accountRecord accountRecord
     * @returns AccountRecord OK
     * @throws ApiError
     */
    public static saveAccountRecordUsingPost(
accountRecord: AccountRecord,
): CancelablePromise<AccountRecord> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accountRecord',
            body: accountRecord,
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
            url: '/accountRecord',
            query: {
                'id': id,
            },
        });
    }

    /**
     * getAccountRecordList
     * @param centerAndNumbers centerAndNumbers
     * @param month month
     * @returns AccountRecord OK
     * @throws ApiError
     */
    public static getAccountRecordListUsingPost(
centerAndNumbers: Array<string>,
month: string,
): CancelablePromise<Array<AccountRecord>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/accountRecord/list',
            query: {
                'month': month,
            },
            body: centerAndNumbers,
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
            url: '/accountRecord/load',
            query: {
                'month': month,
            },
            body: centerAndNumbers,
        });
    }

}
