/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaringProviderReq } from './CaringProviderReq';
import type { CaringRecipientReq } from './CaringRecipientReq';
import type { WorkCenterReq } from './WorkCenterReq';

export type ProviderMatchedRecipientReq = {
    center?: WorkCenterReq;
    centerId?: number;
    data?: any;
    id?: number;
    provider?: CaringProviderReq;
    providerId?: number;
    recipient?: CaringRecipientReq;
    recipientId?: number;
    serviceType?: string;
    subtractBurden?: boolean;
    times?: any;
};

