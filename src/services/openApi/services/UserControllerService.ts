/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_User_ } from '../models/Page_User_';
import type { UserReq } from '../models/UserReq';
import type { UserRes } from '../models/UserRes';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserControllerService {

    /**
     * saveUser
     * @param user user
     * @returns UserRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveUserUsingPost(
        user: UserReq,
    ): CancelablePromise<UserRes | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user',
            body: user,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * delete
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteUsingDelete1(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/user',
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
     * getCurrentUser
     * @returns UserRes OK
     * @throws ApiError
     */
    public static getCurrentUserUsingGet(): CancelablePromise<UserRes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/current',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getUserList
     * @param keyword keyword
     * @param page page
     * @param size size
     * @returns Page_User_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static getUserListUsingPost(
        keyword?: string,
        page?: number,
        size: number = 10,
    ): CancelablePromise<Page_User_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/list',
            query: {
                'keyword': keyword,
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

    /**
     * getCenterUserList
     * @returns UserRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static getCenterUserListUsingPost(): CancelablePromise<Array<UserRes> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/list/center',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * login
     * @param user user
     * @returns UserRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static loginUsingPost(
        user: UserReq,
    ): CancelablePromise<UserRes | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/login',
            body: user,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * register
     * @param user user
     * @returns UserRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static registerUsingPost(
        user: UserReq,
    ): CancelablePromise<UserRes | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/register',
            body: user,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
