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
import Button, { ButtonGroup } from '../../../../components/bootstrap/Button';
import moment from 'moment';
import { Calendar as DatePicker } from 'react-date-range';
import ko from 'date-fns/locale/ko';
import { useRecoilState } from 'recoil';
import FamilyServiceStatistics from './FamilyServiceStatistics';
import Select from '../../../../components/bootstrap/forms/Select';
import { CALL_TYPE_SELECT, CallType } from '../statics/StatisticsStatics';
import { statisticsSearchParamAtom } from '../Statistics';
import LocationStatistics from './LocationStatistics';
import ProcessStatistics from './ProcessStatistics';
import InflowStatistics from './InflowStatistics';
import StateStatistics from './StateStatistics';
import WhyStatistics from './WhyStatistics';
import InquiryStatistics from './InquiryStatistics';
import CounselorStatistics from './CounselorStatistics';
import { COUNSELORS } from '../../../../statics/selectValues';

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

	const addDay = () => {
		setSelectDate(moment(selectDate).add(1, 'days').toDate());
	};

	const subtractDay = () => {
		setSelectDate(moment(selectDate).subtract(1, 'days').toDate());
	};

	return (
		<>
			<CardHeader className='bg-transparent'>
				<CardLabel icon='ReceiptLong'>
					<CardTitle tag='h4' className='h5'>
						Daily ??? ??????
					</CardTitle>
					<CardSubTitle tag='h5' className='h6'>
						Reports
					</CardSubTitle>
				</CardLabel>
				<CardActions className='d-flex flex-row'>
					<div>
						<ButtonGroup>
							<Button color='primary' icon={'ArrowLeft'} onClick={subtractDay} />
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
								<Button color='primary'>{moment(selectDate).format('YYYY-MM-DD')}</Button>
							</Popovers>
							<Button color='primary' icon={'ArrowRight'} onClick={addDay} />
						</ButtonGroup>
					</div>
					<div>
						<Select id='searchType' ariaLabel={'callType'} onChange={handleOnChange}>
							{CALL_TYPE_SELECT.map((item, index) => (
								<option key={index} value={item.value}>
									{item.text}
								</option>
							))}
						</Select>
					</div>
					<div>
						<Button onClick={() => changeCallData()} icon={'Search'} color={'primary'}>
							??????
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
										<CardTitle>?????? ???</CardTitle>
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
											<CardTitle>?????? ???</CardTitle>
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
											<CardTitle>??? ???</CardTitle>
										</CardLabel>
										<CardActions>
											<div className='fw-bold fs-5 mb-0'>
												{callStatistic.todayRecall}(
												{callStatistic.todayCall - callStatistic.todayNewCall})
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
										<CardTitle>???????????? ???</CardTitle>
									</CardLabel>
									<CardActions>
										<div className='fw-bold fs-5 mb-0'>{callStatistic.todayStateCall[0]}</div>
									</CardActions>
								</CardHeader>
								<CardBody>
									<div className='row'>
										{COUNSELORS.map((item, index) => (
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
											<CardTitle>?????? ?????????</CardTitle>
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
											<CardTitle>?????? ??? ??????</CardTitle>
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
					<ProcessStatistics callStatistic={callStatistic} />
				</div>
			</div>
			<div className='row'>
				<div className='col-6'>
					<FamilyServiceStatistics callStatistic={callStatistic} />
				</div>
				<div className='col-6'>
					<StateStatistics callStatistic={callStatistic} />
				</div>
			</div>
			<div className='row'>
				<div className='col-6'>
					<InflowStatistics callStatistic={callStatistic} />
				</div>
				<div className='col-6'>
					<LocationStatistics callStatistic={callStatistic} />
				</div>
			</div>
			<Card>
				<CardBody>
					<div className='row'>
						<div className='col-6'>
							<WhyStatistics callStatistic={callStatistic} />
						</div>
						<div className='col-6'>
							<InquiryStatistics callStatistic={callStatistic} />
						</div>
					</div>
				</CardBody>
			</Card>
			<Card>
				<CardBody>
					<CounselorStatistics callStatistic={callStatistic} />
				</CardBody>
			</Card>
		</>
	);
};

export default DailyCallStatistics;
