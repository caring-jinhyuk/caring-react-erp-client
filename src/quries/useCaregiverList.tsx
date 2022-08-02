import { useQuery } from '@tanstack/react-query';
import { CaregiverControllerService } from '../services/openApi';
import { useRecoilValue } from 'recoil';

export const useGetCaregiverList = (keyword: string, search: string) => {
	const result = useQuery(
		['caregiverList', { keyword, search }],
		() => getCaregiverList(keyword, search),
		{
			cacheTime: 0,
		},
	);
	return {
		...result,
		contents: result.data,
	};
};

export const getCaregiverList = async (keyword: string, search: string) => {
	const res = await CaregiverControllerService.getCaregiverListUsingGet(keyword, 0, search, 10);
	return res.content;
};
