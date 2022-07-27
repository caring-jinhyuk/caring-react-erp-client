/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaringRecipient } from './CaringRecipient';
import type { Pageable } from './Pageable';
import type { Sort } from './Sort';

export type Page_CaringRecipient_ = {
    content?: Array<CaringRecipient>;
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

