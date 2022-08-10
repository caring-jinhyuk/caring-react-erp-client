/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Pageable } from './Pageable';
import type { SmsKakaoSentResult } from './SmsKakaoSentResult';
import type { Sort } from './Sort';

export type Page_SmsKakaoSentResult_ = {
    content?: Array<SmsKakaoSentResult>;
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
