/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_Smile_ } from '../models/Page_Smile_';
import type { Smile } from '../models/Smile';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SmileControllerService {

    /**
     * saveSmile
     * @param smile smile
     * @returns Smile OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveSmileUsingPost(
        smile: Smile,
    ): CancelablePromise<Smile | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/smile',
            body: smile,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteSmile
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteSmileUsingDelete(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/smile',
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
     * getSmileAllList
     * @returns Smile OK
     * @throws ApiError
     */
    public static getSmileAllListUsingGet(): CancelablePromise<Array<Smile>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/smile/AllList',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getSmileCallCount
     * @param managerName managerName
     * @returns number OK
     * @throws ApiError
     */
    public static getSmileCallCountUsingGet(
        managerName: string,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/smile/count',
            query: {
                'managerName': managerName,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getSmileList
     * @param complete complete
     * @param manager manager
     * @param page page
     * @param searchString search_string
     * @param size size
     * @returns Page_Smile_ OK
     * @throws ApiError
     */
    public static getSmileListUsingGet(
        complete?: string,
        manager?: string,
        page?: number,
        searchString?: string,
        size: number = 10,
    ): CancelablePromise<Page_Smile_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/smile/list',
            query: {
                'complete': complete,
                'manager': manager,
                'page': page,
                'search_string': searchString,
                'size': size,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateSmile
     * @param id id
     * @returns Smile OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateSmileUsingPut(
        id: number,
    ): CancelablePromise<Smile | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/smile/update',
            body: id,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
