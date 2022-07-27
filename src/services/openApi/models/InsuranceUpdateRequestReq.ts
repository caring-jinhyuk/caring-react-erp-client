/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaringProviderReq } from './CaringProviderReq';
import type { Dependent } from './Dependent';

export type InsuranceUpdateRequestReq = {
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
    provider?: CaringProviderReq;
    providerId?: number;
    reqDetail?: string;
    requestedAt?: string;
    requesterId?: number;
    requirementReason?: string;
    requirementReasonCategory?: string;
    summary?: string;
    updateState?: 'DONE' | 'PENDING' | 'REJECT';
    updateType?: 'CHANGE_AMOUNT' | 'ETC_CHANGE' | 'GET' | 'INSURANCE_CANCEL' | 'INSURANCE_MODIFY' | 'MOVE_CONFIRM' | 'WITHDRAW';
    updatedAt?: string;
    workHours?: number;
    workType?: string;
};
