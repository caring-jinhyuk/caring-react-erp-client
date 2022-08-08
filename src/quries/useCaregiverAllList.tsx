import { useQuery } from '@tanstack/react-query';
import { CaregiverControllerService } from '../services/openApi';
import moment from 'moment';
import { CITY } from '../constants/address';

export const useGetCaregiverAllList = () => {
	const result = useQuery(['caregiverAllList'], async () => getCaregiverAllList(), {
		cacheTime: 50000,
		staleTime: 50000,
	});
	return result;
};

export const getCaregiverAllList = async () => {
	const response = await CaregiverControllerService.getCaregiverAllListUsingGet();
	const giverCount = response.length;
	const statisticsCity: Array<number> = new Array(17).fill(0);
	let todayGiverCount = 0;
	let yesterdayGiverCount = 0;

	for (let i = 0; i < response.length; i++) {
		let create = new Date(response[i].createdAt!);
		if (response[i] != null) {
			for (let city = 0; city < CITY.length; city++) {
				if (response[i].city === CITY[city]) {
					statisticsCity[city]++;
					break;
				}
			}
			if (create.toISOString().substring(0, 10) === new Date().toISOString().substring(0, 10)) {
				todayGiverCount++;
			}
			if (
				create.toISOString().substring(0, 10) === moment().subtract(1, 'days').format('YYYY-MM-DD')
			) {
				yesterdayGiverCount++;
			}
		}
	}
	return {
		todayGiverCount: todayGiverCount,
		yesterdayGiverCount: yesterdayGiverCount,
		giverCount: giverCount,
		statistics: statisticsCity,
	};
};
