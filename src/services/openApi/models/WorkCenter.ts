/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';
import type { AddressInfo } from './AddressInfo';

export type WorkCenter = {
    account?: string;
    accounts?: Array<Account>;
    address?: AddressInfo;
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
    stamp?: string;
    w4cCode?: string;
};
