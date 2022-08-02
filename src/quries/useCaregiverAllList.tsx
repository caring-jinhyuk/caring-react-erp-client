import { useQuery } from '@tanstack/react-query';
import { CaregiverControllerService } from '../services/openApi';
import { useRecoilValue } from 'recoil';
import moment from 'moment';

export const useGetCaregiverAllList = () => {
	const result = useQuery(['caregiverAllList'], async () => getCaregiverAllList(), {
		cacheTime: 50000,
		staleTime: 50000,
	});
	return {
		...result,
		contents: result.data,
	};
};

export const getCaregiverAllList = async () => {
	const response = await CaregiverControllerService.getCaregiverAllListUsingGet();
	const giverCount = response.length;
	const statisticsCity: Array<number> = new Array(17).fill(0);
	const cityList: string[] = [
		'경기',
		'서울',
		'부산',
		'인천',
		'경남',
		'대구',
		'경북',
		'충남',
		'대전',
		'광주',
		'전북',
		'울산',
		'충북',
		'전남',
		'강원',
		'제주',
		'세종',
	];
	let todayGiverCount = 0;
	let yesterdayGiverCount = 0;

	for (let i = 0; i < response.length; i++) {
		let create = new Date(response[i].createdAt!);
		if (response[i] != null) {
			for (let city = 0; city < cityList.length; city++) {
				if (response[i].city === cityList[city]) {
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
