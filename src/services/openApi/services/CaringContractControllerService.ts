/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CaringContract } from '../models/CaringContract';
import type { Page_CaringContract_ } from '../models/Page_CaringContract_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CaringContractControllerService {

    /**
     * getCaringContract
     * @param id id
     * @returns CaringContract OK
     * @throws ApiError
     */
    public static getCaringContractUsingGet(
id: number,
): CancelablePromise<CaringContract> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/CaringContract',
            query: {
                'id': id,
            },
        });
    }

    /**
     * saveCaringContract
     * @param caringContract caringContract
     * @returns CaringContract OK
     * @throws ApiError
     */
    public static saveCaringContractUsingPost(
caringContract: CaringContract,
): CancelablePromise<CaringContract> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/CaringContract',
            body: caringContract,
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
            url: '/CaringContract',
            query: {
                'id': id,
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
            url: '/CaringContract/count',
            query: {
                'from': from,
                'to': to,
            },
        });
    }

    /**
     * getContractsBy
     * @param providerId providerId
     * @param recipientId recipientId
     * @returns CaringContract OK
     * @throws ApiError
     */
    public static getContractsByUsingGet(
providerId?: number,
recipientId?: number,
): CancelablePromise<Array<CaringContract>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/CaringContract/getDocsBy',
            query: {
                'providerId': providerId,
                'recipientId': recipientId,
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
state?: 'CONTRACT_PENDING' | 'CONTRACT_PROCESSING' | 'CONTRACT_DONE' | 'CONTRACT_PRE_PROCESSING' | 'CONTRACT_LICENSE' | 'CONTRACT_CANCEL',
type?: 'FAMILY' | 'NORMAL' | 'FAMILY60' | 'FAMILY90' | 'VISITBATH' | 'VISITCARE',
): CancelablePromise<Page_CaringContract_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/CaringContract/list',
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
        });
    }

}
