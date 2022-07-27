/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Builder } from './Builder';
import type { CaringProvider } from './CaringProvider';

export type User = {
    centerId?: number;
    email?: string;
    id?: number;
    name?: string;
    password?: string;
    permissions?: Array<'Admin' | 'CenterGet' | 'ApproveInsuranceUpdate' | 'UserUpdate' | 'LoadConnectedUser'>;
    phone?: string;
    properties?: Builder;
    provider?: CaringProvider;
    role?: 'Admin' | 'Center' | 'ContactCenter' | 'CenterChief' | 'AccountingFirm' | 'FinancialManager' | 'Infra';
    sendNumber?: string;
};

