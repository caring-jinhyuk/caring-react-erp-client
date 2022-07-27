/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Iterable_Synthesis_ } from '../models/Iterable_Synthesis_';
import type { Synthesis } from '../models/Synthesis';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SynthesisControllerService {

    /**
     * saveSynthesis
     * @param synthesis synthesis
     * @returns Synthesis OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveSynthesisUsingPost(
        synthesis: Synthesis,
    ): CancelablePromise<Synthesis | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/synthesis',
            body: synthesis,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteSynthesis
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteSynthesisUsingDelete(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/synthesis',
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
     * getSynthesisList
     * @returns Iterable_Synthesis_ OK
     * @throws ApiError
     */
    public static getSynthesisListUsingGet(): CancelablePromise<Iterable_Synthesis_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/synthesis/list',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getSynthesisSearchList
     * @param endDate end_date
     * @param startDate start_date
     * @returns Synthesis OK
     * @throws ApiError
     */
    public static getSynthesisSearchListUsingGet(
        endDate: number,
        startDate: number,
    ): CancelablePromise<Array<Synthesis>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/synthesis/searchList',
            query: {
                'end_date': endDate,
                'start_date': startDate,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateSynthesis
     * @param id id
     * @returns Synthesis OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateSynthesisUsingPut(
        id: number,
    ): CancelablePromise<Synthesis | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/synthesis/update',
            body: id,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
