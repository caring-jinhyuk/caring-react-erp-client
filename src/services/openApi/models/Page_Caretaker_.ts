/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Caretaker } from './Caretaker';
import type { Pageable } from './Pageable';
import type { Sort } from './Sort';

export type Page_Caretaker_ = {
    content?: Array<Caretaker>;
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
