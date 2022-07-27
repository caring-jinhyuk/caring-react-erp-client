/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';
import type { AddressInfoRes } from './AddressInfoRes';

export type WorkCenterRes = {
    account?: string;
    accounts?: Array<Account>;
    address?: AddressInfoRes;
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
    shortName?: string;
    w4cCode?: string;
};

