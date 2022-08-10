/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_RecordingSheet_ } from '../models/Page_RecordingSheet_';
import type { RecordingSheet } from '../models/RecordingSheet';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RecordingSheetControllerService {

    /**
     * getRecordingSheet
     * @param id id
     * @returns RecordingSheet OK
     * @throws ApiError
     */
    public static getRecordingSheetUsingGet(
id: number,
): CancelablePromise<RecordingSheet> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/recordingSheet',
            query: {
                'id': id,
            },
        });
    }

    /**
     * saveRecordingSheet
     * @param recordingSheet recordingSheet
     * @returns RecordingSheet OK
     * @throws ApiError
     */
    public static saveRecordingSheetUsingPost(
recordingSheet: RecordingSheet,
): CancelablePromise<RecordingSheet> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/recordingSheet',
            body: recordingSheet,
        });
    }

    /**
     * deleteRecordingSheet
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteRecordingSheetUsingDelete(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/recordingSheet',
            query: {
                'id': id,
            },
        });
    }

    /**
     * getRecordingSheetList
     * @param page page
     * @param recipientId recipientId
     * @param size size
     * @returns Page_RecordingSheet_ OK
     * @throws ApiError
     */
    public static getRecordingSheetListUsingPost(
page?: number,
recipientId?: number,
size: number = 10,
): CancelablePromise<Page_RecordingSheet_> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/recordingSheet/list',
            query: {
                'page': page,
                'size': size,
            },
            body: recipientId,
        });
    }

}
