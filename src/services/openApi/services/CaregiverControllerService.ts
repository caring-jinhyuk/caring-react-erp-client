/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Caregiver } from '../models/Caregiver';
import type { Iterable_Caregiver_ } from '../models/Iterable_Caregiver_';
import type { Page_Caregiver_ } from '../models/Page_Caregiver_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CaregiverControllerService {

    /**
     * getCaregiver
     * @param phone phone
     * @returns Caregiver OK
     * @throws ApiError
     */
    public static getCaregiverUsingGet(
        phone: string,
    ): CancelablePromise<Caregiver> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/caregiver',
            query: {
                'phone': phone,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * saveCaregiver
     * @param caregiver caregiver
     * @returns Caregiver OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveCaregiverUsingPost(
        caregiver: Caregiver,
    ): CancelablePromise<Caregiver | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/caregiver',
            body: caregiver,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteCaregiver
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteCaregiverUsingDelete(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/caregiver',
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
     * getCount
     * @returns number OK
     * @throws ApiError
     */
    public static getCountUsingGet(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/caregiver/Count',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getCaregiverMatchingAllList
     * @param dementia dementia
     * @param gender gender
     * @param search search
     * @param service service
     * @param year year
     * @returns Caregiver OK
     * @throws ApiError
     */
    public static getCaregiverMatchingAllListUsingGet(
        dementia?: boolean,
        gender?: boolean,
        search?: string,
        service?: string,
        year?: number,
    ): CancelablePromise<Array<Caregiver>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/caregiver/MatchingAllList',
            query: {
                'dementia': dementia,
                'gender': gender,
                'search': search,
                'service': service,
                'year': year,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getCaregiverMatchingList
     * @param dementia dementia
     * @param gender gender
     * @param page page
     * @param search search
     * @param service service
     * @param size size
     * @param year year
     * @returns Page_Caregiver_ OK
     * @throws ApiError
     */
    public static getCaregiverMatchingListUsingGet(
        dementia?: boolean,
        gender?: boolean,
        page?: number,
        search?: string,
        service?: string,
        size: number = 10,
        year?: number,
    ): CancelablePromise<Page_Caregiver_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/caregiver/MatchingList',
            query: {
                'dementia': dementia,
                'gender': gender,
                'page': page,
                'search': search,
                'service': service,
                'size': size,
                'year': year,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getCaregiverAllList
     * @param keyword keyword
     * @param search search
     * @returns Caregiver OK
     * @throws ApiError
     */
    public static getCaregiverAllListUsingGet(
        keyword?: string,
        search?: string,
    ): CancelablePromise<Array<Caregiver>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/caregiver/allList',
            query: {
                'keyword': keyword,
                'search': search,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getCityCount
     * @param city city
     * @returns number OK
     * @throws ApiError
     */
    public static getCityCountUsingGet(
        city: string,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/caregiver/cityCount',
            query: {
                'city': city,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getCaregiverId
     * @param id id
     * @returns Caregiver OK
     * @throws ApiError
     */
    public static getCaregiverIdUsingGet(
        id: number,
    ): CancelablePromise<Caregiver> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/caregiver/id',
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
     * getCaregiverList
     * @param keyword keyword
     * @param page page
     * @param search search
     * @param size size
     * @returns Page_Caregiver_ OK
     * @throws ApiError
     */
    public static getCaregiverListUsingGet(
        keyword?: string,
        page?: number,
        search?: string,
        size: number = 10,
    ): CancelablePromise<Page_Caregiver_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/caregiver/list',
            query: {
                'keyword': keyword,
                'page': page,
                'search': search,
                'size': size,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getStatisticsList
     * @returns Iterable_Caregiver_ OK
     * @throws ApiError
     */
    public static getStatisticsListUsingGet(): CancelablePromise<Iterable_Caregiver_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/caregiver/statistics',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateCaregiver
     * @param id id
     * @returns Caregiver OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateCaregiverUsingPut(
        id: number,
    ): CancelablePromise<Caregiver | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/caregiver/update',
            body: id,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getWardCount
     * @param city city
     * @param ward ward
     * @returns number OK
     * @throws ApiError
     */
    public static getWardCountUsingGet(
        city: string,
        ward: string,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/caregiver/wardCount',
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

}
