/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CaringProvider } from '../models/CaringProvider';
import type { Page_CaringProvider_ } from '../models/Page_CaringProvider_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CaringProviderControllerService {

    /**
     * saveCaringProvider
     * @param caringProvider caringProvider
     * @returns CaringProvider OK
     * @throws ApiError
     */
    public static saveCaringProviderUsingPost(
caringProvider: CaringProvider,
): CancelablePromise<CaringProvider> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/caringProvider',
            body: caringProvider,
        });
    }

    /**
     * getById
     * @param providerId providerId
     * @returns CaringProvider OK
     * @throws ApiError
     */
    public static getByIdUsingGet(
providerId: number,
): CancelablePromise<CaringProvider> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/caringProvider/byId',
            query: {
                'providerId': providerId,
            },
        });
    }

    /**
     * getByManageNumber
     * @param centerId centerId
     * @param name name
     * @param number number
     * @returns CaringProvider OK
     * @throws ApiError
     */
    public static getByManageNumberUsingGet(
centerId: number,
name: string,
number: string,
): CancelablePromise<CaringProvider> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/caringProvider/byManageNumber',
            query: {
                'centerId': centerId,
                'name': name,
                'number': number,
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
            url: '/caringProvider/count',
            query: {
                'centerId': centerId,
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
     * @throws ApiError
     */
    public static getCaringProviderListUsingPost(
centerId?: Array<number>,
keyword?: string,
page?: number,
serviceType?: '가족요양' | '방문목욕' | '방문요양' | '가족간호' | '방문간호',
size: number = 10,
userIdList?: Array<number>,
workState?: 'OnWork' | 'Waiting' | 'OnVacation' | 'Exit' | 'Etc',
): CancelablePromise<Page_CaringProvider_> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/caringProvider/list',
            query: {
                'centerId': centerId,
                'keyword': keyword,
                'page': page,
                'serviceType': serviceType,
                'size': size,
                'workState': workState,
            },
            body: userIdList,
        });
    }

    /**
     * getCaringAllProviderList
     * @returns CaringProvider OK
     * @throws ApiError
     */
    public static getCaringAllProviderListUsingGet(): CancelablePromise<Array<CaringProvider>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/caringProvider/list/all',
        });
    }

    /**
     * getCaringProviderOnFirst
     * @param birthDate birthDate
     * @param centerId centerId
     * @param name name
     * @returns CaringProvider OK
     * @throws ApiError
     */
    public static getCaringProviderOnFirstUsingPost(
birthDate: string,
centerId: number,
name: string,
): CancelablePromise<Array<CaringProvider>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/caringProvider/list/first',
            query: {
                'birthDate': birthDate,
                'centerId': centerId,
                'name': name,
            },
        });
    }

    /**
     * sendTargetProviders
     * @param centerId centerId
     * @param month month
     * @returns CaringProvider OK
     * @throws ApiError
     */
    public static sendTargetProvidersUsingGet(
centerId?: Array<number>,
month?: string,
): CancelablePromise<Array<CaringProvider>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/caringProvider/list/target',
            query: {
                'centerId': centerId,
                'month': month,
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
     * @returns CaringProvider OK
     * @throws ApiError
     */
    public static getCaringProviderListByPositionUsingPost(
maxX: number,
maxY: number,
minX: number,
minY: number,
keyword?: string,
workState?: 'OnWork' | 'Waiting' | 'OnVacation' | 'Exit' | 'Etc',
): CancelablePromise<Array<CaringProvider>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/caringProvider/listByLatLng',
            query: {
                'keyword': keyword,
                'maxX': maxX,
                'maxY': maxY,
                'minX': minX,
                'minY': minY,
                'workState': workState,
            },
        });
    }

    /**
     * getMyCaringProviderList
     * @param centerId centerId
     * @returns CaringProvider OK
     * @throws ApiError
     */
    public static getMyCaringProviderListUsingGet(
centerId: number,
): CancelablePromise<Array<CaringProvider>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/caringProvider/myList',
            query: {
                'centerId': centerId,
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
            url: '/caringProvider/providerDementia',
            body: providerId,
        });
    }

}
