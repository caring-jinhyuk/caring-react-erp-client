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
    providerPosition?: CaringContract.providerPosition;
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
    serviceType?: CaringContract.serviceType;
    signDate?: string;
    state?: CaringContract.state;
    summary?: string;
    text?: string;
    time60?: boolean;
    time90?: boolean;
    timeDayAndNight?: boolean;
    type?: CaringContract.type;
    workCenter?: WorkCenter;
};

export namespace CaringContract {

    export enum providerPosition {
        CAREGIVER = 'Caregiver',
        SOCIAL_WORKER = 'SocialWorker',
        NURSE = 'Nurse',
        CENTER_MANAGER = 'CenterManager',
        NURSE_ASSI = 'NurseAssi',
        CAREGIVER_MONTH_PAY = 'CaregiverMonthPay',
        NURSE_MONTH_PAY = 'NurseMonthPay',
        NURSE_ASSI_MONTH_PAY = 'NurseAssiMonthPay',
    }

    export enum serviceType {
        FAMILY = 'FAMILY',
        NORMAL = 'NORMAL',
        FAMILY60 = 'FAMILY60',
        FAMILY90 = 'FAMILY90',
        VISITBATH = 'VISITBATH',
        VISITCARE = 'VISITCARE',
    }

    export enum state {
        CONTRACT_PENDING = 'CONTRACT_PENDING',
        CONTRACT_PROCESSING = 'CONTRACT_PROCESSING',
        CONTRACT_DONE = 'CONTRACT_DONE',
        CONTRACT_PRE_PROCESSING = 'CONTRACT_PRE_PROCESSING',
        CONTRACT_LICENSE = 'CONTRACT_LICENSE',
        CONTRACT_CANCEL = 'CONTRACT_CANCEL',
    }

    export enum type {
        FAMILY = 'FAMILY',
        NORMAL = 'NORMAL',
        FAMILY60 = 'FAMILY60',
        FAMILY90 = 'FAMILY90',
        VISITBATH = 'VISITBATH',
        VISITCARE = 'VISITCARE',
    }


}

