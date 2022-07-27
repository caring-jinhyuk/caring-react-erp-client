/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaringProviderRes } from './CaringProviderRes';
import type { Finance } from './Finance';
import type { ProviderMatchedRecipientRes } from './ProviderMatchedRecipientRes';
import type { ProviderPaySubtract } from './ProviderPaySubtract';
import type { ServiceScheduleRes } from './ServiceScheduleRes';

export type ProviderPayRes = {
    accident?: number;
    base?: number;
    'c'?: any;
    calculateLoss?: number;
    calculated?: boolean;
    carSupport?: number;
    carePay?: number;
    carePayReal?: number;
    centerId?: number;
    companyExpanse?: number;
    complete?: boolean;
    createdAt?: string;
    employ?: number;
    employCompany?: number;
    employCompanyStable?: number;
    employCompanyStableRatio?: number;
    etc?: number;
    etcLoss?: number;
    etcTaxLess?: number;
    exitPay?: number;
    extendHours?: number;
    extendPay?: number;
    extendPaySum?: number;
    finance?: Finance;
    health?: number;
    healthCompany?: number;
    holidayHours?: number;
    holidayPay?: number;
    id?: number;
    incomeTax?: number;
    longTermSupport?: number;
    longTermSupportReal?: number;
    loss?: number;
    lossSum?: number;
    meal?: number;
    memo?: string;
    month?: string;
    nightHours?: number;
    nightPay?: number;
    operation?: number;
    pension?: number;
    pensionCompany?: number;
    provider?: CaringProviderRes;
    providerId?: number;
    providerMatchedRecipients?: Array<ProviderMatchedRecipientRes>;
    providerPaySubtractList?: Array<ProviderPaySubtract>;
    provinceIncomeTax?: number;
    realPay?: number;
    responsibilityInsurance?: number;
    rest?: number;
    salary?: number;
    salarySum?: number;
    schedules?: Array<ServiceScheduleRes>;
    senior?: number;
    seniorCompany?: number;
    severePay?: number;
    severePayReal?: number;
    sundayHours?: number;
    sundayPay?: number;
    treatImprove?: number;
    updatedAt?: string;
    weekRest?: number;
    workHoursPerWeek?: number;
};

