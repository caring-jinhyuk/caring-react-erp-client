import React, { FC, useRef, useState } from 'react';
import { CallStatistic, useGetConsultAllList } from '../../../../quries/useGetConsultListAll';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';
import ScrollspyNav from '../../../../components/bootstrap/ScrollspyNav';
import SubHeader from '../../../../layout/SubHeader/SubHeader';
import Popovers from '../../../../components/bootstrap/Popovers';
import { Calendar as DatePicker, DateRangePicker } from 'react-date-range';
import moment from 'moment';
import { QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import CallStaticsDetail from './CallStaticsDetail';
import { Caregiver, CaregiverControllerService } from '../../../../services/openApi';
import showNotification from '../../../../components/extras/showNotification';
import { statisticsSearchParam } from '../Statistics';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import ko from 'date-fns/locale/ko';

export enum StatisticType {
	INFLOW = '유입매체',
	LOCATION = '지역',
	STATUS = '상태',
	CAUSE = '선택이유',
	HOPE = '가산희망',
	MANAGER = '매니저',
}

const CallStatistics = () => {
	const setStatisticsSearchParam = useSetRecoilState(statisticsSearchParam);
	const [calendarState, setCalendarState] = useState({
		selection: {
			startDate: moment().startOf('week').add('-1', 'week').toDate(),
			endDate: moment().toDate(),
			key: 'selection',
		},
	});

	const queryClient = useQueryClient();

	const search = async () => {
		try {
			await queryClient.invalidateQueries([
				'consultListAll',
				moment(calendarState.selection.startDate),
				moment(calendarState.selection.endDate),
			]);
			setStatisticsSearchParam({
				from: moment(calendarState.selection.startDate).toDate(),
				to: moment(calendarState.selection.endDate).toDate(),
			});
		} catch (e) {}
	};

	return (
		<>
			<Card>
				<CardHeader>
					<CardLabel icon='ReceiptLong'>
						<CardTitle tag='h4' className='h5'>
							콜 통계
						</CardTitle>
						<CardSubTitle tag='h5' className='h6'>
							Reports
						</CardSubTitle>
					</CardLabel>
					<CardActions>
						<Popovers
							placement='bottom-end'
							className='mw-100 overflow-hidden'
							data-tour='date-range-menu'
							bodyClassName='p-0'
							trigger='click'
							desc={
								<DateRangePicker
									onChange={(item) => setCalendarState({ ...calendarState, ...item })}
									moveRangeOnFirstSelection={false}
									retainEndDateOnFirstSelection={false}
									months={2}
									ranges={[calendarState.selection]}
									direction='horizontal'
									rangeColors={[String('#6c5dd3'), String('#ffa2c0'), String('#46bcaa')]}
									locale={ko}
								/>
							}>
							<Button color='dark' isLight data-tour='date-range'>
								{`${moment(calendarState.selection.startDate).format('YYYY.MM.DD')} - ${moment(
									calendarState.selection.endDate,
								).format('YYYY.MM.DD')}`}
							</Button>
						</Popovers>
						<Button color='primary' onClick={() => search()}>
							검색
						</Button>
					</CardActions>
				</CardHeader>
			</Card>
		</>
	);
};

export default CallStatistics;
