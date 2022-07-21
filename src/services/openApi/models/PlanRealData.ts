/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

export type PlanRealData = {
    className?: string;
    collabo?: PlanRealData;
    data?: string;
    endTimeR?: string;
    index?: number;
    manager?: User;
    noTime?: boolean;
    plan?: Array<string>;
    planMinutes?: number;
    planSecond?: number;
    real?: Array<string>;
    realMinutes?: number;
    realSecond?: number;
    recording_sheet?: boolean;
    rfid?: Array<string>;
    startTimeR?: string;
    type?: string;
};

