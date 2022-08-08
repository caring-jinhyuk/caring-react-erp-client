import React, { FC, useCallback, useEffect, useState } from 'react';
import FormGroup from './bootstrap/forms/FormGroup';
import Input from './bootstrap/forms/Input';
import moment from 'moment';
import InputGroup, { InputGroupText } from './bootstrap/forms/InputGroup';
import Label from './bootstrap/forms/Label';

type BirthYearInputProps = {
	birthYearId: string;
	birthYearValue?: number;
	onChange?(...args: unknown[]): unknown;
};

const BirthYearInput: FC<BirthYearInputProps> = ({ birthYearId, birthYearValue, onChange }) => {
	const [age, setAge] = useState<number>(0);

	useEffect(() => {
		if (birthYearValue !== undefined) {
			setAge(getAge(birthYearValue.toString()));
		}
	}, [birthYearValue]);

	const handleOnChange = useCallback((e: any) => {
		setAge(getAge(e.target.value));
	}, []);

	const getAge = (birthDate: string) => {
		if (birthDate.length !== 4) return 0;
		const birthDateFormat = moment(birthDate).format('YYYYMMDD');
		return moment().diff(birthDateFormat, 'years');
	};

	return (
		<>
			<div className='row'>
				<div className='col-10'>
					<FormGroup>
						<Label>생년월일</Label>
						<InputGroup>
							<Input
								id={birthYearId}
								type='number'
								value={birthYearValue}
								onChange={(e) => {
									handleOnChange(e);
									if (onChange) {
										onChange(e);
									}
								}}
							/>
							{age > 0 ? <InputGroupText>{age}세</InputGroupText> : <div></div>}
						</InputGroup>
					</FormGroup>
				</div>
			</div>
		</>
	);
};

export default BirthYearInput;
