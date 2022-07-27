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
    createdAt?: string;
    data?: ProviderData;
    dementiaEduComplete?: boolean;
    exitDate?: string;
    gender?: 'MALE' | 'FEMALE';
    hancareId?: string;
    id?: number;
    idNumber?: string;
    insuranceState?: ProviderInsuranceState;
    joinDate?: string;
    memo?: string;
    name?: string;
    phone?: string;
    phone2?: string;
    position?: 'Caregiver' | 'SocialWorker' | 'Nurse' | 'CenterManager' | 'NurseAssi' | 'CaregiverMonthPay' | 'NurseMonthPay' | 'NurseAssiMonthPay';
    positionName?: string;
    providerLicenses?: Array<ProviderLicense>;
    relation?: string;
    salary?: number;
    state?: 'OnWork' | 'Waiting' | 'OnVacation' | 'Exit' | 'Etc';
    stateDate?: string;
    stateHistory?: Array<any>;
    stateReason?: string;
    summary?: string;
    tag?: string;
    tagCall?: boolean;
    tagCallDays?: string;
    tagPhone?: string;
    updatedAt?: string;
    user?: User;
    workCenter?: WorkCenter;
    workTypes?: Array<'Family' | 'Bath' | 'Nursing'>;
};

