import { useQuery } from '@tanstack/react-query';
import { CaregiverControllerService } from '../services/openApi';
import { useRecoilValue } from 'recoil';

export const useGetCaregiverList = (
	keyword: string,
	search: string,
	page: number,
	size: number,
) => {
	const result = useQuery(
		['caregiverList', { keyword, search, page, size }],
		() => getCaregiverList(keyword, search, page, size),
		{
			cacheTime: 0,
		},
	);
	return {
		...result,
		contents: result.data,
	};
};

export const getCaregiverList = async (
	keyword: string,
	search: string,
	page: number,
	size: number,
) => {
	const response = await CaregiverControllerService.getCaregiverListUsingGet(
		keyword,
		page - 1,
		search,
		size,
	);
	return response;
};
