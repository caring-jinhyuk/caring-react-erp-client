/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkCenter } from './WorkCenter';

export type AccountRecord = {
    balance?: string;
    branch?: string;
    children?: Array<AccountRecord>;
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
    workCenter?: WorkCenter;
};

