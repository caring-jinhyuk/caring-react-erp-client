/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaringProvider } from './CaringProvider';
import type { CaringRecipient } from './CaringRecipient';
import type { WorkCenter } from './WorkCenter';

export type ProviderMatchedRecipient = {
    center?: WorkCenter;
    centerId?: number;
    data?: any;
    id?: number;
    provider?: CaringProvider;
    providerId?: number;
    recipient?: CaringRecipient;
    recipientId?: number;
    serviceType?: string;
    subtractBurden?: boolean;
    times?: any;
};

