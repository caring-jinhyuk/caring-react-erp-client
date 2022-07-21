/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SmsKakaoSentResult = {
	confirm?: boolean;
	createdAt?: string;
	friendsSend?: string;
	friendsTalkResult?: string;
	friendsTalkSuccess?: boolean;
	id?: number;
	smsKey?: string;
	smsResult?: string;
	smsSend?: string;
	smsSuccess?: boolean;
	toNumber?: string;
	tryCount?: number;
	type?: SmsKakaoSentResult.type;
	userId?: number;
};

export namespace SmsKakaoSentResult {
	export enum type {
		a = '일정(요양보호사)',
		b = '일정(수급자)',
		c = '급여',
		d = '기타(요양보호사)',
		e = '기타(수급자)',
		f = '장기요양급여비용명세서',
	}
}
