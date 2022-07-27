/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Caregiver } from './Caregiver';
import type { Pageable } from './Pageable';
import type { Sort } from './Sort';

export type Page_Caregiver_ = {
    content?: Array<Caregiver>;
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

