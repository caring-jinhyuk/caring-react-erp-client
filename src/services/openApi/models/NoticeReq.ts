/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NoticeReq = {
    body?: string;
    centerIdList?: Array<number>;
    createdAt?: string;
    deleted?: boolean;
    file?: string;
    fixed?: boolean;
    id?: number;
    lastEdit?: number;
    noticeFor?: 'AccountingFirm' | 'Admin' | 'Center' | 'CenterChief' | 'ContactCenter' | 'FinancialManager' | 'Infra';
    title?: string;
    updatedAt?: string;
};

