import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Caregiver, CaregiverControllerService } from '../../services/openApi';

export const useGetCaregiver = (phone: string): UseQueryResult<Caregiver> => {
	const caregiverData = useQuery(
		['consult', 'caregiver', phone],
		async () => {
			const result = await CaregiverControllerService.getCaregiverUsingGet(phone);
			return result;
		},
		{
			enabled: phone !== '',
		},
	);
	return caregiverData;
};
