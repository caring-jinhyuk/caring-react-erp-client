import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { ConsultControllerService } from '../../services/openApi';

export const useGetReservation = (): UseQueryResult<number> => {
	const reservationData = useQuery(['consult', 'reservation'], async () => {
		const result = await ConsultControllerService.getHomepageReservationUsingGet('홈페이지 예약');
		return result;
	});
	return reservationData;
};
