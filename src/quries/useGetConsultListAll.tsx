import { useQuery } from '@tanstack/react-query';
import { ConsultControllerService } from '../services/openApi';

export const useGetConsultAllList = () => {
	const result = useQuery(
		['consultListAll'],
		async () => ConsultControllerService.getConsultAllListUsingGet(),
		{
			cacheTime: Infinity,
			staleTime: Infinity,
		},
	);
	return {
		...result,
	};
};
