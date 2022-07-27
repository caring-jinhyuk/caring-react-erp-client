/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressInfoReq } from './AddressInfoReq';
import type { ProviderData } from './ProviderData';
import type { ProviderInsuranceState } from './ProviderInsuranceState';
import type { ProviderLicense } from './ProviderLicense';
import type { UserReq } from './UserReq';
import type { WorkCenterReq } from './WorkCenterReq';

export type CaringProviderReq = {
    address?: AddressInfoReq;
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
    providerLicenses?: Array<ProviderLicense>;
    relation?: string;
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
    user?: UserReq;
    workCenter?: WorkCenterReq;
    workTypes?: Array<'Bath' | 'Family' | 'Nursing'>;
};

