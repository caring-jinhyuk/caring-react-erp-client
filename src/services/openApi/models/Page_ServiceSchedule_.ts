/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Pageable } from './Pageable';
import type { ServiceSchedule } from './ServiceSchedule';
import type { Sort } from './Sort';

export type Page_ServiceSchedule_ = {
    content?: Array<ServiceSchedule>;
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

