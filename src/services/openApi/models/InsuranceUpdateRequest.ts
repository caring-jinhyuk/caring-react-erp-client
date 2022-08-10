/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaringProvider } from './CaringProvider';
import type { Dependent } from './Dependent';

export type InsuranceUpdateRequest = {
    accidentDate?: string;
    accidentPrice?: number;
    approvedAt?: string;
    changeUser?: number;
    createdAt?: string;
    dependents?: Array<Dependent>;
    employDate?: string;
    employPrice?: number;
    etcChangeFile?: string;
    etcChangeRequest?: string;
    healthDate?: string;
    healthPrice?: number;
    id?: number;
    moveConfirmAnswer?: string;
    moveConfirmRequest?: string;
    pensionDate?: string;
    pensionPrice?: number;
    provider?: CaringProvider;
    providerId?: number;
    reqDetail?: string;
    requestedAt?: string;
    requesterId?: number;
    requirementReason?: string;
    requirementReasonCategory?: string;
    summary?: string;
    updateState?: 'PENDING' | 'DONE' | 'REJECT';
    updateType?: 'GET' | 'WITHDRAW' | 'INSURANCE_CANCEL' | 'INSURANCE_MODIFY' | 'MOVE_CONFIRM' | 'CHANGE_AMOUNT' | 'ETC_CHANGE';
    updatedAt?: string;
    workHours?: number;
    workType?: string;
};
