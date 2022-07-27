/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Notice } from './Notice';
import type { Pageable } from './Pageable';
import type { Sort } from './Sort';

export type Page_Notice_ = {
    content?: Array<Notice>;
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

