/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaringProviderReq } from './CaringProviderReq';
import type { Finance } from './Finance';
import type { ProviderMatchedRecipientReq } from './ProviderMatchedRecipientReq';
import type { ProviderPaySubtract } from './ProviderPaySubtract';
import type { ServiceScheduleReq } from './ServiceScheduleReq';

export type ProviderPayReq = {
    accident?: number;
    base?: number;
    byCount?: number;
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
    provider?: CaringProviderReq;
    providerId?: number;
    providerMatchedRecipients?: Array<ProviderMatchedRecipientReq>;
    providerPaySubtractList?: Array<ProviderPaySubtract>;
    provinceIncomeTax?: number;
    realPay?: number;
    responsibilityInsurance?: number;
    rest?: number;
    salary?: number;
    salarySum?: number;
    schedules?: Array<ServiceScheduleReq>;
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

