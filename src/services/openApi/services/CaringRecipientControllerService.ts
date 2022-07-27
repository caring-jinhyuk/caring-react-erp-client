/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CaringRecipientReq } from '../models/CaringRecipientReq';
import type { CaringRecipientRes } from '../models/CaringRecipientRes';
import type { Page_CaringRecipient_ } from '../models/Page_CaringRecipient_';
import type { RecipientBurdenData } from '../models/RecipientBurdenData';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CaringRecipientControllerService {

    /**
     * saveCaringRecipient
     * @param caringRecipient caringRecipient
     * @returns CaringRecipientRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveCaringRecipientUsingPost(
        caringRecipient: CaringRecipientReq,
    ): CancelablePromise<CaringRecipientRes | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/caringRecipient',
            body: caringRecipient,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * burdenData
     * @param idList idList
     * @returns RecipientBurdenData OK
     * @returns any Created
     * @throws ApiError
     */
    public static burdenDataUsingPost(
        idList: Array<number>,
    ): CancelablePromise<Array<RecipientBurdenData> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/caringRecipient/burdenData',
            body: idList,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getById
     * @param recipientId recipientId
     * @returns CaringRecipientRes OK
     * @throws ApiError
     */
    public static getByIdUsingGet1(
        recipientId: number,
    ): CancelablePromise<CaringRecipientRes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/caringRecipient/byId',
            query: {
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
            url: '/api/caringRecipient/compare',
            body: data,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
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
            url: '/api/caringRecipient/count',
            query: {
                'centerId': centerId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
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
     * @returns any Created
     * @throws ApiError
     */
    public static getCaringRecipientListUsingPost(
        centerId?: Array<number>,
        keyword?: string,
        orderByLongTerm: boolean = false,
        page?: number,
        serviceType?: '가족간호' | '가족요양' | '방문간호' | '방문목욕' | '방문요양',
        size: number = 10,
        status?: string,
        userIdList?: Array<number>,
    ): CancelablePromise<Page_CaringRecipient_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/caringRecipient/list',
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
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getAllCaringRecipientList
     * @returns CaringRecipientRes OK
     * @throws ApiError
     */
    public static getAllCaringRecipientListUsingGet(): CancelablePromise<Array<CaringRecipientRes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/caringRecipient/list/all',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getCaringRecipientOnFirst
     * @param birthDate birthDate
     * @param centerId centerId
     * @param name name
     * @returns CaringRecipientRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static getCaringRecipientOnFirstUsingPost(
        birthDate: string,
        centerId: number,
        name: string,
    ): CancelablePromise<Array<CaringRecipientRes> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/caringRecipient/list/first',
            query: {
                'birthDate': birthDate,
                'centerId': centerId,
                'name': name,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getTargetCaringRecipientList
     * @param centerId centerId
     * @param month month
     * @returns CaringRecipientRes OK
     * @throws ApiError
     */
    public static getTargetCaringRecipientListUsingGet(
        centerId?: Array<number>,
        month?: string,
    ): CancelablePromise<Array<CaringRecipientRes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/caringRecipient/list/target',
            query: {
                'centerId': centerId,
                'month': month,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
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
     * @returns CaringRecipientRes OK
     * @returns any Created
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
    ): CancelablePromise<Array<CaringRecipientRes> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/caringRecipient/listByPosition',
            query: {
                'centerId': centerId,
                'keyword': keyword,
                'maxX': maxX,
                'maxY': maxY,
                'minX': minX,
                'minY': minY,
                'status': status,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getByManageNumber
     * @param centerId centerId
     * @param number number
     * @returns CaringRecipientRes OK
     * @throws ApiError
     */
    public static getByManageNumberUsingGet1(
        centerId: number,
        number: string,
    ): CancelablePromise<CaringRecipientRes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/caringRecipient/manageNumber',
            query: {
                'centerId': centerId,
                'number': number,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
