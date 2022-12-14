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
     * @throws ApiError
     */
    public static saveSynthesisUsingPost(
synthesis: Synthesis,
): CancelablePromise<Synthesis> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/synthesis',
            body: synthesis,
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
            url: '/synthesis',
            query: {
                'id': id,
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
            url: '/synthesis/list',
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
            url: '/synthesis/searchList',
            query: {
                'end_date': endDate,
                'start_date': startDate,
            },
        });
    }

    /**
     * updateSynthesis
     * @param id id
     * @returns Synthesis OK
     * @throws ApiError
     */
    public static updateSynthesisUsingPut(
id: number,
): CancelablePromise<Synthesis> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/synthesis/update',
            body: id,
        });
    }

}
