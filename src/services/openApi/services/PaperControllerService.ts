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
        });
    }

    /**
     * savePaper
     * @param paper paper
     * @returns Paper OK
     * @throws ApiError
     */
    public static savePaperUsingPost(
paper: Paper,
): CancelablePromise<Paper> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/paper',
            body: paper,
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
        });
    }

    /**
     * getRecipientPaperList
     * @param recipientIdList recipientIdList
     * @returns Paper OK
     * @throws ApiError
     */
    public static getRecipientPaperListUsingPost(
recipientIdList: Array<number>,
): CancelablePromise<Array<Paper>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/paper/list/all',
            body: recipientIdList,
        });
    }

    /**
     * getRecipientLoadPaperList
     * @param longTermNumber longTermNumber
     * @returns Paper OK
     * @throws ApiError
     */
    public static getRecipientLoadPaperListUsingPost(
longTermNumber: string,
): CancelablePromise<Array<Paper>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/paper/list/allCenter',
            body: longTermNumber,
        });
    }

}
