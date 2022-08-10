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
    type?: '일정(요양보호사)' | '일정(수급자)' | '급여' | '기타(요양보호사)' | '기타(수급자)' | '장기요양급여비용명세서';
    userId?: number;
};
