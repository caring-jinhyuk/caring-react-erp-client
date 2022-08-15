import React, { useState } from 'react';
import { SubHeaderRight } from '../../../../layout/SubHeader/SubHeader';
import Input from '../../../../components/bootstrap/forms/Input';
import Button from '../../../../components/bootstrap/Button';
import { useRecoilState } from 'recoil';
import { consultState } from '../../../../atoms/consult';

const ConsultSearchBar = () => {
	const [filter, setFilter] = useRecoilState(consultState);
	const [search, setSearch] = useState('');

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
		if (event.target.value === '') {
			setFilter({ ...filter, search });
		}
	};

	const handleOnClick = () => {
		setFilter({ ...filter, search });
	};

	const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') setFilter({ ...filter, search });
	};

	return (
		<SubHeaderRight>
			<Input onChange={handleOnChange} onKeyDown={handleOnKeyDown} value={search} />
			<Button onClick={handleOnClick} color={'primary'} className='white-space-nowrap'>
				검색
			</Button>
		</SubHeaderRight>
	);
};

export default ConsultSearchBar;
