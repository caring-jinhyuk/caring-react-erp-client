import { useQuery } from '@tanstack/react-query';
import { ConsultControllerService } from '../services/openApi';

export const useGetConsultAllList = () => {
	const result = useQuery(['consultListAll'], async () => getCaregiverAllList(), {
		cacheTime: 50000,
		staleTime: 50000,
	});
	return {
		...result,
		contents: result.data,
	};
};

export const getCaregiverAllList = async () => {
	const response = await ConsultControllerService.getConsultAllListUsingGet();
	return response;
};
