/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InsuranceUpdateRequest } from './InsuranceUpdateRequest';
import type { Pageable } from './Pageable';
import type { Sort } from './Sort';

export type Page_InsuranceUpdateRequest_ = {
    content?: Array<InsuranceUpdateRequest>;
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
