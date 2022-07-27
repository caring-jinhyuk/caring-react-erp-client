/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaringProviderReq } from './CaringProviderReq';
import type { CaringRecipientReq } from './CaringRecipientReq';
import type { UserReq } from './UserReq';

export type PaperReq = {
    createdAt?: string;
    data?: any;
    date?: string;
    id?: number;
    provider?: CaringProviderReq;
    providerId?: number;
    recipient?: CaringRecipientReq;
    recipientId?: number;
    state?: 'CONFIRM' | 'TEMP';
    type?: 'KMMSE' | 'KMMSE2' | '낙상위험도' | '수급자욕구평가' | '욕창위험도';
    updatedAt?: string;
    writer?: UserReq;
};

