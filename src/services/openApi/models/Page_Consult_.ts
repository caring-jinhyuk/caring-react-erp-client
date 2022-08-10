/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Consult } from './Consult';
import type { Pageable } from './Pageable';
import type { Sort } from './Sort';

export type Page_Consult_ = {
    content?: Array<Consult>;
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
