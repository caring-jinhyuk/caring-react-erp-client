/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressInfo } from './AddressInfo';
import type { ProviderData } from './ProviderData';
import type { ProviderInsuranceState } from './ProviderInsuranceState';
import type { ProviderLicense } from './ProviderLicense';
import type { User } from './User';
import type { WorkCenter } from './WorkCenter';

export type CaringProvider = {
    address?: AddressInfo;
    bankCode?: string;
    bankName?: string;
    bankNumber?: string;
    birthDate?: string;
    connectUserId?: number;
    data?: ProviderData;
    dementiaEduComplete?: boolean;
    exitDate?: string;
    gender?: CaringProvider.gender;
    hancareId?: string;
    id?: number;
    idNumber?: string;
    insuranceState?: ProviderInsuranceState;
    joinDate?: string;
    memo?: string;
    name?: string;
    phone?: string;
    phone2?: string;
    position?: CaringProvider.position;
    positionName?: string;
    providerLicenses?: Array<ProviderLicense>;
    relation?: string;
    salary?: number;
    state?: CaringProvider.state;
    stateDate?: string;
    stateHistory?: Array<any>;
    stateReason?: string;
    summary?: string;
    tag?: string;
    tagCall?: boolean;
    tagCallDays?: string;
    tagPhone?: string;
    user?: User;
    workCenter?: WorkCenter;
    workTypes?: Array<'Family' | 'Bath' | 'Nursing'>;
};

export namespace CaringProvider {

    export enum gender {
        MALE = 'MALE',
        FEMALE = 'FEMALE',
    }

    export enum position {
        CAREGIVER = 'Caregiver',
        SOCIAL_WORKER = 'SocialWorker',
        NURSE = 'Nurse',
        CENTER_MANAGER = 'CenterManager',
        NURSE_ASSI = 'NurseAssi',
        CAREGIVER_MONTH_PAY = 'CaregiverMonthPay',
        NURSE_MONTH_PAY = 'NurseMonthPay',
        NURSE_ASSI_MONTH_PAY = 'NurseAssiMonthPay',
    }

    export enum state {
        ON_WORK = 'OnWork',
        WAITING = 'Waiting',
        ON_VACATION = 'OnVacation',
        EXIT = 'Exit',
        ETC = 'Etc',
    }


}

