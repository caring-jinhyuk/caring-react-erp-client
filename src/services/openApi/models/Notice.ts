/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Notice = {
    body?: string;
    centerIdList?: Array<number>;
    createdAt?: string;
    deleted?: boolean;
    file?: string;
    fixed?: boolean;
    id?: number;
    lastEdit?: number;
    noticeFor?: Notice.noticeFor;
    title?: string;
    updatedAt?: string;
};

export namespace Notice {

    export enum noticeFor {
        ADMIN = 'Admin',
        CENTER = 'Center',
        CONTACT_CENTER = 'ContactCenter',
        CENTER_CHIEF = 'CenterChief',
        ACCOUNTING_FIRM = 'AccountingFirm',
        FINANCIAL_MANAGER = 'FinancialManager',
        INFRA = 'Infra',
    }


}

