/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CaringContractReq } from '../models/CaringContractReq';
import type { CaringContractRes } from '../models/CaringContractRes';
import type { Page_CaringContract_ } from '../models/Page_CaringContract_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CaringContractControllerService {

    /**
     * getCaringContract
     * @param id id
     * @returns CaringContractRes OK
     * @throws ApiError
     */
    public static getCaringContractUsingGet(
        id: number,
    ): CancelablePromise<CaringContractRes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/CaringContract',
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
     * saveCaringContract
     * @param caringContract caringContract
     * @returns CaringContractRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveCaringContractUsingPost(
        caringContract: CaringContractReq,
    ): CancelablePromise<CaringContractRes | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/CaringContract',
            body: caringContract,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteCaringContract
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteCaringContractUsingDelete(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/CaringContract',
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
     * getCaringContractCount
     * @param from from
     * @param to to
     * @returns any OK
     * @throws ApiError
     */
    public static getCaringContractCountUsingGet(
        from: number,
        to: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/CaringContract/count',
            query: {
                'from': from,
                'to': to,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getContractsBy
     * @param providerId providerId
     * @param recipientId recipientId
     * @returns CaringContractRes OK
     * @throws ApiError
     */
    public static getContractsByUsingGet(
        providerId?: number,
        recipientId?: number,
    ): CancelablePromise<Array<CaringContractRes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/CaringContract/getDocsBy',
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

    /**
     * getCaringContractList
     * @param centerId centerId
     * @param contractDate contractDate
     * @param createDate createDate
     * @param keyword keyword
     * @param page page
     * @param requestDate requestDate
     * @param signDate signDate
     * @param size size
     * @param state state
     * @param type type
     * @returns Page_CaringContract_ OK
     * @throws ApiError
     */
    public static getCaringContractListUsingGet(
        centerId?: number,
        contractDate?: string,
        createDate?: number,
        keyword?: string,
        page?: number,
        requestDate?: string,
        signDate?: string,
        size: number = 10,
        state?: 'CONTRACT_CANCEL' | 'CONTRACT_DONE' | 'CONTRACT_LICENSE' | 'CONTRACT_PENDING' | 'CONTRACT_PRE_PROCESSING' | 'CONTRACT_PROCESSING',
        type?: 'FAMILY' | 'FAMILY60' | 'FAMILY90' | 'NORMAL' | 'VISITBATH' | 'VISITCARE',
    ): CancelablePromise<Page_CaringContract_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/CaringContract/list',
            query: {
                'centerId': centerId,
                'contractDate': contractDate,
                'createDate': createDate,
                'keyword': keyword,
                'page': page,
                'requestDate': requestDate,
                'signDate': signDate,
                'size': size,
                'state': state,
                'type': type,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
