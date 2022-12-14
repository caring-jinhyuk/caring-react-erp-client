/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomEventLog } from './CustomEventLog';
import type { Pageable } from './Pageable';
import type { Sort } from './Sort';

export type Page_CustomEventLog_ = {
    content?: Array<CustomEventLog>;
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
