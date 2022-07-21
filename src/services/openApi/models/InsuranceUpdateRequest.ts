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
    updateState?: InsuranceUpdateRequest.updateState;
    updateType?: InsuranceUpdateRequest.updateType;
    workHours?: number;
    workType?: string;
};

export namespace InsuranceUpdateRequest {

    export enum updateState {
        PENDING = 'PENDING',
        DONE = 'DONE',
        REJECT = 'REJECT',
    }

    export enum updateType {
        GET = 'GET',
        WITHDRAW = 'WITHDRAW',
        INSURANCE_CANCEL = 'INSURANCE_CANCEL',
        INSURANCE_MODIFY = 'INSURANCE_MODIFY',
        MOVE_CONFIRM = 'MOVE_CONFIRM',
        CHANGE_AMOUNT = 'CHANGE_AMOUNT',
        ETC_CHANGE = 'ETC_CHANGE',
    }


}

