/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdministrativeDivision } from '../models/AdministrativeDivision';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AdministrativeDivisionControllerService {

    /**
     * getAdministrativeDivision
     * @param city city
     * @param ward ward
     * @returns AdministrativeDivision OK
     * @throws ApiError
     */
    public static getAdministrativeDivisionUsingGet(
        city: string,
        ward: string,
    ): CancelablePromise<Array<AdministrativeDivision>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/administrativeDivision',
            query: {
                'city': city,
                'ward': ward,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * saveAdministrativeDivision
     * @param administrativeDivision administrativeDivision
     * @returns AdministrativeDivision OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveAdministrativeDivisionUsingPost(
        administrativeDivision: AdministrativeDivision,
    ): CancelablePromise<AdministrativeDivision | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/administrativeDivision',
            body: administrativeDivision,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteAdministrativeDivision
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteAdministrativeDivisionUsingDelete(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/administrativeDivision',
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
     * updateAdministrativeDivision
     * @param id id
     * @returns AdministrativeDivision OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateAdministrativeDivisionUsingPut(
        id: number,
    ): CancelablePromise<AdministrativeDivision | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/administrativeDivision/update',
            body: id,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
