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
     * @returns CustomerCall OK
     * @throws ApiError
     */
    public static getCallManageUsingGet({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<CustomerCall> {
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
     * @returns CustomerCall OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveCallManageUsingPost({
        customerCall,
        name,
        phone,
    }: {
        /**
         * customerCall
         */
        customerCall: CustomerCall,
        /**
         * name
         */
        name?: string,
        /**
         * phone
         */
        phone?: string,
    }): CancelablePromise<CustomerCall | any> {
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
     * @returns any OK
     * @throws ApiError
     */
    public static deleteCallManageUsingDelete({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<any> {
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
     * @returns CustomerCall OK
     * @throws ApiError
     */
    public static getCallManageByNameAndPhoneUsingGet({
        name,
        phone,
    }: {
        /**
         * name
         */
        name: string,
        /**
         * phone
         */
        phone: string,
    }): CancelablePromise<Array<CustomerCall>> {
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
     * @returns Page_CustomerCall_ OK
     * @throws ApiError
     */
    public static getCallManageListUsingGet({
        page,
        size = 10,
    }: {
        /**
         * page
         */
        page?: number,
        /**
         * size
         */
        size?: number,
    }): CancelablePromise<Page_CustomerCall_> {
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
