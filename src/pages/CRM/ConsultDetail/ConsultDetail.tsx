import React, { FC, useState } from 'react';
import Card, { CardBody, CardHeader, CardTitle } from '../../../components/bootstrap/Card';
import './style/ConsultDetail.scss';

import { useNavigate } from 'react-router-dom';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import ScrollspyNav from '../../../components/bootstrap/ScrollspyNav';
import Button from '../../../components/bootstrap/Button';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Badge from '../../../components/bootstrap/Badge';
import { Caregiver } from '../../../services/openApi';
import Select from '../../../components/bootstrap/forms/Select';
import { stateList } from '../Consult/statics/consultSelectMenus';
import ConsultCustomerInfo from './components/ConsultCustomerInfo';
import ConsultBeneficiaryInfo from './components/ConsultBeneficiaryInfo';
import CaregiverDetail from '../CaregiverManagement/components/CaregiverDetail';
import { useGetCaregiver } from '../../../quries/consult/useGetCaregiver';
import { v1 } from 'uuid';
import { useRecoilValue } from 'recoil';
import { consultState } from '../../../atoms/consult';
import ConsultFamilyCareInfo from './components/ConsultFamilyCareInfo';
import Textarea from '../../../components/bootstrap/forms/Textarea';

enum ConsultInfoType {
	CUSTOMER_INFO = '고객정보',
	BENEFICIARY_INFO = '수급자정보',
	CAREGIVER_INFO = '요양보호사정보',
	FAMILY_CARE_INFO = '가족요양파악조건',
	JOB_OFFER_INFO = '구인정보',
}

interface ConsultDetailInfoType {
	title: string;
	element: JSX.Element;
}

const ConsultDetail: FC = () => {
	const [location, setLocation] = useState(undefined);
	const [isModify, setIsModify] = useState(false);
	const { consult } = useRecoilValue(consultState);
	const navigate = useNavigate();
	const caregiver = useGetCaregiver(consult?.phone || '');

	const handleOnChange = () => {};

	const consultDetailInfo: ConsultDetailInfoType[] =
		consult?.state === '일반/목욕 : 구직문의'
			? [
					{
						title: ConsultInfoType.CUSTOMER_INFO,
						element: <ConsultCustomerInfo isModify={false} />,
					},
					{
						title: ConsultInfoType.CAREGIVER_INFO,
						element: <CaregiverDetail caregiver={caregiver.data ?? ({} as Caregiver)} />,
					},
			  ]
			: [
					{
						title: ConsultInfoType.CUSTOMER_INFO,
						element: <ConsultCustomerInfo isModify={false} />,
					},
					{
						title: ConsultInfoType.BENEFICIARY_INFO,
						element: <ConsultBeneficiaryInfo isModify={false} />,
					},
					{
						title: ConsultInfoType.FAMILY_CARE_INFO,
						element: <ConsultFamilyCareInfo isModify={false} />,
					},
					{
						title: ConsultInfoType.JOB_OFFER_INFO,
						element: <ConsultCustomerInfo isModify={false} />,
					},
			  ];

	return (
		<PageWrapper className='position-relative'>
			<SubHeader>
				<SubHeaderLeft>
					<Button icon={'ArrowBack'} onClick={() => navigate(-1)}>
						목록으로 돌아가기
					</Button>
					<Badge className={'mb-0'}>
						<span className='h4'>{consult?.phone}</span>
					</Badge>
					<Select
						ariaLabel={'상담유형'}
						list={stateList}
						className='w-25'
						value={consult?.state}
						onChange={handleOnChange}
					/>
				</SubHeaderLeft>
				<SubHeaderRight>
					<Button icon={'save'} color={'primary'} isOutline={true}>
						{isModify ? '수정하기' : '저장하기'}
					</Button>
				</SubHeaderRight>
			</SubHeader>
			<SubHeader className='mt-2'>
				<ScrollspyNav
					items={Object.values(ConsultInfoType)}
					tag={'div'}
					setActiveId={setLocation}
					offset={-200}>
					{consultDetailInfo.map((info) => {
						return (
							<Button
								key={v1()}
								tag='a' // * Required
								to={`#${info.title}`}
								isOutline={false}
								isActive={location === info.title}
								className='bg-primary-hover anchor_menu '
								shadow='none'
								hoverShadow='none'>
								{info.title}
							</Button>
						);
					})}
				</ScrollspyNav>
			</SubHeader>
			<Page>
				{consultDetailInfo.map((type) => (
					<Card key={v1()} id={type.title.toString()} className='scroll-margin' shadow={'none'}>
						{type.element}
					</Card>
				))}

				<div className='position-sticky w-100 bottom-0 left-0 mb-5'>
					<Card>
						<CardHeader className='pb-1 pt-1 mb-0 detail_header'>
							<CardTitle className='mb-0'>이전 상담기록</CardTitle>
						</CardHeader>
						<CardBody className='pt-1 pb-1'>
							<Textarea value={consult?.memo} className='h-25' />
						</CardBody>
					</Card>
					<Card>
						<CardHeader className='pb-1 pt-1 mb-0 detail_header'>
							<CardTitle className='mb-0'>새 상담기록</CardTitle>
						</CardHeader>
						<CardBody className='pt-1 pb-1'>
							<Textarea />
						</CardBody>
					</Card>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ConsultDetail;
