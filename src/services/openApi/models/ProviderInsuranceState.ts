/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Dependent } from './Dependent';

export type ProviderInsuranceState = {
    accidentDate?: string;
    accidentLossDate?: string;
    accidentPrice?: number;
    accidentState?: ProviderInsuranceState.accidentState;
    dependents?: Array<Dependent>;
    employDate?: string;
    employLossDate?: string;
    employPrice?: number;
    employState?: ProviderInsuranceState.employState;
    healthDate?: string;
    healthLossDate?: string;
    healthPrice?: number;
    healthState?: ProviderInsuranceState.healthState;
    pensionDate?: string;
    pensionLossDate?: string;
    pensionPrice?: number;
    pensionState?: ProviderInsuranceState.pensionState;
    workHours?: number;
};

export namespace ProviderInsuranceState {

    export enum accidentState {
        GET = 'GET',
        WITHDRAW = 'WITHDRAW',
        INSURANCE_CANCEL = 'INSURANCE_CANCEL',
        INSURANCE_MODIFY = 'INSURANCE_MODIFY',
        MOVE_CONFIRM = 'MOVE_CONFIRM',
        CHANGE_AMOUNT = 'CHANGE_AMOUNT',
        ETC_CHANGE = 'ETC_CHANGE',
    }

    export enum employState {
        GET = 'GET',
        WITHDRAW = 'WITHDRAW',
        INSURANCE_CANCEL = 'INSURANCE_CANCEL',
        INSURANCE_MODIFY = 'INSURANCE_MODIFY',
        MOVE_CONFIRM = 'MOVE_CONFIRM',
        CHANGE_AMOUNT = 'CHANGE_AMOUNT',
        ETC_CHANGE = 'ETC_CHANGE',
    }

    export enum healthState {
        GET = 'GET',
        WITHDRAW = 'WITHDRAW',
        INSURANCE_CANCEL = 'INSURANCE_CANCEL',
        INSURANCE_MODIFY = 'INSURANCE_MODIFY',
        MOVE_CONFIRM = 'MOVE_CONFIRM',
        CHANGE_AMOUNT = 'CHANGE_AMOUNT',
        ETC_CHANGE = 'ETC_CHANGE',
    }

    export enum pensionState {
        GET = 'GET',
        WITHDRAW = 'WITHDRAW',
        INSURANCE_CANCEL = 'INSURANCE_CANCEL',
        INSURANCE_MODIFY = 'INSURANCE_MODIFY',
        MOVE_CONFIRM = 'MOVE_CONFIRM',
        CHANGE_AMOUNT = 'CHANGE_AMOUNT',
        ETC_CHANGE = 'ETC_CHANGE',
    }


}

