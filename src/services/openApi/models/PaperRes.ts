/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaringProviderRes } from './CaringProviderRes';
import type { CaringRecipientRes } from './CaringRecipientRes';
import type { UserRes } from './UserRes';

export type PaperRes = {
    createdAt?: string;
    data?: any;
    date?: string;
    id?: number;
    provider?: CaringProviderRes;
    providerId?: number;
    recipient?: CaringRecipientRes;
    recipientId?: number;
    state?: 'CONFIRM' | 'TEMP';
    type?: 'KMMSE' | 'KMMSE2' | '낙상위험도' | '수급자욕구평가' | '욕창위험도';
    updatedAt?: string;
    writer?: UserRes;
};

