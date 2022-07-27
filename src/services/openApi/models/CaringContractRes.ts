/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressInfoRes } from './AddressInfoRes';
import type { CaringProviderRes } from './CaringProviderRes';
import type { CaringRecipientRes } from './CaringRecipientRes';
import type { Contractor } from './Contractor';
import type { ProviderLicense } from './ProviderLicense';
import type { UserRes } from './UserRes';
import type { WorkCenterRes } from './WorkCenterRes';

export type CaringContractRes = {
    caringProvider?: CaringProviderRes;
    caringProvider2?: CaringProviderRes;
    caringProviderJson?: CaringProviderRes;
    caringProviderJson2?: CaringProviderRes;
    caringProviderModel?: CaringProviderRes;
    caringProviderModel2?: CaringProviderRes;
    caringProviderSelected?: boolean;
    caringProviderSelected2?: boolean;
    caringRecipient?: CaringRecipientRes;
    caringRecipientJson?: CaringRecipientRes;
    caringRecipientModel?: CaringRecipientRes;
    caringRecipientSelected?: boolean;
    centerSelfContract?: boolean;
    checks?: any;
    contractDate?: string;
    contractDateHistory?: Array<any>;
    createdAt?: string;
    csManager?: string;
    csUser?: UserRes;
    deleted?: boolean;
    editable?: boolean;
    files?: string;
    gender?: string;
    gender2?: string;
    id?: number;
    manager?: string;
    managerSocial?: string;
    managerSocialUser?: UserRes;
    managerUser?: UserRes;
    memo?: string;
    name?: string;
    name2?: string;
    phone?: string;
    providerAddress?: AddressInfoRes;
    providerBirthDate?: string;
    providerContractDate?: string;
    providerContractHistory?: Array<any>;
    providerDementiaEduComplete?: boolean;
    providerIdNumber?: string;
    providerLicenses?: Array<ProviderLicense>;
    providerPhone?: string;
    providerPosition?: 'Caregiver' | 'CaregiverMonthPay' | 'CenterManager' | 'Nurse' | 'NurseAssi' | 'NurseAssiMonthPay' | 'NurseMonthPay' | 'SocialWorker';
    providerPositionName?: string;
    recipientAddress?: AddressInfoRes;
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
    workCenter?: WorkCenterRes;
};

