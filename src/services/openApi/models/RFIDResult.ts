/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PlanRealData } from './PlanRealData';

export type RFIDResult = {
    error2?: Array<PlanRealData>;
    etcGrouped?: Array<Record<string, any>>;
    services?: Array<string>;
};

