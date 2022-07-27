/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_Paper_ } from '../models/Page_Paper_';
import type { Paper } from '../models/Paper';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PaperControllerService {

    /**
     * getPaper
     * @param id id
     * @returns Paper OK
     * @throws ApiError
     */
    public static getPaperUsingGet(
        id: number,
    ): CancelablePromise<Paper> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/paper',
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
     * savePaper
     * @param paper paper
     * @returns Paper OK
     * @returns any Created
     * @throws ApiError
     */
    public static savePaperUsingPost(
        paper: Paper,
    ): CancelablePromise<Paper | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/paper',
            body: paper,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deletePaper
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deletePaperUsingDelete(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/paper',
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
     * getPaperList
     * @param page page
     * @param providerId providerId
     * @param recipientId recipientId
     * @param size size
     * @param type type
     * @returns Page_Paper_ OK
     * @throws ApiError
     */
    public static getPaperListUsingGet(
        page?: number,
        providerId?: number,
        recipientId?: number,
        size: number = 10,
        type?: '수급자욕구평가' | '낙상위험도' | '욕창위험도' | 'KMMSE' | 'KMMSE2',
    ): CancelablePromise<Page_Paper_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/paper/list',
            query: {
                'page': page,
                'providerId': providerId,
                'recipientId': recipientId,
                'size': size,
                'type': type,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getRecipientPaperList
     * @param recipientIdList recipientIdList
     * @returns Paper OK
     * @returns any Created
     * @throws ApiError
     */
    public static getRecipientPaperListUsingPost(
        recipientIdList: Array<number>,
    ): CancelablePromise<Array<Paper> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/paper/list/all',
            body: recipientIdList,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
