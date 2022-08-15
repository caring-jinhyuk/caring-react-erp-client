import React from 'react';
import moment from 'moment/moment';
import { Consult } from '../../../../services/openApi';
import Badge from '../../../../components/bootstrap/Badge';
import { v1 } from 'uuid';

import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { consultState } from '../../../../atoms/consult';

interface ConsultTableRowProps {
	consult: Consult;
}

const ConsultTableRow = ({ consult }: ConsultTableRowProps) => {
	const [activeConsult, setActiveConsult] = useRecoilState(consultState);
	const navigate = useNavigate();

	const handleOnClick = () => {
		setActiveConsult({ ...activeConsult, consult });
		navigate('/pages/consultDetail');
	};
	const filteringRecords = () => {
		if (consult.memo) {
			const reg = new RegExp(/^([0-9]{0,2})$/);
			const consultRecords = consult.memo.split('\n\n');
			const filteredRecords = consultRecords.filter((record) => reg.test(record.substring(0, 2)));
			return filteredRecords;
		}
		return [];
	};

	const records = filteringRecords();

	return (
		<>
			<tr onClick={handleOnClick} className='cursor-pointer'>
				<td className='text-center white-space-nowrap'>{consult.state}</td>
				<td className='text-center white-space-nowrap'>
					{moment(consult.lastModifiedDate).format('YYYY-MM-DD')}
				</td>
				<td className='text-center white-space-nowrap'>{consult.phone}</td>
				<td className='text-center white-space-nowrap'>{consult.progress}</td>
				<td className='w-50'>
					{records.map((record) => {
						return (
							<Badge key={v1()} className='ml-1'>
								{record.length ? record.substring(0, 8) : ''}
							</Badge>
						);
					})}
				</td>
			</tr>
		</>
	);
};

export default ConsultTableRow;
