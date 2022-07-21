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
    role?: User.role;
    sendNumber?: string;
};

export namespace User {

    export enum role {
        ADMIN = 'Admin',
        CENTER = 'Center',
        CONTACT_CENTER = 'ContactCenter',
        CENTER_CHIEF = 'CenterChief',
        ACCOUNTING_FIRM = 'AccountingFirm',
        FINANCIAL_MANAGER = 'FinancialManager',
        INFRA = 'Infra',
    }


}

