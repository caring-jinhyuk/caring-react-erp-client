/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Pageable } from './Pageable';
import type { ServiceScheduleRes } from './ServiceScheduleRes';
import type { Sort } from './Sort';

export type Page_ServiceSchedule_ = {
    content?: Array<ServiceScheduleRes>;
    empty?: boolean;
    first?: boolean;
    last?: boolean;
    number?: number;
    numberOfElements?: number;
    pageable?: Pageable;
    size?: number;
    sort?: Sort;
    totalElements?: number;
    totalPages?: number;
};

