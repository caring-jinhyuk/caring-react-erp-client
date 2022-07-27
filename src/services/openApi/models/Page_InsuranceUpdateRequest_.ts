/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InsuranceUpdateRequestRes } from './InsuranceUpdateRequestRes';
import type { Pageable } from './Pageable';
import type { Sort } from './Sort';

export type Page_InsuranceUpdateRequest_ = {
    content?: Array<InsuranceUpdateRequestRes>;
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

