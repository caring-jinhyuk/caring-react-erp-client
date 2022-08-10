/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Caretaker } from '../models/Caretaker';
import type { Page_Caretaker_ } from '../models/Page_Caretaker_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CaretakerControllerService {

    /**
     * getCaretaker
     * @param phone phone
     * @returns Caretaker OK
     * @throws ApiError
     */
    public static getCaretakerUsingGet(
phone: string,
): CancelablePromise<Caretaker> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/caretaker',
            query: {
                'phone': phone,
            },
        });
    }

    /**
     * saveCaretaker
     * @param caretaker caretaker
     * @returns Caretaker OK
     * @throws ApiError
     */
    public static saveCaretakerUsingPost(
caretaker: Caretaker,
): CancelablePromise<Caretaker> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/caretaker',
            body: caretaker,
        });
    }

    /**
     * deleteCaretaker
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteCaretakerUsingDelete(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/caretaker',
            query: {
                'id': id,
            },
        });
    }

    /**
     * getCaretakerAllList
     * @returns Caretaker OK
     * @throws ApiError
     */
    public static getCaretakerAllListUsingGet(): CancelablePromise<Array<Caretaker>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/caretaker/AllList',
        });
    }

    /**
     * getCaretakerId
     * @param id id
     * @returns Caretaker OK
     * @throws ApiError
     */
    public static getCaretakerIdUsingGet(
id: number,
): CancelablePromise<Caretaker> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/caretaker/id',
            query: {
                'id': id,
            },
        });
    }

    /**
     * getCaretakerList
     * @param city city
     * @param keyword keyword
     * @param page page
     * @param search search
     * @param service service
     * @param size size
     * @param state state
     * @returns Page_Caretaker_ OK
     * @throws ApiError
     */
    public static getCaretakerListUsingGet(
city?: string,
keyword?: string,
page?: number,
search?: string,
service?: string,
size: number = 10,
state?: string,
): CancelablePromise<Page_Caretaker_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/caretaker/list',
            query: {
                'city': city,
                'keyword': keyword,
                'page': page,
                'search': search,
                'service': service,
                'size': size,
                'state': state,
            },
        });
    }

    /**
     * updateCaretaker
     * @param id id
     * @returns Caretaker OK
     * @throws ApiError
     */
    public static updateCaretakerUsingPut(
id: number,
): CancelablePromise<Caretaker> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/caretaker/update',
            body: id,
        });
    }

}
