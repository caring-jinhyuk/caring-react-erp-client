import React, { FC, useState } from 'react';
import Popovers from '../../../../components/bootstrap/Popovers';
import Button from '../../../../components/bootstrap/Button';
import moment from 'moment';
import { DateRangePicker } from 'react-date-range';
import { Consult, ConsultControllerService } from '../../../../services/openApi';
import { downloadCsv } from '../../../../utils/XlsxUtils';

const DownloadStatistics = () => {
	const [selectDate, setSelectDate] = useState({
		selection: {
			startDate: moment().toDate(),
			endDate: moment().toDate(),
			key: 'selection',
		},
	});

	const callColumns = [
		{ name: '상담유형', value: 'state' },
		{ type: 'date', name: '첫상담', value: 'createdAt' },
		{ type: 'date', name: '최근상담', value: 'lastModifiedDate' },
		{ name: '고객상태', value: 'progress' },
		{ name: '시/도', value: 'city' },
		{ name: '시/군/구', value: 'hole' },
		{ name: '발신자 연락처', value: 'phone' },
		{ name: '보조 연락처', value: 'phone2' },
		{ name: '보호자(관계)', value: 'give' },
		{ name: '보호자 성함', value: 'giveName' },
		{ name: '수급자(관계)', value: 'take' },
		{ name: '수급자 성함', value: 'takeName' },
		{ name: '장기요양 등급', value: 'level' },
		{ name: '가족요양 시간', value: 'minute' },
		{ name: '유입경로', value: 'come' },
		{ name: '선호이유', value: 'why' },
		{ type: 'textarea', name: '진행상황', value: 'now' },
		{ type: 'textarea', name: '상담내용', value: 'memo' },
		{ name: '신규/이관', value: 'experience' },
		{ name: '담당자', value: 'manager' },
		{ type: 'date', name: '시작날', value: 'start' },
		{ type: 'date', name: '계약일', value: 'end' },
	];

	const downloadCallAsCsv = async () => {
		ConsultControllerService.getConsultAllListUsingGet(
			moment(selectDate.selection.startDate).format('YYYY-MM-DD'),
			moment(selectDate.selection.endDate).add('1', 'd').format('YYYY-MM-DD'),
		)
			.then((item) => {
				download(
					item,
					moment(selectDate.selection.startDate).format('YYYY-MM-DD'),
					moment(selectDate.selection.endDate).format('YYYY-MM-DD'),
				);
			})
			.catch((error) => {});
	};

	function download(consults: Consult[], from: string, to: string) {
		const rows = [callColumns.map((it) => it.name)];
		consults.forEach((consult) => {
			const row: any = [];
			callColumns.forEach((c) => {
				row.push(columnValue(consult, c));
			});
			rows.push(row);
		});
		downloadCsv(rows, from + '~' + to + '_콜 리스트_' + moment().toDate() + '.csv');
	}

	function columnValue(item: any, c: any) {
		let d = item[c.value];
		if (c.type === 'date') {
			try {
				const date = new Date(d);
				return date.toLocaleString();
			} catch (e) {}
		} else if (c.type === 'address') {
			return `${d.zipCode} ${replace(d.address)} ${replace(d.addressDetail)}`;
		} else {
			const path = c.value;
			if (!path) {
				return;
			}
			let value = item;
			path.split('.').forEach((it: string | number) => {
				if (!value) {
					return;
				}
				value = value[it];
			});
			return replace(value);
		}
	}

	function replace(value: string) {
		return value && value.replace ? value.replace(/,/g, '|').replace(/\n/g, '|') : value;
	}

	return (
		<>
			<div className='d-flex flex-row justify-content-end pe-4'>
				<div className='align-self-center'>
					<h6>데이터 다운로드</h6>
				</div>
				<div className='ms-2'>
					<Popovers
						placement='bottom-end'
						className='mw-100 overflow-hidden'
						data-tour='date-range-menu'
						bodyClassName='p-0'
						trigger='click'
						desc={
							<DateRangePicker
								onChange={(item) => setSelectDate({ ...selectDate, ...item })}
								// showSelectionPreview
								moveRangeOnFirstSelection={false}
								retainEndDateOnFirstSelection={false}
								ranges={[selectDate.selection]}
								months={2}
								direction='horizontal'
								rangeColors={[
									String(process.env.REACT_APP_PRIMARY_COLOR),
									String(process.env.REACT_APP_SECONDARY_COLOR),
									String(process.env.REACT_APP_SUCCESS_COLOR),
								]}
							/>
						}>
						<Button color='dark' isLight data-tour='date-range'>
							{`${moment(selectDate.selection.startDate).format('YYYY-MM-DD')} ~ ${moment(
								selectDate.selection.endDate,
							).format('YYYY-MM-DD')}`}
						</Button>
					</Popovers>
				</div>
				<div className='ms-2'>
					<Button icon={'Download'} color='primary' onClick={downloadCallAsCsv}>
						다운로드
					</Button>
				</div>
			</div>
		</>
	);
};

export default DownloadStatistics;
