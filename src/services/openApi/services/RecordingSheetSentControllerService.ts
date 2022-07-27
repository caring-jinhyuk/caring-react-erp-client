/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RecordingSheetSent } from '../models/RecordingSheetSent';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RecordingSheetSentControllerService {

    /**
     * getSendRecord
     * @param id id
     * @returns RecordingSheetSent OK
     * @throws ApiError
     */
    public static getSendRecordUsingGet(
        id: number,
    ): CancelablePromise<RecordingSheetSent> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sendRecord',
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
     * saveSendRecord
     * @param key key
     * @returns RecordingSheetSent OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveSendRecordUsingPost(
        key: string,
    ): CancelablePromise<RecordingSheetSent | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sendRecord',
            query: {
                'key': key,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteSendRecord
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteSendRecordUsingDelete(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/sendRecord',
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
     * getSendRecordList
     * @param keys keys
     * @returns RecordingSheetSent OK
     * @returns any Created
     * @throws ApiError
     */
    public static getSendRecordListUsingPost(
        keys: Array<string>,
    ): CancelablePromise<Array<RecordingSheetSent> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/sendRecord/list',
            body: keys,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
