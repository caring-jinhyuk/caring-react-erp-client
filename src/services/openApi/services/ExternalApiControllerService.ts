/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Map_string_string_ } from '../models/Map_string_string_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ExternalApiControllerService {

    /**
     * classesByIdList
     * @returns Map_string_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static classesByIdListUsingPost({
        idList,
    }: {
        /**
         * idList
         */
        idList: Array<string>,
    }): CancelablePromise<Array<Map_string_string_> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/externalApi/classesByIdList',
            body: idList,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
