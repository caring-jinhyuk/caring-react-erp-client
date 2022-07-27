/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaringProviderRes } from './CaringProviderRes';
import type { CaringRecipientRes } from './CaringRecipientRes';
import type { WorkCenterRes } from './WorkCenterRes';

export type ProviderMatchedRecipientRes = {
    center?: WorkCenterRes;
    centerId?: number;
    data?: any;
    id?: number;
    provider?: CaringProviderRes;
    providerId?: number;
    recipient?: CaringRecipientRes;
    recipientId?: number;
    serviceType?: string;
    subtractBurden?: boolean;
    times?: any;
};

