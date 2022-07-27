/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CaringProviderReq } from '../models/CaringProviderReq';
import type { CaringProviderRes } from '../models/CaringProviderRes';
import type { Page_CaringProvider_ } from '../models/Page_CaringProvider_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CaringProviderControllerService {

    /**
     * saveCaringProvider
     * @param caringProvider caringProvider
     * @returns CaringProviderRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveCaringProviderUsingPost(
        caringProvider: CaringProviderReq,
    ): CancelablePromise<CaringProviderRes | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/caringProvider',
            body: caringProvider,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getById
     * @param providerId providerId
     * @returns CaringProviderRes OK
     * @throws ApiError
     */
    public static getByIdUsingGet(
        providerId: number,
    ): CancelablePromise<CaringProviderRes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/caringProvider/byId',
            query: {
                'providerId': providerId,
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
     * @param name name
     * @param number number
     * @returns CaringProviderRes OK
     * @throws ApiError
     */
    public static getByManageNumberUsingGet(
        centerId: number,
        name: string,
        number: string,
    ): CancelablePromise<CaringProviderRes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/caringProvider/byManageNumber',
            query: {
                'centerId': centerId,
                'name': name,
                'number': number,
            },
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
    public static countUsingPost(
        centerId?: Array<number>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/caringProvider/count',
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
     * getCaringProviderList
     * @param centerId centerId
     * @param keyword keyword
     * @param page page
     * @param serviceType serviceType
     * @param size size
     * @param userIdList userIdList
     * @param workState workState
     * @returns Page_CaringProvider_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static getCaringProviderListUsingPost(
        centerId?: Array<number>,
        keyword?: string,
        page?: number,
        serviceType?: '가족간호' | '가족요양' | '방문간호' | '방문목욕' | '방문요양',
        size: number = 10,
        userIdList?: Array<number>,
        workState?: 'Etc' | 'Exit' | 'OnVacation' | 'OnWork' | 'Waiting',
    ): CancelablePromise<Page_CaringProvider_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/caringProvider/list',
            query: {
                'centerId': centerId,
                'keyword': keyword,
                'page': page,
                'serviceType': serviceType,
                'size': size,
                'workState': workState,
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
     * getCaringAllProviderList
     * @returns CaringProviderRes OK
     * @throws ApiError
     */
    public static getCaringAllProviderListUsingGet(): CancelablePromise<Array<CaringProviderRes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/caringProvider/list/all',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getCaringProviderOnFirst
     * @param birthDate birthDate
     * @param centerId centerId
     * @param name name
     * @returns CaringProviderRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static getCaringProviderOnFirstUsingPost(
        birthDate: string,
        centerId: number,
        name: string,
    ): CancelablePromise<Array<CaringProviderRes> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/caringProvider/list/first',
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
     * sendTargetProviders
     * @param centerId centerId
     * @param month month
     * @returns CaringProviderRes OK
     * @throws ApiError
     */
    public static sendTargetProvidersUsingGet(
        centerId?: Array<number>,
        month?: string,
    ): CancelablePromise<Array<CaringProviderRes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/caringProvider/list/target',
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
     * getCaringProviderListByPosition
     * @param maxX maxX
     * @param maxY maxY
     * @param minX minX
     * @param minY minY
     * @param keyword keyword
     * @param workState workState
     * @returns CaringProviderRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static getCaringProviderListByPositionUsingPost(
        maxX: number,
        maxY: number,
        minX: number,
        minY: number,
        keyword?: string,
        workState?: 'Etc' | 'Exit' | 'OnVacation' | 'OnWork' | 'Waiting',
    ): CancelablePromise<Array<CaringProviderRes> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/caringProvider/listByLatLng',
            query: {
                'keyword': keyword,
                'maxX': maxX,
                'maxY': maxY,
                'minX': minX,
                'minY': minY,
                'workState': workState,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getMyCaringProviderList
     * @param centerId centerId
     * @returns CaringProviderRes OK
     * @throws ApiError
     */
    public static getMyCaringProviderListUsingGet(
        centerId: number,
    ): CancelablePromise<Array<CaringProviderRes>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/caringProvider/myList',
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
     * providerDementia
     * @param providerId providerId
     * @returns any OK
     * @throws ApiError
     */
    public static providerDementiaUsingPost(
        providerId: Array<number>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/caringProvider/providerDementia',
            body: providerId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
