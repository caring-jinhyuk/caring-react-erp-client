/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkCenterReq } from './WorkCenterReq';

export type AccountRecordReq = {
    balance?: string;
    branch?: string;
    children?: Array<AccountRecordReq>;
    data?: any;
    deposit?: string;
    id?: number;
    media?: string;
    name?: string;
    number?: string;
    recipientIds?: Array<number>;
    recordDate?: string;
    recordType?: string;
    time?: string;
    type?: string;
    verify?: string;
    withdraw?: string;
    workCenter?: WorkCenterReq;
};

