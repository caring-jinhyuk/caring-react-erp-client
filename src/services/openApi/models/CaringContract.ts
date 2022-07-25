/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressInfo } from './AddressInfo';
import type { CaringProvider } from './CaringProvider';
import type { CaringRecipient } from './CaringRecipient';
import type { Contractor } from './Contractor';
import type { ProviderLicense } from './ProviderLicense';
import type { User } from './User';
import type { WorkCenter } from './WorkCenter';

export type CaringContract = {
    caringProvider?: CaringProvider;
    caringProvider2?: CaringProvider;
    caringProviderJson?: CaringProvider;
    caringProviderJson2?: CaringProvider;
    caringProviderModel?: CaringProvider;
    caringProviderModel2?: CaringProvider;
    caringProviderSelected?: boolean;
    caringProviderSelected2?: boolean;
    caringRecipient?: CaringRecipient;
    caringRecipientJson?: CaringRecipient;
    caringRecipientModel?: CaringRecipient;
    caringRecipientSelected?: boolean;
    centerSelfContract?: boolean;
    checks?: any;
    contractDate?: string;
    contractDateHistory?: Array<any>;
    createdAt?: string;
    csManager?: string;
    csUser?: User;
    deleted?: boolean;
    editable?: boolean;
    files?: string;
    gender?: string;
    gender2?: string;
    id?: number;
    manager?: string;
    managerSocial?: string;
    managerSocialUser?: User;
    managerUser?: User;
    memo?: string;
    name?: string;
    name2?: string;
    phone?: string;
    providerAddress?: AddressInfo;
    providerBirthDate?: string;
    providerContractDate?: string;
    providerContractHistory?: Array<any>;
    providerDementiaEduComplete?: boolean;
    providerIdNumber?: string;
    providerLicenses?: Array<ProviderLicense>;
    providerPhone?: string;
    providerPosition?: 'Caregiver' | 'SocialWorker' | 'Nurse' | 'CenterManager' | 'NurseAssi' | 'CaregiverMonthPay' | 'NurseMonthPay' | 'NurseAssiMonthPay';
    providerPositionName?: string;
    recipientAddress?: AddressInfo;
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
    serviceType?: 'FAMILY' | 'NORMAL' | 'FAMILY60' | 'FAMILY90' | 'VISITBATH' | 'VISITCARE';
    signDate?: string;
    state?: 'CONTRACT_PENDING' | 'CONTRACT_PROCESSING' | 'CONTRACT_DONE' | 'CONTRACT_PRE_PROCESSING' | 'CONTRACT_LICENSE' | 'CONTRACT_CANCEL';
    summary?: string;
    text?: string;
    time60?: boolean;
    time90?: boolean;
    timeDayAndNight?: boolean;
    type?: 'FAMILY' | 'NORMAL' | 'FAMILY60' | 'FAMILY90' | 'VISITBATH' | 'VISITCARE';
    workCenter?: WorkCenter;
};

