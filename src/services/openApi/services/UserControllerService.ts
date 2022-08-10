/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_User_ } from '../models/Page_User_';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserControllerService {

    /**
     * saveUser
     * @param user user
     * @returns User OK
     * @throws ApiError
     */
    public static saveUserUsingPost(
user: User,
): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user',
            body: user,
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
            url: '/user',
            query: {
                'id': id,
            },
        });
    }

    /**
     * getCurrentUser
     * @returns User OK
     * @throws ApiError
     */
    public static getCurrentUserUsingGet(): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/current',
        });
    }

    /**
     * getUserList
     * @param keyword keyword
     * @param page page
     * @param size size
     * @returns Page_User_ OK
     * @throws ApiError
     */
    public static getUserListUsingPost(
keyword?: string,
page?: number,
size: number = 10,
): CancelablePromise<Page_User_> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/list',
            query: {
                'keyword': keyword,
                'page': page,
                'size': size,
            },
        });
    }

    /**
     * getCenterUserList
     * @returns User OK
     * @throws ApiError
     */
    public static getCenterUserListUsingPost(): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/list/center',
        });
    }

    /**
     * login
     * @param user user
     * @returns User OK
     * @throws ApiError
     */
    public static loginUsingPost(
user: User,
): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/login',
            body: user,
        });
    }

    /**
     * register
     * @param user user
     * @returns User OK
     * @throws ApiError
     */
    public static registerUsingPost(
user: User,
): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/register',
            body: user,
        });
    }

}
