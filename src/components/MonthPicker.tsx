import React, { Dispatch, FC, SetStateAction } from 'react';
import ko from 'date-fns/locale/ko';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Input from './bootstrap/forms/Input';
/**
 * 연도/월 정보를 가져오는 피커
 */
interface IMonthPicker {
	month?: Date;
	setMonth: Dispatch<SetStateAction<Date>>;
}

const MonthPicker: FC<IMonthPicker> = ({ month, setMonth }) => {
	registerLocale('ko', ko);
	return (
		<>
			<DatePicker
				dateFormat='yyyy/M'
				selected={month}
				onSelect={(date) => setMonth(date)}
				onChange={(date) => setMonth(date!)}
				customInput={<Input />}
				locale='ko'
				showMonthYearPicker
			/>
		</>
	);
};

export default MonthPicker;
