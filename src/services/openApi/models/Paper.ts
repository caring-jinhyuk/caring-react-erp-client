/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaringProvider } from './CaringProvider';
import type { CaringRecipient } from './CaringRecipient';
import type { User } from './User';

export type Paper = {
    createdAt?: string;
    data?: any;
    date?: string;
    id?: number;
    provider?: CaringProvider;
    providerId?: number;
    recipient?: CaringRecipient;
    recipientId?: number;
    state?: 'CONFIRM' | 'TEMP';
    type?: '수급자욕구평가' | '낙상위험도' | '욕창위험도' | 'KMMSE' | 'KMMSE2';
    updatedAt?: string;
    writer?: User;
};
