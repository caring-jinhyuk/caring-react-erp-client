import React, { FC, useState } from 'react';
import { CallData } from '../../../../models/CallData';
import Popovers from '../../../../components/bootstrap/Popovers';
import Button from '../../../../components/bootstrap/Button';
import moment from 'moment';
import { DateRangePicker, RangeKeyDict } from 'react-date-range';

const DownloadStatistics = () => {
	const [selectDate, setSelectDate] = useState({
		selection: {
			startDate: moment().toDate(),
			endDate: moment().toDate(),
			key: 'selection',
		},
	});
	return (
		<>
			<div>
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
						{`${moment(selectDate.selection.startDate).format('MMM Do YY')} - ${moment(
							selectDate.selection.endDate,
						).format('MMM Do YY')}`}
					</Button>
				</Popovers>
			</div>
		</>
	);
};

export default DownloadStatistics;
