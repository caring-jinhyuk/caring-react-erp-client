/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomerCall } from './CustomerCall';
import type { Pageable } from './Pageable';
import type { Sort } from './Sort';

export type Page_CustomerCall_ = {
    content?: Array<CustomerCall>;
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

