/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GovermentApiResult } from './GovermentApiResult';
import type { Pageable } from './Pageable';
import type { Sort } from './Sort';

export type Page_GovermentApiResult_ = {
    content?: Array<GovermentApiResult>;
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

