/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Notice } from '../models/Notice';
import type { Page_Notice_ } from '../models/Page_Notice_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NoticeControllerService {

    /**
     * getNotice
     * @param id id
     * @returns Notice OK
     * @throws ApiError
     */
    public static getNoticeUsingGet(
id: number,
): CancelablePromise<Notice> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notice',
            query: {
                'id': id,
            },
        });
    }

    /**
     * saveNotice
     * @param notice notice
     * @returns Notice OK
     * @throws ApiError
     */
    public static saveNoticeUsingPost(
notice: Notice,
): CancelablePromise<Notice> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notice',
            body: notice,
        });
    }

    /**
     * deleteNotice
     * @param id id
     * @returns Notice OK
     * @throws ApiError
     */
    public static deleteNoticeUsingDelete(
id: number,
): CancelablePromise<Notice> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/notice',
            query: {
                'id': id,
            },
        });
    }

    /**
     * getNoticeList
     * @param fixed fixed
     * @param page page
     * @param size size
     * @returns Page_Notice_ OK
     * @throws ApiError
     */
    public static getNoticeListUsingGet(
fixed: boolean = false,
page?: number,
size: number = 10,
): CancelablePromise<Page_Notice_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notice/list',
            query: {
                'fixed': fixed,
                'page': page,
                'size': size,
            },
        });
    }

}
