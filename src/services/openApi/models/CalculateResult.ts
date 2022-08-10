/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CalculateSummary } from './CalculateSummary';
import type { GroupedInfo } from './GroupedInfo';
import type { PlanRealData } from './PlanRealData';

export type CalculateResult = {
    data?: Array<PlanRealData>;
    grouped?: Record<string, GroupedInfo>;
    summeries?: CalculateSummary;
};
