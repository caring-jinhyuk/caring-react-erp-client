/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountRecord } from './AccountRecord';
import type { ServiceSchedule } from './ServiceSchedule';

export type RecipientBurdenData = {
    burdens?: Array<ServiceSchedule>;
    deposits?: Array<AccountRecord>;
    recipientId?: number;
};
