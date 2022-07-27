/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaringRecipientRes } from './CaringRecipientRes';
import type { Finance } from './Finance';
import type { ServiceScheduleRes } from './ServiceScheduleRes';

export type BurdenRes = {
    burdenSum?: number;
    'c'?: any;
    calculated?: boolean;
    complete?: boolean;
    createdAt?: string;
    finance?: Finance;
    id?: number;
    month?: string;
    priceSum?: number;
    recipient?: CaringRecipientRes;
    recipientId?: number;
    requestSum?: number;
    schedules?: Array<ServiceScheduleRes>;
    updatedAt?: string;
    workCenterId?: number;
};

