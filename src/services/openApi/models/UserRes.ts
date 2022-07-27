/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaringProviderRes } from './CaringProviderRes';

export type UserRes = {
    centerId?: number;
    email?: string;
    id?: number;
    name?: string;
    password?: string;
    permissions?: Array<'Admin' | 'ApproveInsuranceUpdate' | 'CenterGet' | 'LoadConnectedUser' | 'UserUpdate'>;
    phone?: string;
    provider?: CaringProviderRes;
    role?: 'AccountingFirm' | 'Admin' | 'Center' | 'CenterChief' | 'ContactCenter' | 'FinancialManager' | 'Infra';
    sendNumber?: string;
};

