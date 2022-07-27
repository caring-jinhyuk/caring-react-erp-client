/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaringRecipientRes } from './CaringRecipientRes';
import type { Pageable } from './Pageable';
import type { Sort } from './Sort';

export type Page_CaringRecipient_ = {
    content?: Array<CaringRecipientRes>;
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

