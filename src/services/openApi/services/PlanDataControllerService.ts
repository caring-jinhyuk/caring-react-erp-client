/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PlanData } from '../models/PlanData';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PlanDataControllerService {

    /**
     * getPlanData
     * @returns PlanData OK
     * @throws ApiError
     */
    public static getPlanDataUsingGet({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<PlanData> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/planData',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * savePlanData
     * @returns any OK
     * @throws ApiError
     */
    public static savePlanDataUsingPost({
        planData,
    }: {
        /**
         * planData
         */
        planData: Array<PlanData>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/planData',
            body: planData,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deletePlanData
     * @returns any OK
     * @throws ApiError
     */
    public static deletePlanDataUsingDelete({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/planData',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * deleteEachPlanData
     * @returns any OK
     * @throws ApiError
     */
    public static deleteEachPlanDataUsingPost({
        centerId,
        data,
    }: {
        /**
         * centerId
         */
        centerId: number,
        /**
         * data
         */
        data: Array<string>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/planData/deletePlan',
            query: {
                'centerId': centerId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteEachRealData
     * @returns any OK
     * @throws ApiError
     */
    public static deleteEachRealDataUsingPost({
        centerId,
        data,
    }: {
        /**
         * centerId
         */
        centerId: number,
        /**
         * data
         */
        data: Array<string>,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/planData/deleteReal',
            query: {
                'centerId': centerId,
            },
            body: data,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getPlanDataParamList
     * @returns string OK
     * @throws ApiError
     */
    public static getPlanDataParamListUsingGet({
        end,
        start,
        workCenterId,
        userCenterId,
        userEmail,
        userId,
        userName,
        userPassword,
        userPermissions,
        userPhone,
        userProviderAddressAddress,
        userProviderAddressAddressDetail,
        userProviderAddressFullAddress,
        userProviderAddressX,
        userProviderAddressY,
        userProviderAddressZipCode,
        userProviderBankCode,
        userProviderBankName,
        userProviderBankNumber,
        userProviderBirthDate,
        userProviderConnectUserId,
        userProviderDataBurdenDeduction,
        userProviderDataContractDate,
        userProviderDataWorkDay1,
        userProviderDataWorkTime1,
        userProviderDataWorkTime1End,
        userProviderDataWorkingAddress,
        userProviderDataWorkingMinute,
        userProviderDataWorkingType,
        userProviderDementiaEduComplete,
        userProviderExitDate,
        userProviderGender,
        userProviderHancareId,
        userProviderId,
        userProviderIdNumber,
        userProviderInsuranceStateAccidentDate,
        userProviderInsuranceStateAccidentLossDate,
        userProviderInsuranceStateAccidentPrice,
        userProviderInsuranceStateAccidentState,
        userProviderInsuranceStateDependents0Date,
        userProviderInsuranceStateDependents0IdNumber,
        userProviderInsuranceStateDependents0Name,
        userProviderInsuranceStateDependents0Nation,
        userProviderInsuranceStateDependents0Permission,
        userProviderInsuranceStateDependents0PermissionEndAt,
        userProviderInsuranceStateDependents0PermissionStartAt,
        userProviderInsuranceStateDependents0Relation,
        userProviderInsuranceStateEmployDate,
        userProviderInsuranceStateEmployLossDate,
        userProviderInsuranceStateEmployPrice,
        userProviderInsuranceStateEmployState,
        userProviderInsuranceStateHealthDate,
        userProviderInsuranceStateHealthLossDate,
        userProviderInsuranceStateHealthPrice,
        userProviderInsuranceStateHealthState,
        userProviderInsuranceStatePensionDate,
        userProviderInsuranceStatePensionLossDate,
        userProviderInsuranceStatePensionPrice,
        userProviderInsuranceStatePensionState,
        userProviderInsuranceStateWorkHours,
        userProviderJoinDate,
        userProviderMemo,
        userProviderName,
        userProviderPhone,
        userProviderPhone2,
        userProviderPosition,
        userProviderPositionName,
        userProviderProviderLicenses0IdNumber,
        userProviderProviderLicenses0PublishedAt,
        userProviderProviderLicenses0Type,
        userProviderRelation,
        userProviderSalary,
        userProviderState,
        userProviderStateDate,
        userProviderStateHistory,
        userProviderStateReason,
        userProviderSummary,
        userProviderTag,
        userProviderTagCall,
        userProviderTagCallDays,
        userProviderTagPhone,
        userProviderWorkCenterAccount,
        userProviderWorkCenterAccounts0Bank,
        userProviderWorkCenterAccounts0Idnumber,
        userProviderWorkCenterAccounts0LoginId,
        userProviderWorkCenterAccounts0LoginPw,
        userProviderWorkCenterAccounts0Name,
        userProviderWorkCenterAccounts0Number,
        userProviderWorkCenterAccounts0Pw,
        userProviderWorkCenterAddressAddress,
        userProviderWorkCenterAddressAddressDetail,
        userProviderWorkCenterAddressFullAddress,
        userProviderWorkCenterAddressX,
        userProviderWorkCenterAddressY,
        userProviderWorkCenterAddressZipCode,
        userProviderWorkCenterApiName,
        userProviderWorkCenterCenterNumber,
        userProviderWorkCenterChiefName,
        userProviderWorkCenterId,
        userProviderWorkCenterLoginCode,
        userProviderWorkCenterLoginId,
        userProviderWorkCenterLoginPassword,
        userProviderWorkCenterMain,
        userProviderWorkCenterName,
        userProviderWorkCenterPhone,
        userProviderWorkCenterServiceType,
        userProviderWorkCenterShortName,
        userProviderWorkCenterW4CCode,
        userProviderWorkTypes,
        userRole,
        userSendNumber,
    }: {
        /**
         * end
         */
        end: string,
        /**
         * start
         */
        start: string,
        /**
         * workCenterId
         */
        workCenterId: number,
        userCenterId?: number,
        userEmail?: string,
        userId?: number,
        userName?: string,
        userPassword?: string,
        userPermissions?: 'Admin' | 'CenterGet' | 'ApproveInsuranceUpdate' | 'UserUpdate' | 'LoadConnectedUser',
        userPhone?: string,
        userProviderAddressAddress?: string,
        userProviderAddressAddressDetail?: string,
        userProviderAddressFullAddress?: string,
        userProviderAddressX?: number,
        userProviderAddressY?: number,
        userProviderAddressZipCode?: string,
        userProviderBankCode?: string,
        userProviderBankName?: string,
        userProviderBankNumber?: string,
        userProviderBirthDate?: string,
        userProviderConnectUserId?: number,
        userProviderDataBurdenDeduction?: boolean,
        userProviderDataContractDate?: string,
        userProviderDataWorkDay1?: string,
        userProviderDataWorkTime1?: string,
        userProviderDataWorkTime1End?: string,
        userProviderDataWorkingAddress?: string,
        userProviderDataWorkingMinute?: string,
        userProviderDataWorkingType?: string,
        userProviderDementiaEduComplete?: boolean,
        userProviderExitDate?: string,
        userProviderGender?: 'MALE' | 'FEMALE',
        userProviderHancareId?: string,
        userProviderId?: number,
        userProviderIdNumber?: string,
        userProviderInsuranceStateAccidentDate?: string,
        userProviderInsuranceStateAccidentLossDate?: string,
        userProviderInsuranceStateAccidentPrice?: number,
        userProviderInsuranceStateAccidentState?: 'GET' | 'WITHDRAW' | 'INSURANCE_CANCEL' | 'INSURANCE_MODIFY' | 'MOVE_CONFIRM' | 'CHANGE_AMOUNT' | 'ETC_CHANGE',
        userProviderInsuranceStateDependents0Date?: string,
        userProviderInsuranceStateDependents0IdNumber?: string,
        userProviderInsuranceStateDependents0Name?: string,
        userProviderInsuranceStateDependents0Nation?: string,
        userProviderInsuranceStateDependents0Permission?: string,
        userProviderInsuranceStateDependents0PermissionEndAt?: string,
        userProviderInsuranceStateDependents0PermissionStartAt?: string,
        userProviderInsuranceStateDependents0Relation?: string,
        userProviderInsuranceStateEmployDate?: string,
        userProviderInsuranceStateEmployLossDate?: string,
        userProviderInsuranceStateEmployPrice?: number,
        userProviderInsuranceStateEmployState?: 'GET' | 'WITHDRAW' | 'INSURANCE_CANCEL' | 'INSURANCE_MODIFY' | 'MOVE_CONFIRM' | 'CHANGE_AMOUNT' | 'ETC_CHANGE',
        userProviderInsuranceStateHealthDate?: string,
        userProviderInsuranceStateHealthLossDate?: string,
        userProviderInsuranceStateHealthPrice?: number,
        userProviderInsuranceStateHealthState?: 'GET' | 'WITHDRAW' | 'INSURANCE_CANCEL' | 'INSURANCE_MODIFY' | 'MOVE_CONFIRM' | 'CHANGE_AMOUNT' | 'ETC_CHANGE',
        userProviderInsuranceStatePensionDate?: string,
        userProviderInsuranceStatePensionLossDate?: string,
        userProviderInsuranceStatePensionPrice?: number,
        userProviderInsuranceStatePensionState?: 'GET' | 'WITHDRAW' | 'INSURANCE_CANCEL' | 'INSURANCE_MODIFY' | 'MOVE_CONFIRM' | 'CHANGE_AMOUNT' | 'ETC_CHANGE',
        userProviderInsuranceStateWorkHours?: number,
        userProviderJoinDate?: string,
        userProviderMemo?: string,
        userProviderName?: string,
        userProviderPhone?: string,
        userProviderPhone2?: string,
        userProviderPosition?: 'Caregiver' | 'SocialWorker' | 'Nurse' | 'CenterManager' | 'NurseAssi' | 'CaregiverMonthPay' | 'NurseMonthPay' | 'NurseAssiMonthPay',
        userProviderPositionName?: string,
        userProviderProviderLicenses0IdNumber?: string,
        userProviderProviderLicenses0PublishedAt?: string,
        userProviderProviderLicenses0Type?: string,
        userProviderRelation?: string,
        userProviderSalary?: number,
        userProviderState?: 'OnWork' | 'Waiting' | 'OnVacation' | 'Exit' | 'Etc',
        userProviderStateDate?: string,
        userProviderStateHistory?: Array<any>,
        userProviderStateReason?: string,
        userProviderSummary?: string,
        userProviderTag?: string,
        userProviderTagCall?: boolean,
        userProviderTagCallDays?: string,
        userProviderTagPhone?: string,
        userProviderWorkCenterAccount?: string,
        userProviderWorkCenterAccounts0Bank?: string,
        userProviderWorkCenterAccounts0Idnumber?: string,
        userProviderWorkCenterAccounts0LoginId?: string,
        userProviderWorkCenterAccounts0LoginPw?: string,
        userProviderWorkCenterAccounts0Name?: string,
        userProviderWorkCenterAccounts0Number?: string,
        userProviderWorkCenterAccounts0Pw?: string,
        userProviderWorkCenterAddressAddress?: string,
        userProviderWorkCenterAddressAddressDetail?: string,
        userProviderWorkCenterAddressFullAddress?: string,
        userProviderWorkCenterAddressX?: number,
        userProviderWorkCenterAddressY?: number,
        userProviderWorkCenterAddressZipCode?: string,
        userProviderWorkCenterApiName?: string,
        userProviderWorkCenterCenterNumber?: string,
        userProviderWorkCenterChiefName?: string,
        userProviderWorkCenterId?: number,
        userProviderWorkCenterLoginCode?: string,
        userProviderWorkCenterLoginId?: string,
        userProviderWorkCenterLoginPassword?: string,
        userProviderWorkCenterMain?: boolean,
        userProviderWorkCenterName?: string,
        userProviderWorkCenterPhone?: string,
        userProviderWorkCenterServiceType?: string,
        userProviderWorkCenterShortName?: string,
        userProviderWorkCenterW4CCode?: string,
        userProviderWorkTypes?: 'Family' | 'Bath' | 'Nursing',
        userRole?: 'Admin' | 'Center' | 'ContactCenter' | 'CenterChief' | 'AccountingFirm' | 'FinancialManager' | 'Infra',
        userSendNumber?: string,
    }): CancelablePromise<Array<Array<string>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/planData/param',
            query: {
                'end': end,
                'start': start,
                'user.centerId': userCenterId,
                'user.email': userEmail,
                'user.id': userId,
                'user.name': userName,
                'user.password': userPassword,
                'user.permissions': userPermissions,
                'user.phone': userPhone,
                'user.provider.address.address': userProviderAddressAddress,
                'user.provider.address.addressDetail': userProviderAddressAddressDetail,
                'user.provider.address.fullAddress': userProviderAddressFullAddress,
                'user.provider.address.x': userProviderAddressX,
                'user.provider.address.y': userProviderAddressY,
                'user.provider.address.zipCode': userProviderAddressZipCode,
                'user.provider.bankCode': userProviderBankCode,
                'user.provider.bankName': userProviderBankName,
                'user.provider.bankNumber': userProviderBankNumber,
                'user.provider.birthDate': userProviderBirthDate,
                'user.provider.connectUserId': userProviderConnectUserId,
                'user.provider.data.burdenDeduction': userProviderDataBurdenDeduction,
                'user.provider.data.contractDate': userProviderDataContractDate,
                'user.provider.data.workDay1': userProviderDataWorkDay1,
                'user.provider.data.workTime1': userProviderDataWorkTime1,
                'user.provider.data.workTime1End': userProviderDataWorkTime1End,
                'user.provider.data.workingAddress': userProviderDataWorkingAddress,
                'user.provider.data.workingMinute': userProviderDataWorkingMinute,
                'user.provider.data.workingType': userProviderDataWorkingType,
                'user.provider.dementiaEduComplete': userProviderDementiaEduComplete,
                'user.provider.exitDate': userProviderExitDate,
                'user.provider.gender': userProviderGender,
                'user.provider.hancareId': userProviderHancareId,
                'user.provider.id': userProviderId,
                'user.provider.idNumber': userProviderIdNumber,
                'user.provider.insuranceState.accidentDate': userProviderInsuranceStateAccidentDate,
                'user.provider.insuranceState.accidentLossDate': userProviderInsuranceStateAccidentLossDate,
                'user.provider.insuranceState.accidentPrice': userProviderInsuranceStateAccidentPrice,
                'user.provider.insuranceState.accidentState': userProviderInsuranceStateAccidentState,
                'user.provider.insuranceState.dependents[0].date': userProviderInsuranceStateDependents0Date,
                'user.provider.insuranceState.dependents[0].idNumber': userProviderInsuranceStateDependents0IdNumber,
                'user.provider.insuranceState.dependents[0].name': userProviderInsuranceStateDependents0Name,
                'user.provider.insuranceState.dependents[0].nation': userProviderInsuranceStateDependents0Nation,
                'user.provider.insuranceState.dependents[0].permission': userProviderInsuranceStateDependents0Permission,
                'user.provider.insuranceState.dependents[0].permissionEndAt': userProviderInsuranceStateDependents0PermissionEndAt,
                'user.provider.insuranceState.dependents[0].permissionStartAt': userProviderInsuranceStateDependents0PermissionStartAt,
                'user.provider.insuranceState.dependents[0].relation': userProviderInsuranceStateDependents0Relation,
                'user.provider.insuranceState.employDate': userProviderInsuranceStateEmployDate,
                'user.provider.insuranceState.employLossDate': userProviderInsuranceStateEmployLossDate,
                'user.provider.insuranceState.employPrice': userProviderInsuranceStateEmployPrice,
                'user.provider.insuranceState.employState': userProviderInsuranceStateEmployState,
                'user.provider.insuranceState.healthDate': userProviderInsuranceStateHealthDate,
                'user.provider.insuranceState.healthLossDate': userProviderInsuranceStateHealthLossDate,
                'user.provider.insuranceState.healthPrice': userProviderInsuranceStateHealthPrice,
                'user.provider.insuranceState.healthState': userProviderInsuranceStateHealthState,
                'user.provider.insuranceState.pensionDate': userProviderInsuranceStatePensionDate,
                'user.provider.insuranceState.pensionLossDate': userProviderInsuranceStatePensionLossDate,
                'user.provider.insuranceState.pensionPrice': userProviderInsuranceStatePensionPrice,
                'user.provider.insuranceState.pensionState': userProviderInsuranceStatePensionState,
                'user.provider.insuranceState.workHours': userProviderInsuranceStateWorkHours,
                'user.provider.joinDate': userProviderJoinDate,
                'user.provider.memo': userProviderMemo,
                'user.provider.name': userProviderName,
                'user.provider.phone': userProviderPhone,
                'user.provider.phone2': userProviderPhone2,
                'user.provider.position': userProviderPosition,
                'user.provider.positionName': userProviderPositionName,
                'user.provider.providerLicenses[0].idNumber': userProviderProviderLicenses0IdNumber,
                'user.provider.providerLicenses[0].publishedAt': userProviderProviderLicenses0PublishedAt,
                'user.provider.providerLicenses[0].type': userProviderProviderLicenses0Type,
                'user.provider.relation': userProviderRelation,
                'user.provider.salary': userProviderSalary,
                'user.provider.state': userProviderState,
                'user.provider.stateDate': userProviderStateDate,
                'user.provider.stateHistory': userProviderStateHistory,
                'user.provider.stateReason': userProviderStateReason,
                'user.provider.summary': userProviderSummary,
                'user.provider.tag': userProviderTag,
                'user.provider.tagCall': userProviderTagCall,
                'user.provider.tagCallDays': userProviderTagCallDays,
                'user.provider.tagPhone': userProviderTagPhone,
                'user.provider.workCenter.account': userProviderWorkCenterAccount,
                'user.provider.workCenter.accounts[0].bank': userProviderWorkCenterAccounts0Bank,
                'user.provider.workCenter.accounts[0].idnumber': userProviderWorkCenterAccounts0Idnumber,
                'user.provider.workCenter.accounts[0].loginId': userProviderWorkCenterAccounts0LoginId,
                'user.provider.workCenter.accounts[0].loginPw': userProviderWorkCenterAccounts0LoginPw,
                'user.provider.workCenter.accounts[0].name': userProviderWorkCenterAccounts0Name,
                'user.provider.workCenter.accounts[0].number': userProviderWorkCenterAccounts0Number,
                'user.provider.workCenter.accounts[0].pw': userProviderWorkCenterAccounts0Pw,
                'user.provider.workCenter.address.address': userProviderWorkCenterAddressAddress,
                'user.provider.workCenter.address.addressDetail': userProviderWorkCenterAddressAddressDetail,
                'user.provider.workCenter.address.fullAddress': userProviderWorkCenterAddressFullAddress,
                'user.provider.workCenter.address.x': userProviderWorkCenterAddressX,
                'user.provider.workCenter.address.y': userProviderWorkCenterAddressY,
                'user.provider.workCenter.address.zipCode': userProviderWorkCenterAddressZipCode,
                'user.provider.workCenter.apiName': userProviderWorkCenterApiName,
                'user.provider.workCenter.centerNumber': userProviderWorkCenterCenterNumber,
                'user.provider.workCenter.chiefName': userProviderWorkCenterChiefName,
                'user.provider.workCenter.id': userProviderWorkCenterId,
                'user.provider.workCenter.loginCode': userProviderWorkCenterLoginCode,
                'user.provider.workCenter.loginId': userProviderWorkCenterLoginId,
                'user.provider.workCenter.loginPassword': userProviderWorkCenterLoginPassword,
                'user.provider.workCenter.main': userProviderWorkCenterMain,
                'user.provider.workCenter.name': userProviderWorkCenterName,
                'user.provider.workCenter.phone': userProviderWorkCenterPhone,
                'user.provider.workCenter.serviceType': userProviderWorkCenterServiceType,
                'user.provider.workCenter.shortName': userProviderWorkCenterShortName,
                'user.provider.workCenter.w4cCode': userProviderWorkCenterW4CCode,
                'user.provider.workTypes': userProviderWorkTypes,
                'user.role': userRole,
                'user.sendNumber': userSendNumber,
                'workCenterId': workCenterId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
