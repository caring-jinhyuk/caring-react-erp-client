import React from 'react';
import Label from '../../../../components/bootstrap/forms/Label';
import Select from '../../../../components/bootstrap/forms/Select';
import { SubHeaderLeft } from '../../../../layout/SubHeader/SubHeader';
import { consultSelectMenus } from '../statics/consultSelectMenus';
import { useRecoilState } from 'recoil';
import { consultState } from '../../../../atoms/consult';
import { UseQueryResult } from '@tanstack/react-query';
import { useGetReservation } from '../../../../quries/consult/useGetReservation';
import Spinner from '../../../../components/bootstrap/Spinner';
import Button from '../../../../components/bootstrap/Button';

const ConsultSelectBar = () => {
	const [filter, setFilter] = useRecoilState(consultState);
	const { data, isFetching }: UseQueryResult<number> = useGetReservation();

	const handleOnClick = () => {
		setFilter({ ...filter, state: '홈페이지 예약' });
	};

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;

		if (event.target.id === '상담유형') {
			setFilter({ ...filter, state: newValue });
		} else {
			setFilter({ ...filter, progress: newValue });
		}
	};

	return (
		<SubHeaderLeft>
			{consultSelectMenus.map((menu) => {
				return (
					<div key={menu.title} className='d-flex flex-column p-3'>
						<Label title={menu.title} isColForLabel={true} isHidden={false}>
							{menu.title}
						</Label>
						<Select
							id={menu.title}
							ariaLabel={menu.title}
							list={menu.list}
							onChange={handleOnChange}
							value={menu.title === '상담유형' ? filter.state : filter.progress}
						/>
					</div>
				);
			})}
			{isFetching ? (
				<Spinner size={10} />
			) : (
				<Button onClick={handleOnClick} color='primary'>
					<span className='h5 white-space-nowrap'>홈페이지 예약 : {data} </span>
				</Button>
			)}
		</SubHeaderLeft>
	);
};

export default ConsultSelectBar;
