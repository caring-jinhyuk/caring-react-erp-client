/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PlanRealData } from './PlanRealData';

export type GroupedInfo = {
    birth?: string;
    collabo?: PlanRealData;
    family?: boolean;
    familyY?: boolean;
    manageNumber?: string;
    providerName?: string;
    rawRecords?: Array<PlanRealData>;
    recipientName?: string;
    record?: Record<string, string>;
};

