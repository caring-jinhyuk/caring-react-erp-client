/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkCenterRes } from './WorkCenterRes';

export type AccountRecordRes = {
    balance?: string;
    branch?: string;
    children?: Array<AccountRecordRes>;
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
    workCenter?: WorkCenterRes;
};

