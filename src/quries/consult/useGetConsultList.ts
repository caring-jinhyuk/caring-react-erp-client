import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { ConsultControllerService, Page_Consult_ } from '../../services/openApi';
import { ConsultStateTypes } from '../../atoms/consult';

export interface ConsultSearchConfig extends ConsultStateTypes {
	page: number;
	size: number;
}

const useGetConsultList = (config: ConsultSearchConfig): UseQueryResult<Page_Consult_> => {
	const consultData = useQuery(['consult', 'consultList', config], async () => {
		const result = await getConsultList(config);
		return result;
	});
	return consultData;
};

const getConsultList = ({ page, size, state, progress, search }: ConsultSearchConfig) => {
	return ConsultControllerService.getConsultListUsingGet(
		'',
		'통합',
		page - 1,
		progress,
		search,
		size,
		state,
		'',
	);
};

export default useGetConsultList;
