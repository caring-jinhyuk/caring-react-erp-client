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
    noticeFor?: 'Admin' | 'Center' | 'ContactCenter' | 'CenterChief' | 'AccountingFirm' | 'FinancialManager' | 'Infra';
    title?: string;
    updatedAt?: string;
};
