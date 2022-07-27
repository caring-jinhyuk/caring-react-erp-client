/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkCenterReq } from './WorkCenterReq';

export type ServiceScheduleReq = {
    etc?: any;
    id?: number;
    longTermGrade?: string;
    originName?: string;
    price?: string;
    providerBirth?: string;
    providerName?: string;
    providerPId?: number;
    recipientBirth?: string;
    recipientName?: string;
    recipientRId?: number;
    serviceStartAt?: string;
    serviceType?: string;
    serviceUntil?: string;
    type?: string;
    workCenter?: WorkCenterReq;
    yyyyMM?: string;
};

