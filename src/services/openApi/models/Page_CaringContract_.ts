/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaringContract } from './CaringContract';
import type { Pageable } from './Pageable';
import type { Sort } from './Sort';

export type Page_CaringContract_ = {
    content?: Array<CaringContract>;
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

