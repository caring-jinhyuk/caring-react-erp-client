/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaringProvider } from './CaringProvider';

export type User = {
    centerId?: number;
    email?: string;
    id?: number;
    name?: string;
    password?: string;
    permissions?: Array<'Admin' | 'ApproveInsuranceUpdate' | 'CenterGet' | 'LoadConnectedUser' | 'UserUpdate'>;
    phone?: string;
    provider?: CaringProvider;
    role?: 'AccountingFirm' | 'Admin' | 'Center' | 'CenterChief' | 'ContactCenter' | 'FinancialManager' | 'Infra';
    sendNumber?: string;
};

