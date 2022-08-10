/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CaringRecipient } from '../models/CaringRecipient';
import type { Page_CaringRecipient_ } from '../models/Page_CaringRecipient_';
import type { RecipientBurdenData } from '../models/RecipientBurdenData';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CaringRecipientControllerService {

    /**
     * saveCaringRecipient
     * @param caringRecipient caringRecipient
     * @returns CaringRecipient OK
     * @throws ApiError
     */
    public static saveCaringRecipientUsingPost(
caringRecipient: CaringRecipient,
): CancelablePromise<CaringRecipient> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/caringRecipient',
            body: caringRecipient,
        });
    }

    /**
     * burdenData
     * @param idList idList
     * @returns RecipientBurdenData OK
     * @throws ApiError
     */
    public static burdenDataUsingPost(
idList: Array<number>,
): CancelablePromise<Array<RecipientBurdenData>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/caringRecipient/burdenData',
            body: idList,
        });
    }

    /**
     * getById
     * @param recipientId recipientId
     * @returns CaringRecipient OK
     * @throws ApiError
     */
    public static getByIdUsingGet1(
recipientId: number,
): CancelablePromise<CaringRecipient> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/caringRecipient/byId',
            query: {
                'recipientId': recipientId,
            },
        });
    }

    /**
     * compare
     * @param data data
     * @returns any OK
     * @throws ApiError
     */
    public static compareUsingPost(
data: Array<Array<any>>,
): CancelablePromise<Array<Array<any>>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/caringRecipient/compare',
            body: data,
        });
    }

    /**
     * count
     * @param centerId centerId
     * @returns any OK
     * @throws ApiError
     */
    public static countUsingPost1(
centerId?: Array<number>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/caringRecipient/count',
            query: {
                'centerId': centerId,
            },
        });
    }

    /**
     * getCaringRecipientList
     * @param centerId centerId
     * @param keyword keyword
     * @param orderByLongTerm orderByLongTerm
     * @param page page
     * @param serviceType serviceType
     * @param size size
     * @param status status
     * @param userIdList userIdList
     * @returns Page_CaringRecipient_ OK
     * @throws ApiError
     */
    public static getCaringRecipientListUsingPost(
centerId?: Array<number>,
keyword?: string,
orderByLongTerm: boolean = false,
page?: number,
serviceType?: '가족요양' | '방문목욕' | '방문요양' | '가족간호' | '방문간호',
size: number = 10,
status?: string,
userIdList?: Array<number>,
): CancelablePromise<Page_CaringRecipient_> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/caringRecipient/list',
            query: {
                'centerId': centerId,
                'keyword': keyword,
                'orderByLongTerm': orderByLongTerm,
                'page': page,
                'serviceType': serviceType,
                'size': size,
                'status': status,
            },
            body: userIdList,
        });
    }

    /**
     * getAllCaringRecipientList
     * @returns CaringRecipient OK
     * @throws ApiError
     */
    public static getAllCaringRecipientListUsingGet(): CancelablePromise<Array<CaringRecipient>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/caringRecipient/list/all',
        });
    }

    /**
     * getCaringRecipientOnFirst
     * @param birthDate birthDate
     * @param centerId centerId
     * @param name name
     * @returns CaringRecipient OK
     * @throws ApiError
     */
    public static getCaringRecipientOnFirstUsingPost(
birthDate: string,
centerId: number,
name: string,
): CancelablePromise<Array<CaringRecipient>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/caringRecipient/list/first',
            query: {
                'birthDate': birthDate,
                'centerId': centerId,
                'name': name,
            },
        });
    }

    /**
     * getTargetCaringRecipientList
     * @param centerId centerId
     * @param month month
     * @returns CaringRecipient OK
     * @throws ApiError
     */
    public static getTargetCaringRecipientListUsingGet(
centerId?: Array<number>,
month?: string,
): CancelablePromise<Array<CaringRecipient>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/caringRecipient/list/target',
            query: {
                'centerId': centerId,
                'month': month,
            },
        });
    }

    /**
     * getCaringRecipientListByPosition
     * @param maxX maxX
     * @param maxY maxY
     * @param minX minX
     * @param minY minY
     * @param centerId centerId
     * @param keyword keyword
     * @param status status
     * @returns CaringRecipient OK
     * @throws ApiError
     */
    public static getCaringRecipientListByPositionUsingPost(
maxX: number,
maxY: number,
minX: number,
minY: number,
centerId?: number,
keyword?: string,
status?: string,
): CancelablePromise<Array<CaringRecipient>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/caringRecipient/listByPosition',
            query: {
                'centerId': centerId,
                'keyword': keyword,
                'maxX': maxX,
                'maxY': maxY,
                'minX': minX,
                'minY': minY,
                'status': status,
            },
        });
    }

    /**
     * getByManageNumber
     * @param centerId centerId
     * @param number number
     * @returns CaringRecipient OK
     * @throws ApiError
     */
    public static getByManageNumberUsingGet1(
centerId: number,
number: string,
): CancelablePromise<CaringRecipient> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/caringRecipient/manageNumber',
            query: {
                'centerId': centerId,
                'number': number,
            },
        });
    }

}
