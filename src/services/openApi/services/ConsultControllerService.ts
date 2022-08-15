/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Consult } from '../models/Consult';
import type { Page_Consult_ } from '../models/Page_Consult_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ConsultControllerService {
	/**
	 * saveConsult
	 * @param consult consult
	 * @returns Consult OK
	 * @throws ApiError
	 */
	public static saveConsultUsingPost(consult: Consult): CancelablePromise<Consult> {
		return __request(OpenAPI, {
			method: 'POST',
			url: '/consult',
			body: consult,
		});
	}

	/**
	 * deleteConsult
	 * @param id id
	 * @returns any OK
	 * @throws ApiError
	 */
	public static deleteConsultUsingDelete(id: number): CancelablePromise<any> {
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/consult',
			query: {
				id: id,
			},
		});
	}

	/**
	 * getHomepageReservation
	 * @param state state
	 * @returns number OK
	 * @throws ApiError
	 */
	public static getHomepageReservationUsingGet(state: string): CancelablePromise<number> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/consult/HRCount',
			query: {
				state: state,
			},
		});
	}

	/**
	 * getLongtimeCustomerList
	 * @param endDate end_date
	 * @param manager manager
	 * @param startDate start_date
	 * @param state state
	 * @returns Consult OK
	 * @throws ApiError
	 */
	public static getLongtimeCustomerListUsingGet(
		endDate: string,
		manager: string,
		startDate: string,
		state: string,
	): CancelablePromise<Array<Consult>> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/consult/Longtime',
			query: {
				end_date: endDate,
				manager: manager,
				start_date: startDate,
				state: state,
			},
		});
	}

	/**
	 * getLongtimeMessageList
	 * @param endDate end_date
	 * @param manager manager
	 * @param sendEndDate send_end_date
	 * @param sendStartDate send_start_date
	 * @param startDate start_date
	 * @param state state
	 * @param today today
	 * @returns Consult OK
	 * @throws ApiError
	 */
	public static getLongtimeMessageListUsingGet(
		endDate: string,
		manager: string,
		sendEndDate: string,
		sendStartDate: string,
		startDate: string,
		state: string,
		today: string,
	): CancelablePromise<Array<Consult>> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/consult/LongtimeMessage',
			query: {
				end_date: endDate,
				manager: manager,
				send_end_date: sendEndDate,
				send_start_date: sendStartDate,
				start_date: startDate,
				state: state,
				today: today,
			},
		});
	}

	/**
	 * getMyPickList
	 * @param managerName managerName
	 * @returns Consult OK
	 * @throws ApiError
	 */
	public static getMyPickListUsingGet(managerName: string): CancelablePromise<Array<Consult>> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/consult/MyPick',
			query: {
				managerName: managerName,
			},
		});
	}

	/**
	 * getPhoneConsult
	 * @param phone phone
	 * @returns Consult OK
	 * @throws ApiError
	 */
	public static getPhoneConsultUsingGet(phone: string): CancelablePromise<Consult> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/consult/Phone',
			query: {
				phone: phone,
			},
		});
	}

	/**
	 * getManagerRecallList
	 * @param endDate end_date
	 * @param manager manager
	 * @param startDate start_date
	 * @param state state
	 * @returns Consult OK
	 * @throws ApiError
	 */
	public static getManagerRecallListUsingGet(
		endDate: string,
		manager: string,
		startDate: string,
		state: string,
	): CancelablePromise<Array<Consult>> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/consult/RecallList',
			query: {
				end_date: endDate,
				manager: manager,
				start_date: startDate,
				state: state,
			},
		});
	}

	/**
	 * getReservationList
	 * @param manager manager
	 * @param page page
	 * @param size size
	 * @returns Page_Consult_ OK
	 * @throws ApiError
	 */
	public static getReservationListUsingGet(
		manager: string,
		page?: number,
		size: number = 10,
	): CancelablePromise<Page_Consult_> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/consult/Reservation',
			query: {
				manager: manager,
				page: page,
				size: size,
			},
		});
	}

	/**
	 * getSamePhoneConsult
	 * @param phone phone
	 * @returns boolean OK
	 * @throws ApiError
	 */
	public static getSamePhoneConsultUsingGet(phone: string): CancelablePromise<boolean> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/consult/SamePhone',
			query: {
				phone: phone,
			},
		});
	}

	/**
	 * getGoodByeCallConsult
	 * @param page page
	 * @param size size
	 * @returns Page_Consult_ OK
	 * @throws ApiError
	 */
	public static getGoodByeCallConsultUsingGet(
		page?: number,
		size: number = 10,
	): CancelablePromise<Page_Consult_> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/consult/goodbye',
			query: {
				page: page,
				size: size,
			},
		});
	}

	/**
	 * getConsultList
	 * @param from from
	 * @param keyword keyword
	 * @param page page
	 * @param progress progress
	 * @param search search
	 * @param size size
	 * @param state state
	 * @param to to
	 * @returns Page_Consult_ OK
	 * @throws ApiError
	 */
	public static getConsultListUsingGet(
		from?: string,
		keyword?: string,
		page?: number,
		progress?: string,
		search?: string,
		size: number = 10,
		state?: string,
		to?: string,
	): CancelablePromise<Page_Consult_> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/consult/list',
			query: {
				from: from,
				keyword: keyword,
				page: page,
				progress: progress,
				search: search,
				size: size,
				state: state,
				to: to,
			},
		});
	}

	/**
	 * getConsultAllList
	 * @param from from
	 * @param to to
	 * @returns Consult OK
	 * @throws ApiError
	 */
	public static getConsultAllListUsingGet(
		from?: string,
		to?: string,
	): CancelablePromise<Array<Consult>> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/consult/list/all',
			query: {
				from: from,
				to: to,
			},
		});
	}

	/**
	 * getTargetConsultList
	 * @param managerName managerName
	 * @returns Consult OK
	 * @throws ApiError
	 */
	public static getTargetConsultListUsingGet(
		managerName: string,
	): CancelablePromise<Array<Consult>> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/consult/list/target',
			query: {
				managerName: managerName,
			},
		});
	}

	/**
	 * getProgressConsult
	 * @param progress progress
	 * @param page page
	 * @param size size
	 * @returns Page_Consult_ OK
	 * @throws ApiError
	 */
	public static getProgressConsultUsingGet(
		progress: string,
		page?: number,
		size: number = 10,
	): CancelablePromise<Page_Consult_> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/consult/progress',
			query: {
				page: page,
				progress: progress,
				size: size,
			},
		});
	}

	/**
	 * getDeleteReasonConsult
	 * @param page page
	 * @param size size
	 * @returns Page_Consult_ OK
	 * @throws ApiError
	 */
	public static getDeleteReasonConsultUsingGet(
		page?: number,
		size: number = 10,
	): CancelablePromise<Page_Consult_> {
		return __request(OpenAPI, {
			method: 'GET',
			url: '/consult/reason',
			query: {
				page: page,
				size: size,
			},
		});
	}
}
