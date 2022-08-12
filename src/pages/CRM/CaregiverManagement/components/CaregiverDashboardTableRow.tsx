import React, { FC } from 'react';
import { CaregiverDashboardData } from '../../../../models/CaregiverDashboardData';
import { numberFormat, percent } from '../../../../helpers/helpers';
import { CITY } from '../../../../statics/address';

type CaregiverDashboardTableRowProps = {
	text: string;
	totalCaregiverNationwideCity: number[];
	totalCaregiverCount: number;
	data: CaregiverDashboardData;
};

const CaregiverDashboardTableRow: FC<CaregiverDashboardTableRowProps> = ({
	text,
	totalCaregiverNationwideCity,
	totalCaregiverCount,
	data,
}) => {
	const index = CITY.indexOf(text);

	return (
		<>
			<tr>
				<td>{text}</td>
				<td>
					{numberFormat(totalCaregiverNationwideCity[index])}(
					{percent(totalCaregiverNationwideCity[index], totalCaregiverCount)}
					%) ({percent(data.statistics[index], totalCaregiverNationwideCity[index])}
					%) 확보
				</td>
				<td>
					{numberFormat(data.statistics[index])}({percent(data.statistics[index], data.giverCount)}
					%)
				</td>
			</tr>
		</>
	);
};

export default CaregiverDashboardTableRow;
