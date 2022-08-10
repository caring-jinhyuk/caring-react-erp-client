/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { S3Signature } from '../models/S3Signature';
import type { StreamingResponseBody } from '../models/StreamingResponseBody';
import type { UploadParams } from '../models/UploadParams';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FileControllerService {

    /**
     * s3Signature
     * @param params params
     * @returns S3Signature OK
     * @throws ApiError
     */
    public static s3SignatureUsingPost(
params: UploadParams,
): CancelablePromise<S3Signature> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/file',
            body: params,
        });
    }

    /**
     * download
     * @param key key
     * @returns StreamingResponseBody OK
     * @throws ApiError
     */
    public static downloadUsingGet(
key: string,
): CancelablePromise<StreamingResponseBody> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/file/{key}',
            path: {
                'key': key,
            },
        });
    }

}
