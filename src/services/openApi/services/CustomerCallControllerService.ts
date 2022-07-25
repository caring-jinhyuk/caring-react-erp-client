/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerCall } from '../models/CustomerCall';
import type { Page_CustomerCall_ } from '../models/Page_CustomerCall_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CustomerCallControllerService {

    /**
     * getCallManage
     * @param id id
     * @returns CustomerCall OK
     * @throws ApiError
     */
    public static getCallManageUsingGet(
        id: number,
    ): CancelablePromise<CustomerCall> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/callManage',
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
     * saveCallManage
     * @param customerCall customerCall
     * @param name name
     * @param phone phone
     * @returns CustomerCall OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveCallManageUsingPost(
        customerCall: CustomerCall,
        name?: string,
        phone?: string,
    ): CancelablePromise<CustomerCall | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/callManage',
            query: {
                'name': name,
                'phone': phone,
            },
            body: customerCall,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteCallManage
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteCallManageUsingDelete(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/callManage',
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
     * getCallManageByNameAndPhone
     * @param name name
     * @param phone phone
     * @returns CustomerCall OK
     * @throws ApiError
     */
    public static getCallManageByNameAndPhoneUsingGet(
        name: string,
        phone: string,
    ): CancelablePromise<Array<CustomerCall>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/callManage/byNameAndPhone',
            query: {
                'name': name,
                'phone': phone,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getCallManageList
     * @param page page
     * @param size size
     * @returns Page_CustomerCall_ OK
     * @throws ApiError
     */
    public static getCallManageListUsingGet(
        page?: number,
        size: number = 10,
    ): CancelablePromise<Page_CustomerCall_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/callManage/list',
            query: {
                'page': page,
                'size': size,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
