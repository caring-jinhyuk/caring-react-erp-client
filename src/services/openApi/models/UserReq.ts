/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Builder } from './Builder';
import type { CaringProviderReq } from './CaringProviderReq';

export type UserReq = {
    centerId?: number;
    email?: string;
    id?: number;
    name?: string;
    password?: string;
    phone?: string;
    properties?: Builder;
    provider?: CaringProviderReq;
    role?: 'AccountingFirm' | 'Admin' | 'Center' | 'CenterChief' | 'ContactCenter' | 'FinancialManager' | 'Infra';
    sendNumber?: string;
};

