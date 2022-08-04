import { ApiError } from '../services/openApi';
import showNotification from '../components/extras/showNotification';

export const errorHandler = (error: ApiError) => {
	if (500 <= error.status) {
		showNotification(
			'운영서버 에러',
			'현재 운영서버에 문제가 있습니다. 관리자에게 문의하세요',
			'Danger',
		);
	} else {
		showNotification('잘못된 요청입니다.', '요청 값을 확인해주세요.', 'Danger');
	}
};
