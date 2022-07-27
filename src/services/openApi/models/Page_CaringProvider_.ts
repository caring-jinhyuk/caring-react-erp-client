/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaringProviderRes } from './CaringProviderRes';
import type { Pageable } from './Pageable';
import type { Sort } from './Sort';

export type Page_CaringProvider_ = {
    content?: Array<CaringProviderRes>;
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

