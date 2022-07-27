/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Dependent } from './Dependent';

export type ProviderInsuranceState = {
    accidentDate?: string;
    accidentLossDate?: string;
    accidentPrice?: number;
    accidentState?: 'CHANGE_AMOUNT' | 'ETC_CHANGE' | 'GET' | 'INSURANCE_CANCEL' | 'INSURANCE_MODIFY' | 'MOVE_CONFIRM' | 'WITHDRAW';
    dependents?: Array<Dependent>;
    employDate?: string;
    employLossDate?: string;
    employPrice?: number;
    employState?: 'CHANGE_AMOUNT' | 'ETC_CHANGE' | 'GET' | 'INSURANCE_CANCEL' | 'INSURANCE_MODIFY' | 'MOVE_CONFIRM' | 'WITHDRAW';
    healthDate?: string;
    healthLossDate?: string;
    healthPrice?: number;
    healthState?: 'CHANGE_AMOUNT' | 'ETC_CHANGE' | 'GET' | 'INSURANCE_CANCEL' | 'INSURANCE_MODIFY' | 'MOVE_CONFIRM' | 'WITHDRAW';
    pensionDate?: string;
    pensionLossDate?: string;
    pensionPrice?: number;
    pensionState?: 'CHANGE_AMOUNT' | 'ETC_CHANGE' | 'GET' | 'INSURANCE_CANCEL' | 'INSURANCE_MODIFY' | 'MOVE_CONFIRM' | 'WITHDRAW';
    workHours?: number;
};

