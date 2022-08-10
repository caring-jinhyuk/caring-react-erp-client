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
        });
    }

    /**
     * saveAdministrativeDivision
     * @param administrativeDivision administrativeDivision
     * @returns AdministrativeDivision OK
     * @throws ApiError
     */
    public static saveAdministrativeDivisionUsingPost(
administrativeDivision: AdministrativeDivision,
): CancelablePromise<AdministrativeDivision> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/administrativeDivision',
            body: administrativeDivision,
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
        });
    }

    /**
     * updateAdministrativeDivision
     * @param id id
     * @returns AdministrativeDivision OK
     * @throws ApiError
     */
    public static updateAdministrativeDivisionUsingPut(
id: number,
): CancelablePromise<AdministrativeDivision> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/administrativeDivision/update',
            body: id,
        });
    }

}
