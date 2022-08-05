import { useQuery } from '@tanstack/react-query';
import { ConsultControllerService } from '../services/openApi';
import moment from 'moment';

export const useGetConsultAllList = () => {
	const result = useQuery(
		['consultListAll', {}],
		async () => ConsultControllerService.getConsultAllListUsingGet(),
		{
			cacheTime: Infinity,
			staleTime: Infinity,
		},
	);
	return {
		...result,
		contents: result.data,
	};
};

export type CallStatistic = {
	calls: number;
	recallsService: number;
	inflowList: string[];
	cityCall: number[];
	itemCall: number[];
	itemService: number[];
	stateCall: number[];
	cityVisitHopeCall: number[];
	experienceCheckList: number[][];
	cityList: string[];
	stateList: string[];
	whyList: string[];
	choiceReasonCall: number[];
	addInquiryList: string[];
	addInquiryCall: number[];
	counselors: string[];
	counselorsCall: number[];
};
