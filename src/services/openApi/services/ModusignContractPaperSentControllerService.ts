/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ModusignContractPaperSent } from '../models/ModusignContractPaperSent';
import type { ModusignContractPaperSentQuery } from '../models/ModusignContractPaperSentQuery';
import type { Page_ModusignContractPaperSent_ } from '../models/Page_ModusignContractPaperSent_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ModusignContractPaperSentControllerService {

    /**
     * getContract
     * @param id id
     * @returns ModusignContractPaperSent OK
     * @throws ApiError
     */
    public static getContractUsingGet(
        id: number,
    ): CancelablePromise<ModusignContractPaperSent> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/contract',
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
     * saveContract
     * @param contract contract
     * @returns ModusignContractPaperSent OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveContractUsingPost(
        contract: ModusignContractPaperSent,
    ): CancelablePromise<ModusignContractPaperSent | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/contract',
            body: contract,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteContract
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteContractUsingDelete(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/contract',
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
     * getContractList
     * @param query query
     * @param keyword keyword
     * @param page page
     * @param size size
     * @returns Page_ModusignContractPaperSent_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static getContractListUsingPost(
        query: ModusignContractPaperSentQuery,
        keyword?: string,
        page?: number,
        size: number = 10,
    ): CancelablePromise<Page_ModusignContractPaperSent_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/contract/list',
            query: {
                'keyword': keyword,
                'page': page,
                'size': size,
            },
            body: query,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
