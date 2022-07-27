/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressInfoReq } from './AddressInfoReq';
import type { CaringProviderReq } from './CaringProviderReq';
import type { CaringRecipientReq } from './CaringRecipientReq';
import type { Contractor } from './Contractor';
import type { ProviderLicense } from './ProviderLicense';
import type { UserReq } from './UserReq';
import type { WorkCenterReq } from './WorkCenterReq';

export type CaringContractReq = {
    caringProvider?: CaringProviderReq;
    caringProvider2?: CaringProviderReq;
    caringProviderJson?: CaringProviderReq;
    caringProviderJson2?: CaringProviderReq;
    caringProviderModel?: CaringProviderReq;
    caringProviderModel2?: CaringProviderReq;
    caringProviderSelected?: boolean;
    caringProviderSelected2?: boolean;
    caringRecipient?: CaringRecipientReq;
    caringRecipientJson?: CaringRecipientReq;
    caringRecipientModel?: CaringRecipientReq;
    caringRecipientSelected?: boolean;
    centerSelfContract?: boolean;
    checks?: any;
    contractDate?: string;
    contractDateHistory?: Array<any>;
    createdAt?: string;
    csManager?: string;
    csUser?: UserReq;
    deleted?: boolean;
    editable?: boolean;
    files?: string;
    gender?: string;
    gender2?: string;
    id?: number;
    manager?: string;
    managerSocial?: string;
    managerSocialUser?: UserReq;
    managerUser?: UserReq;
    memo?: string;
    name?: string;
    name2?: string;
    phone?: string;
    providerAddress?: AddressInfoReq;
    providerBirthDate?: string;
    providerContractDate?: string;
    providerContractHistory?: Array<any>;
    providerDementiaEduComplete?: boolean;
    providerIdNumber?: string;
    providerLicenses?: Array<ProviderLicense>;
    providerPhone?: string;
    providerPosition?: 'Caregiver' | 'CaregiverMonthPay' | 'CenterManager' | 'Nurse' | 'NurseAssi' | 'NurseAssiMonthPay' | 'NurseMonthPay' | 'SocialWorker';
    recipientAddress?: AddressInfoReq;
    recipientBirthDate?: string;
    recipientContractor?: Contractor;
    recipientIdNumber?: string;
    recipientLongTermDurationFrom?: string;
    recipientLongTermDurationUntil?: string;
    recipientLongTermGrade?: string;
    recipientLongTermNumber?: string;
    relation?: string;
    relationProviderRecipient?: string;
    requestDate?: string;
    serviceType?: 'FAMILY' | 'FAMILY60' | 'FAMILY90' | 'NORMAL' | 'VISITBATH' | 'VISITCARE';
    signDate?: string;
    state?: 'CONTRACT_CANCEL' | 'CONTRACT_DONE' | 'CONTRACT_LICENSE' | 'CONTRACT_PENDING' | 'CONTRACT_PRE_PROCESSING' | 'CONTRACT_PROCESSING';
    summary?: string;
    text?: string;
    time60?: boolean;
    time90?: boolean;
    timeDayAndNight?: boolean;
    type?: 'FAMILY' | 'FAMILY60' | 'FAMILY90' | 'NORMAL' | 'VISITBATH' | 'VISITCARE';
    workCenter?: WorkCenterReq;
};

