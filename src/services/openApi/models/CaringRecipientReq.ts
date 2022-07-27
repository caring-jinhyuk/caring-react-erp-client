/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressInfoReq } from './AddressInfoReq';
import type { Contractor } from './Contractor';
import type { RecipientData } from './RecipientData';
import type { UserReq } from './UserReq';
import type { WorkCenterReq } from './WorkCenterReq';

export type CaringRecipientReq = {
    address?: AddressInfoReq;
    beaconAttached?: boolean;
    birthDate?: string;
    checkValidUntil?: string;
    contractDate?: string;
    contractUntilDate?: string;
    contractor?: Contractor;
    createdAt?: string;
    data?: RecipientData;
    externalServices?: Array<string>;
    gender?: 'FEMALE' | 'MALE';
    hancareId?: string;
    health?: any;
    id?: number;
    idNumber?: string;
    illness?: string;
    longTermDurationFrom?: string;
    longTermDurationUntil?: string;
    longTermGrade?: string;
    longTermHistory?: Array<any>;
    longTermNumber?: string;
    manager?: UserReq;
    memo?: string;
    name?: string;
    rateHistory?: Array<any>;
    recipientRate?: string;
    repPhone?: string;
    service?: string;
    status?: string;
    statusDate?: string;
    statusHistory?: Array<any>;
    statusReason?: string;
    summary?: string;
    tag?: string;
    tagAttached?: boolean;
    updatedAt?: string;
    workCenter?: WorkCenterReq;
};

