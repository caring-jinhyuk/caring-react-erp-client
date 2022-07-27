/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';
import type { AddressInfoReq } from './AddressInfoReq';

export type WorkCenterReq = {
    account?: string;
    accounts?: Array<Account>;
    address?: AddressInfoReq;
    apiName?: string;
    centerNumber?: string;
    chiefName?: string;
    id?: number;
    loginCode?: string;
    loginId?: string;
    loginPassword?: string;
    main?: boolean;
    name?: string;
    phone?: string;
    serviceType?: string;
    w4cCode?: string;
};

