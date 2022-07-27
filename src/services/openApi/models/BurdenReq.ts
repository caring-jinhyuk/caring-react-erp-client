/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaringRecipientReq } from './CaringRecipientReq';
import type { Finance } from './Finance';
import type { ServiceScheduleReq } from './ServiceScheduleReq';

export type BurdenReq = {
    burdenSum?: number;
    'c'?: any;
    calculated?: boolean;
    complete?: boolean;
    createdAt?: string;
    finance?: Finance;
    id?: number;
    month?: string;
    priceSum?: number;
    recipient?: CaringRecipientReq;
    recipientId?: number;
    requestSum?: number;
    schedules?: Array<ServiceScheduleReq>;
    updatedAt?: string;
    workCenterId?: number;
};

