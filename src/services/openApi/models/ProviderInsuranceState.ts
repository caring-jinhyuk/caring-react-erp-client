/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Dependent } from './Dependent';

export type ProviderInsuranceState = {
    accidentDate?: string;
    accidentLossDate?: string;
    accidentPrice?: number;
    accidentState?: 'GET' | 'WITHDRAW' | 'INSURANCE_CANCEL' | 'INSURANCE_MODIFY' | 'MOVE_CONFIRM' | 'CHANGE_AMOUNT' | 'ETC_CHANGE';
    dependents?: Array<Dependent>;
    employDate?: string;
    employLossDate?: string;
    employPrice?: number;
    employState?: 'GET' | 'WITHDRAW' | 'INSURANCE_CANCEL' | 'INSURANCE_MODIFY' | 'MOVE_CONFIRM' | 'CHANGE_AMOUNT' | 'ETC_CHANGE';
    healthDate?: string;
    healthLossDate?: string;
    healthPrice?: number;
    healthState?: 'GET' | 'WITHDRAW' | 'INSURANCE_CANCEL' | 'INSURANCE_MODIFY' | 'MOVE_CONFIRM' | 'CHANGE_AMOUNT' | 'ETC_CHANGE';
    pensionDate?: string;
    pensionLossDate?: string;
    pensionPrice?: number;
    pensionState?: 'GET' | 'WITHDRAW' | 'INSURANCE_CANCEL' | 'INSURANCE_MODIFY' | 'MOVE_CONFIRM' | 'CHANGE_AMOUNT' | 'ETC_CHANGE';
    workHours?: number;
};
