/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaringRecipient } from './CaringRecipient';
import type { Finance } from './Finance';
import type { ServiceSchedule } from './ServiceSchedule';

export type Burden = {
    burdenSum?: number;
    'c'?: any;
    calculated?: boolean;
    complete?: boolean;
    createdAt?: string;
    finance?: Finance;
    id?: number;
    month?: string;
    priceSum?: number;
    recipient?: CaringRecipient;
    recipientId?: number;
    requestSum?: number;
    schedules?: Array<ServiceSchedule>;
    updatedAt?: string;
    workCenterId?: number;
};

