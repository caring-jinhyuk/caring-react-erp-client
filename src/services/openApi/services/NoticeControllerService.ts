/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NoticeReq } from '../models/NoticeReq';
import type { NoticeRes } from '../models/NoticeRes';
import type { Page_Notice_ } from '../models/Page_Notice_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NoticeControllerService {

    /**
     * getNotice
     * @param id id
     * @returns NoticeRes OK
     * @throws ApiError
     */
    public static getNoticeUsingGet(
        id: number,
    ): CancelablePromise<NoticeRes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/notice',
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
     * saveNotice
     * @param notice notice
     * @returns NoticeRes OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveNoticeUsingPost(
        notice: NoticeReq,
    ): CancelablePromise<NoticeRes | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/notice',
            body: notice,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteNotice
     * @param id id
     * @returns NoticeRes OK
     * @throws ApiError
     */
    public static deleteNoticeUsingDelete(
        id: number,
    ): CancelablePromise<NoticeRes> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/notice',
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
            url: '/api/notice/list',
            query: {
                'fixed': fixed,
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
