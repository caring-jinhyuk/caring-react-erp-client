import React, { FC, useCallback, useState } from 'react';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import { CallData } from '../../../../models/CallData';
import Popovers from '../../../../components/bootstrap/Popovers';
import Button from '../../../../components/bootstrap/Button';
import moment from 'moment';
import { Calendar as DatePicker } from 'react-date-range';
import ko from 'date-fns/locale/ko';
import { useRecoilState } from 'recoil';
import FamilyServiceStatistics from './FamilyServiceStatistics';
import Select from '../../../../components/bootstrap/forms/Select';
import { CALL_TYPE_SELECT, CallType } from '../constants/StatisticsConstants';
import { statisticsSearchParamAtom } from '../Statistics';

interface DailyCallStatisticsProps {
	callStatistic: CallData;
}

const DailyCallStatistics: FC<DailyCallStatisticsProps> = ({ callStatistic }) => {
	const [searchParamAtom, setSearchParamAtom] = useRecoilState(statisticsSearchParamAtom);
	const [selectDate, setSelectDate] = useState<Date>(searchParamAtom!.date);
	const [searchType, setSearchType] = useState<CallType>(searchParamAtom.type);

	const handleOnChange = useCallback((e: any) => {
		switch (e.target.id) {
			case 'searchType':
				setSearchType(e.target.value);
				break;
			default:
				break;
		}
	}, []);

	const changeCallData = () => {
		setSearchParamAtom({ date: selectDate, type: searchType });
	};

	return (
		<>
			<CardHeader className='bg-transparent'>
				<CardLabel icon='ReceiptLong'>
					<CardTitle tag='h4' className='h5'>
						Daily 콜 통계
					</CardTitle>
					<CardSubTitle tag='h5' className='h6'>
						Reports
					</CardSubTitle>
				</CardLabel>
				<CardActions className='row'>
					<div className='col-4'>
						<Popovers
							desc={
								<DatePicker
									onChange={(item) => setSelectDate(item!)}
									date={selectDate}
									locale={ko}
									color={'#6c5dd3'}
								/>
							}
							placement='bottom-end'
							className='mw-100'
							trigger='click'>
							<Button>{moment(selectDate).format('YYYY-MM-DD')}</Button>
						</Popovers>
					</div>
					<div className='col-5'>
						<Select id='searchType' ariaLabel={'callType'} onChange={handleOnChange}>
							{CALL_TYPE_SELECT.map((item, index) => (
								<option key={index} value={item.value}>
									{item.text}
								</option>
							))}
						</Select>
					</div>
					<div className='col-3'>
						<Button onClick={() => changeCallData()} icon={'Search'} color={'primary'}>
							검색
						</Button>
					</div>
				</CardActions>
			</CardHeader>
			<div className='row'>
				<div className='col-6'>
					<Card className='scroll-margin p-4'>
						<div className='col-auto '>
							<Card shadow='sm'>
								<CardHeader className='bg-transparent'>
									<CardLabel className='h6'>
										<CardTitle>오늘 콜</CardTitle>
									</CardLabel>
									<CardActions>
										<div className='fw-bold fs-5 mb-0'>
											{callStatistic.todayPerson}({callStatistic.todayCall})
										</div>
									</CardActions>
								</CardHeader>
							</Card>
						</div>
						<div className='row'>
							<div className='col-6'>
								<Card shadow='sm'>
									<CardHeader className='bg-transparent'>
										<CardLabel className='h6'>
											<CardTitle>신규 콜</CardTitle>
										</CardLabel>
										<CardActions>
											<div className='fw-bold fs-5 mb-0'>{callStatistic.todayNewCall}</div>
										</CardActions>
									</CardHeader>
								</Card>
							</div>
							<div className='col-6'>
								<Card shadow='sm'>
									<CardHeader className='bg-transparent'>
										<CardLabel className='h6'>
											<CardTitle>리 콜</CardTitle>
										</CardLabel>
										<CardActions>
											<div className='fw-bold fs-5 mb-0'>
												{callStatistic.todayRecall}(
												{callStatistic.todayCall - callStatistic.todayNewcall})
											</div>
										</CardActions>
									</CardHeader>
								</Card>
							</div>
						</div>
						<div className='row'>
							<Card shadow='sm'>
								<CardHeader className='bg-transparent'>
									<CardLabel className='h6'>
										<CardTitle>유의미한 콜</CardTitle>
									</CardLabel>
									<CardActions>
										<div className='fw-bold fs-5 mb-0'>{callStatistic.todayStateCall[0]}</div>
									</CardActions>
								</CardHeader>
								<CardBody>
									<div className='row'>
										{callStatistic.counselors.map((item, index) => (
											<div className='col-md-3' key={item}>
												{item} {callStatistic.counselorCallDetail[index][1]}
											</div>
										))}
									</div>
								</CardBody>
							</Card>
						</div>
						<div className='row'>
							<div className='col-6'>
								<Card shadow='sm'>
									<CardHeader className='bg-transparent'>
										<CardLabel className='h6'>
											<CardTitle>서류 작업중</CardTitle>
										</CardLabel>
										<CardActions>
											<div className='fw-bold fs-5 mb-0'>{callStatistic.callDocument}</div>
										</CardActions>
									</CardHeader>
								</Card>
							</div>
							<div className='col-6'>
								<Card shadow='sm'>
									<CardHeader className='bg-transparent'>
										<CardLabel className='h6'>
											<CardTitle>고민 후 연락</CardTitle>
										</CardLabel>
										<CardActions>
											<div className='fw-bold fs-5 mb-0'>
												{callStatistic.todayStateCall[0] - callStatistic.callDocument}
											</div>
										</CardActions>
									</CardHeader>
								</Card>
							</div>
						</div>
					</Card>
				</div>
				<div className='col-6'>
					<FamilyServiceStatistics callStatistic={callStatistic} />
				</div>
			</div>
			<div className='row'>
				<div className='col-6'>
					<Card>
						<CardBody>
							<table className='table table-modern table-hover'>
								<thead>
									<tr>
										<th>고객 상태</th>
										<th>call</th>
									</tr>
								</thead>
								<tbody>
									{callStatistic.progressList.map((item, index) => (
										<tr key={item}>
											<td>{item}</td>
											<td>{callStatistic.progressCheckList[1][index]}</td>
										</tr>
									))}
								</tbody>
							</table>
						</CardBody>
					</Card>
				</div>
				<div className='col-6'>
					<Card>
						<CardBody>
							<table className='table table-modern table-hover'>
								<thead>
									<tr>
										<th>상태</th>
										<th>call</th>
									</tr>
								</thead>
								<tbody>
									{callStatistic.stateList.map((item, index) => (
										<tr key={item}>
											<td>{item}</td>
											<td>{callStatistic.todayStateCall[index]}</td>
										</tr>
									))}
								</tbody>
							</table>
						</CardBody>
					</Card>
				</div>
			</div>

			<Card>
				<CardBody>
					<table className='table table-modern table-hover'>
						<thead>
							<tr>
								<th>유입매체</th>
								<th>call</th>
							</tr>
						</thead>
						<tbody>
							{callStatistic.inflowList.map((item, index) => (
								<tr key={item}>
									<td>{item}</td>
									<td>{callStatistic.todayStateCall[index]}</td>
								</tr>
							))}
						</tbody>
					</table>
				</CardBody>
			</Card>
			<Card>
				<CardBody>
					<table className='table table-modern table-hover'>
						<thead>
							<tr>
								<th>지역</th>
								<th>call</th>
							</tr>
						</thead>
						<tbody>
							{callStatistic.cityList.map((item, index) => (
								<tr key={item}>
									<td>{item}</td>
									<td>{callStatistic.todayCityCall[index]}</td>
								</tr>
							))}
							<tr>
								<td>모름</td>
								<td>{callStatistic.todayCityCall[17]}</td>
							</tr>
						</tbody>
					</table>
				</CardBody>
			</Card>
			<Card>
				<CardBody>
					<table className='table table-modern table-hover'>
						<thead>
							<tr>
								<th>선택이유</th>
								<th>call</th>
							</tr>
						</thead>
						<tbody>
							{callStatistic.whyList.map((item, index) => (
								<tr key={item}>
									<td>{item}</td>
									<td>{callStatistic.todayChoiceReasonCall[index]}</td>
								</tr>
							))}
							<thead>
								<tr>
									<th>타급여</th>
									<th>call</th>
								</tr>
							</thead>
							{callStatistic.addInquiryList.map((item, index) => (
								<tr key={item}>
									<td>{item}</td>
									<td>{callStatistic.todayAddInquiryCall[index]}</td>
								</tr>
							))}
						</tbody>
					</table>
				</CardBody>
			</Card>
		</>
	);
};

export default DailyCallStatistics;
