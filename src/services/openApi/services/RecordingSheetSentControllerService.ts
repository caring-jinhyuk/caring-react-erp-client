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
            url: '/sendRecord',
            query: {
                'id': id,
            },
        });
    }

    /**
     * saveSendRecord
     * @param key key
     * @returns RecordingSheetSent OK
     * @throws ApiError
     */
    public static saveSendRecordUsingPost(
key: string,
): CancelablePromise<RecordingSheetSent> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sendRecord',
            query: {
                'key': key,
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
            url: '/sendRecord',
            query: {
                'id': id,
            },
        });
    }

    /**
     * getSendRecordList
     * @param keys keys
     * @returns RecordingSheetSent OK
     * @throws ApiError
     */
    public static getSendRecordListUsingPost(
keys: Array<string>,
): CancelablePromise<Array<RecordingSheetSent>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sendRecord/list',
            body: keys,
        });
    }

}
