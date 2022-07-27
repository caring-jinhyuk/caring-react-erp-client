/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_SmsKakaoSentResult_ } from '../models/Page_SmsKakaoSentResult_';
import type { SendParams } from '../models/SendParams';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SmsKakaoSentReultControllerService {

    /**
     * getResultList
     * @param date date
     * @param failOnly failOnly
     * @param key key
     * @param page page
     * @param size size
     * @param toNumber toNumber
     * @param type type
     * @returns Page_SmsKakaoSentResult_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static getResultListUsingPost(
        date?: string,
        failOnly: boolean = false,
        key?: string,
        page?: number,
        size: number = 100,
        toNumber?: string,
        type?: '급여' | '기타(수급자)' | '기타(요양보호사)' | '일정(수급자)' | '일정(요양보호사)' | '장기요양급여비용명세서',
    ): CancelablePromise<Page_SmsKakaoSentResult_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/message/list',
            query: {
                'date': date,
                'failOnly': failOnly,
                'key': key,
                'page': page,
                'size': size,
                'toNumber': toNumber,
                'type': type,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * sendTalkOrSmsAll
     * @param sendParams sendParams
     * @param type type
     * @returns any OK
     * @throws ApiError
     */
    public static sendTalkOrSmsAllUsingPost(
        sendParams: Array<SendParams>,
        type: '급여' | '기타(수급자)' | '기타(요양보호사)' | '일정(수급자)' | '일정(요양보호사)' | '장기요양급여비용명세서',
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/message/sendTalkOrSmsAll',
            query: {
                'type': type,
            },
            body: sendParams,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
