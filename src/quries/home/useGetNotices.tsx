import { useQuery } from '@tanstack/react-query';
import { NoticeControllerService, Page_Notice_ } from '../../services/openApi';

export const useGetNotices = (page: number, size: number): Page_Notice_ => {
	const { data } = useQuery(['notice', 'list', { page, size }], async () => {
		const result = await NoticeControllerService.getNoticeListUsingGet(false, page - 1, size);
		return result;
	});

	return data ?? { content: [], totalElements: 0 };
};
