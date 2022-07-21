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
     * @returns RecordingSheetSent OK
     * @throws ApiError
     */
    public static getSendRecordUsingGet({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<RecordingSheetSent> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sendRecord',
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
     * @returns RecordingSheetSent OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveSendRecordUsingPost({
        key,
    }: {
        /**
         * key
         */
        key: string,
    }): CancelablePromise<RecordingSheetSent | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sendRecord',
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
     * @returns any OK
     * @throws ApiError
     */
    public static deleteSendRecordUsingDelete({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/sendRecord',
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
     * @returns RecordingSheetSent OK
     * @returns any Created
     * @throws ApiError
     */
    public static getSendRecordListUsingPost({
        keys,
    }: {
        /**
         * keys
         */
        keys: Array<string>,
    }): CancelablePromise<Array<RecordingSheetSent> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sendRecord/list',
            body: keys,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
