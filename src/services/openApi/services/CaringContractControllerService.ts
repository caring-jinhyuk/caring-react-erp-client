/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CaringContract } from '../models/CaringContract';
import type { Page_CaringContract_ } from '../models/Page_CaringContract_';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CaringContractControllerService {

    /**
     * getCaringContract
     * @param id id
     * @returns CaringContract OK
     * @throws ApiError
     */
    public static getCaringContractUsingGet(
        id: number,
    ): CancelablePromise<CaringContract> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/CaringContract',
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
     * saveCaringContract
     * @param caringContract caringContract
     * @returns CaringContract OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveCaringContractUsingPost(
        caringContract: CaringContract,
    ): CancelablePromise<CaringContract | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/CaringContract',
            body: caringContract,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteCaringContract
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteCaringContractUsingDelete(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/CaringContract',
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
     * getCaringContractCount
     * @param from from
     * @param to to
     * @param userCenterId
     * @param userEmail
     * @param userId
     * @param userName
     * @param userPassword
     * @param userPermissions
     * @param userPhone
     * @param userProviderAddressAddress
     * @param userProviderAddressAddressDetail
     * @param userProviderAddressFullAddress
     * @param userProviderAddressX
     * @param userProviderAddressY
     * @param userProviderAddressZipCode
     * @param userProviderBankCode
     * @param userProviderBankName
     * @param userProviderBankNumber
     * @param userProviderBirthDate
     * @param userProviderConnectUserId
     * @param userProviderCreatedAt
     * @param userProviderDataBurdenDeduction
     * @param userProviderDataContractDate
     * @param userProviderDataWorkDay1
     * @param userProviderDataWorkTime1
     * @param userProviderDataWorkTime1End
     * @param userProviderDataWorkingAddress
     * @param userProviderDataWorkingMinute
     * @param userProviderDataWorkingType
     * @param userProviderDementiaEduComplete
     * @param userProviderExitDate
     * @param userProviderGender
     * @param userProviderHancareId
     * @param userProviderId
     * @param userProviderIdNumber
     * @param userProviderInsuranceStateAccidentDate
     * @param userProviderInsuranceStateAccidentLossDate
     * @param userProviderInsuranceStateAccidentPrice
     * @param userProviderInsuranceStateAccidentState
     * @param userProviderInsuranceStateDependents0Date
     * @param userProviderInsuranceStateDependents0IdNumber
     * @param userProviderInsuranceStateDependents0Name
     * @param userProviderInsuranceStateDependents0Nation
     * @param userProviderInsuranceStateDependents0Permission
     * @param userProviderInsuranceStateDependents0PermissionEndAt
     * @param userProviderInsuranceStateDependents0PermissionStartAt
     * @param userProviderInsuranceStateDependents0Relation
     * @param userProviderInsuranceStateEmployDate
     * @param userProviderInsuranceStateEmployLossDate
     * @param userProviderInsuranceStateEmployPrice
     * @param userProviderInsuranceStateEmployState
     * @param userProviderInsuranceStateHealthDate
     * @param userProviderInsuranceStateHealthLossDate
     * @param userProviderInsuranceStateHealthPrice
     * @param userProviderInsuranceStateHealthState
     * @param userProviderInsuranceStatePensionDate
     * @param userProviderInsuranceStatePensionLossDate
     * @param userProviderInsuranceStatePensionPrice
     * @param userProviderInsuranceStatePensionState
     * @param userProviderInsuranceStateWorkHours
     * @param userProviderJoinDate
     * @param userProviderMemo
     * @param userProviderName
     * @param userProviderPhone
     * @param userProviderPhone2
     * @param userProviderPosition
     * @param userProviderPositionName
     * @param userProviderProviderLicenses0IdNumber
     * @param userProviderProviderLicenses0PublishedAt
     * @param userProviderProviderLicenses0Type
     * @param userProviderRelation
     * @param userProviderSalary
     * @param userProviderState
     * @param userProviderStateDate
     * @param userProviderStateHistory
     * @param userProviderStateReason
     * @param userProviderSummary
     * @param userProviderTag
     * @param userProviderTagCall
     * @param userProviderTagCallDays
     * @param userProviderTagPhone
     * @param userProviderUpdatedAt
     * @param userProviderWorkCenterAccount
     * @param userProviderWorkCenterAccounts0Bank
     * @param userProviderWorkCenterAccounts0Idnumber
     * @param userProviderWorkCenterAccounts0LoginId
     * @param userProviderWorkCenterAccounts0LoginPw
     * @param userProviderWorkCenterAccounts0Name
     * @param userProviderWorkCenterAccounts0Number
     * @param userProviderWorkCenterAccounts0Pw
     * @param userProviderWorkCenterAddressAddress
     * @param userProviderWorkCenterAddressAddressDetail
     * @param userProviderWorkCenterAddressFullAddress
     * @param userProviderWorkCenterAddressX
     * @param userProviderWorkCenterAddressY
     * @param userProviderWorkCenterAddressZipCode
     * @param userProviderWorkCenterApiName
     * @param userProviderWorkCenterCenterNumber
     * @param userProviderWorkCenterChiefName
     * @param userProviderWorkCenterId
     * @param userProviderWorkCenterLoginCode
     * @param userProviderWorkCenterLoginId
     * @param userProviderWorkCenterLoginPassword
     * @param userProviderWorkCenterMain
     * @param userProviderWorkCenterName
     * @param userProviderWorkCenterPhone
     * @param userProviderWorkCenterServiceType
     * @param userProviderWorkCenterShortName
     * @param userProviderWorkCenterW4CCode
     * @param userProviderWorkTypes
     * @param userRole
     * @param userSendNumber
     * @returns any OK
     * @throws ApiError
     */
    public static getCaringContractCountUsingGet(
        from: number,
        to: number,
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
        userProviderCreatedAt?: string,
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
        userProviderUpdatedAt?: string,
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
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/CaringContract/count',
            query: {
                'from': from,
                'to': to,
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
                'user.provider.createdAt': userProviderCreatedAt,
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
                'user.provider.updatedAt': userProviderUpdatedAt,
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
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getContractsBy
     * @param providerId providerId
     * @param recipientId recipientId
     * @returns CaringContract OK
     * @throws ApiError
     */
    public static getContractsByUsingGet(
        providerId?: number,
        recipientId?: number,
    ): CancelablePromise<Array<CaringContract>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/CaringContract/getDocsBy',
            query: {
                'providerId': providerId,
                'recipientId': recipientId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getCaringContractList
     * @param centerId centerId
     * @param contractDate contractDate
     * @param createDate createDate
     * @param keyword keyword
     * @param page page
     * @param requestDate requestDate
     * @param signDate signDate
     * @param size size
     * @param state state
     * @param type type
     * @param userCenterId
     * @param userEmail
     * @param userId
     * @param userName
     * @param userPassword
     * @param userPermissions
     * @param userPhone
     * @param userProviderAddressAddress
     * @param userProviderAddressAddressDetail
     * @param userProviderAddressFullAddress
     * @param userProviderAddressX
     * @param userProviderAddressY
     * @param userProviderAddressZipCode
     * @param userProviderBankCode
     * @param userProviderBankName
     * @param userProviderBankNumber
     * @param userProviderBirthDate
     * @param userProviderConnectUserId
     * @param userProviderCreatedAt
     * @param userProviderDataBurdenDeduction
     * @param userProviderDataContractDate
     * @param userProviderDataWorkDay1
     * @param userProviderDataWorkTime1
     * @param userProviderDataWorkTime1End
     * @param userProviderDataWorkingAddress
     * @param userProviderDataWorkingMinute
     * @param userProviderDataWorkingType
     * @param userProviderDementiaEduComplete
     * @param userProviderExitDate
     * @param userProviderGender
     * @param userProviderHancareId
     * @param userProviderId
     * @param userProviderIdNumber
     * @param userProviderInsuranceStateAccidentDate
     * @param userProviderInsuranceStateAccidentLossDate
     * @param userProviderInsuranceStateAccidentPrice
     * @param userProviderInsuranceStateAccidentState
     * @param userProviderInsuranceStateDependents0Date
     * @param userProviderInsuranceStateDependents0IdNumber
     * @param userProviderInsuranceStateDependents0Name
     * @param userProviderInsuranceStateDependents0Nation
     * @param userProviderInsuranceStateDependents0Permission
     * @param userProviderInsuranceStateDependents0PermissionEndAt
     * @param userProviderInsuranceStateDependents0PermissionStartAt
     * @param userProviderInsuranceStateDependents0Relation
     * @param userProviderInsuranceStateEmployDate
     * @param userProviderInsuranceStateEmployLossDate
     * @param userProviderInsuranceStateEmployPrice
     * @param userProviderInsuranceStateEmployState
     * @param userProviderInsuranceStateHealthDate
     * @param userProviderInsuranceStateHealthLossDate
     * @param userProviderInsuranceStateHealthPrice
     * @param userProviderInsuranceStateHealthState
     * @param userProviderInsuranceStatePensionDate
     * @param userProviderInsuranceStatePensionLossDate
     * @param userProviderInsuranceStatePensionPrice
     * @param userProviderInsuranceStatePensionState
     * @param userProviderInsuranceStateWorkHours
     * @param userProviderJoinDate
     * @param userProviderMemo
     * @param userProviderName
     * @param userProviderPhone
     * @param userProviderPhone2
     * @param userProviderPosition
     * @param userProviderPositionName
     * @param userProviderProviderLicenses0IdNumber
     * @param userProviderProviderLicenses0PublishedAt
     * @param userProviderProviderLicenses0Type
     * @param userProviderRelation
     * @param userProviderSalary
     * @param userProviderState
     * @param userProviderStateDate
     * @param userProviderStateHistory
     * @param userProviderStateReason
     * @param userProviderSummary
     * @param userProviderTag
     * @param userProviderTagCall
     * @param userProviderTagCallDays
     * @param userProviderTagPhone
     * @param userProviderUpdatedAt
     * @param userProviderWorkCenterAccount
     * @param userProviderWorkCenterAccounts0Bank
     * @param userProviderWorkCenterAccounts0Idnumber
     * @param userProviderWorkCenterAccounts0LoginId
     * @param userProviderWorkCenterAccounts0LoginPw
     * @param userProviderWorkCenterAccounts0Name
     * @param userProviderWorkCenterAccounts0Number
     * @param userProviderWorkCenterAccounts0Pw
     * @param userProviderWorkCenterAddressAddress
     * @param userProviderWorkCenterAddressAddressDetail
     * @param userProviderWorkCenterAddressFullAddress
     * @param userProviderWorkCenterAddressX
     * @param userProviderWorkCenterAddressY
     * @param userProviderWorkCenterAddressZipCode
     * @param userProviderWorkCenterApiName
     * @param userProviderWorkCenterCenterNumber
     * @param userProviderWorkCenterChiefName
     * @param userProviderWorkCenterId
     * @param userProviderWorkCenterLoginCode
     * @param userProviderWorkCenterLoginId
     * @param userProviderWorkCenterLoginPassword
     * @param userProviderWorkCenterMain
     * @param userProviderWorkCenterName
     * @param userProviderWorkCenterPhone
     * @param userProviderWorkCenterServiceType
     * @param userProviderWorkCenterShortName
     * @param userProviderWorkCenterW4CCode
     * @param userProviderWorkTypes
     * @param userRole
     * @param userSendNumber
     * @returns Page_CaringContract_ OK
     * @throws ApiError
     */
    public static getCaringContractListUsingGet(
        centerId?: number,
        contractDate?: string,
        createDate?: number,
        keyword?: string,
        page?: number,
        requestDate?: string,
        signDate?: string,
        size: number = 10,
        state?: 'CONTRACT_PENDING' | 'CONTRACT_PROCESSING' | 'CONTRACT_DONE' | 'CONTRACT_PRE_PROCESSING' | 'CONTRACT_LICENSE' | 'CONTRACT_CANCEL',
        type?: 'FAMILY' | 'NORMAL' | 'FAMILY60' | 'FAMILY90' | 'VISITBATH' | 'VISITCARE',
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
        userProviderCreatedAt?: string,
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
        userProviderUpdatedAt?: string,
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
    ): CancelablePromise<Page_CaringContract_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/CaringContract/list',
            query: {
                'centerId': centerId,
                'contractDate': contractDate,
                'createDate': createDate,
                'keyword': keyword,
                'page': page,
                'requestDate': requestDate,
                'signDate': signDate,
                'size': size,
                'state': state,
                'type': type,
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
                'user.provider.createdAt': userProviderCreatedAt,
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
                'user.provider.updatedAt': userProviderUpdatedAt,
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
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
