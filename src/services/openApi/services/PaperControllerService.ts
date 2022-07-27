/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_Paper_ } from '../models/Page_Paper_';
import type { PaperReq } from '../models/PaperReq';
import type { PaperRes } from '../models/PaperRes';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PaperControllerService {

    /**
     * getPaper
     * @param id id
     * @returns PaperRes OK
     * @throws ApiError
     */
    public static getPaperUsingGet(
        id: number,
    ): CancelablePromise<PaperRes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/paper',
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
     * @returns PaperRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static savePaperUsingPost(
        paper: PaperReq,
    ): CancelablePromise<PaperRes | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/paper',
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
            url: '/api/paper',
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
        type?: 'KMMSE' | 'KMMSE2' | '낙상위험도' | '수급자욕구평가' | '욕창위험도',
    ): CancelablePromise<Page_Paper_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/paper/list',
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
     * @returns PaperRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static getRecipientPaperListUsingPost(
        recipientIdList: Array<number>,
    ): CancelablePromise<Array<PaperRes> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/paper/list/all',
            body: recipientIdList,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
