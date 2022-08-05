import React, { FC, useState } from 'react';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import { CallData } from '../CallData';
import Popovers from '../../../../components/bootstrap/Popovers';
import Button from '../../../../components/bootstrap/Button';
import moment from 'moment';
import { Calendar as DatePicker } from 'react-date-range';
import ko from 'date-fns/locale/ko';
import { statisticsSearchDateAtom } from '../Statistics';
import { useRecoilState } from 'recoil';

interface DailyCallStatisticsProps {
	callStatistic: CallData;
}

const DailyCallStatistics: FC<DailyCallStatisticsProps> = ({ callStatistic }) => {
	const [searchDateAtom, setSearchDateAtom] = useRecoilState(statisticsSearchDateAtom);
	const [selectDate, setSelectDate] = useState<Date>(searchDateAtom);

	const changeCallData = () => {
		setSearchDateAtom(selectDate);
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
				<CardActions>
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
					<Button onClick={() => changeCallData()}>검색</Button>
				</CardActions>
			</CardHeader>
			<div className='row'>
				<div className='col-6'>
					<Card className='scroll-margin'>
						<CardBody>
							<table className='table table-modern table-hover'>
								<thead>
									<tr>
										<th>오늘 콜</th>
										<td>
											{callStatistic.todayPerson}({callStatistic.todayCall})
										</td>
									</tr>
									<tr>
										<th>신규 콜</th>
										<td>{callStatistic.todayNewCall}</td>
									</tr>
									<tr>
										<th>리 콜</th>
										<td>
											{callStatistic.todayRecall}(
											{callStatistic.todayCall - callStatistic.todayNewcall})
										</td>
									</tr>
									<tr>
										<td>유의미한 콜</td>
										<td>{callStatistic.todayStateCall[0]}</td>
									</tr>
									<tr>
										<td>
											{callStatistic.counselors.map((item, index) => (
												<p key={item}>
													{item} {callStatistic.counselorCallDetail[index][1]}
												</p>
											))}
										</td>
									</tr>
									<tr>
										<td>서류 작업중</td>
										<td>{callStatistic.callDocument}</td>
									</tr>
									<tr>
										<td>고민 후 연락</td>
										<td>{callStatistic.todayStateCall[0] - callStatistic.callDocument}</td>
									</tr>
								</thead>
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
										<th>이관</th>
										<th>신규</th>
										<th>모름</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>가족진행중</td>
										<td>{callStatistic.todayStateCall[0]}</td>
										<td>{callStatistic.experienceCheckList[2][0]}</td>
										<td>{callStatistic.experienceCheckList[2][1]}</td>
										<td>{callStatistic.experienceCheckList[2][2]}</td>
									</tr>
									<tr>
										<td>가족진행중(자격증X)</td>
										<td>{callStatistic.todayStateCall[1]}</td>
										<td>{callStatistic.experienceCheckList[4][0]}</td>
										<td>{callStatistic.experienceCheckList[4][1]}</td>
										<td>{callStatistic.experienceCheckList[4][2]}</td>
									</tr>
									<tr>
										<td>가족서비스시작</td>
										<td>{callStatistic.todayStateCall[5]}</td>
										<td>{callStatistic.experienceCheckList[3][0]}</td>
										<td>{callStatistic.experienceCheckList[3][1]}</td>
										<td>{callStatistic.experienceCheckList[3][2]}</td>
									</tr>
									<tr>
										<td>합계</td>
										<td>
											{callStatistic.todayStateCall[0] +
												callStatistic.todayStateCall[1] +
												callStatistic.todayStateCall[5]}
										</td>
										<td>
											{callStatistic.experienceCheckList[2][0] +
												callStatistic.experienceCheckList[3][0] +
												callStatistic.experienceCheckList[4][0]}
										</td>
										<td>
											{callStatistic.experienceCheckList[2][1] +
												callStatistic.experienceCheckList[3][1] +
												callStatistic.experienceCheckList[4][1]}
										</td>
										<td>
											{callStatistic.experienceCheckList[2][2] +
												callStatistic.experienceCheckList[3][2] +
												callStatistic.experienceCheckList[4][2]}
										</td>
									</tr>
								</tbody>
							</table>
						</CardBody>
					</Card>
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
