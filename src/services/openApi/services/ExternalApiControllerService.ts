/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ExternalApiControllerService {

    /**
     * classesByIdList
     * @param idList idList
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static classesByIdListUsingPost(
        idList: Array<string>,
    ): CancelablePromise<Array<Record<string, string>> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/externalApi/classesByIdList',
            body: idList,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
