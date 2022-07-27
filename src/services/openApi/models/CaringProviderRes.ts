/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressInfoRes } from './AddressInfoRes';
import type { ProviderData } from './ProviderData';
import type { ProviderInsuranceState } from './ProviderInsuranceState';
import type { ProviderLicense } from './ProviderLicense';
import type { UserRes } from './UserRes';
import type { WorkCenterRes } from './WorkCenterRes';

export type CaringProviderRes = {
    address?: AddressInfoRes;
    bankCode?: string;
    bankName?: string;
    bankNumber?: string;
    birthDate?: string;
    connectUserId?: number;
    createdAt?: string;
    data?: ProviderData;
    dementiaEduComplete?: boolean;
    exitDate?: string;
    gender?: 'FEMALE' | 'MALE';
    hancareId?: string;
    id?: number;
    idNumber?: string;
    insuranceState?: ProviderInsuranceState;
    joinDate?: string;
    memo?: string;
    name?: string;
    phone?: string;
    phone2?: string;
    position?: 'Caregiver' | 'CaregiverMonthPay' | 'CenterManager' | 'Nurse' | 'NurseAssi' | 'NurseAssiMonthPay' | 'NurseMonthPay' | 'SocialWorker';
    positionName?: string;
    providerLicenses?: Array<ProviderLicense>;
    relation?: string;
    salary?: number;
    state?: 'Etc' | 'Exit' | 'OnVacation' | 'OnWork' | 'Waiting';
    stateDate?: string;
    stateHistory?: Array<any>;
    stateReason?: string;
    summary?: string;
    tag?: string;
    tagCall?: boolean;
    tagCallDays?: string;
    tagPhone?: string;
    updatedAt?: string;
    user?: UserRes;
    workCenter?: WorkCenterRes;
    workTypes?: Array<'Bath' | 'Family' | 'Nursing'>;
};
