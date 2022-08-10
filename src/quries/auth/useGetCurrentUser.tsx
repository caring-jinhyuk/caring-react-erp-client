import { useQuery } from '@tanstack/react-query';
import { User, UserControllerService } from '../../services/openApi';
import { SetterOrUpdater } from 'recoil';

export const useGetCurrentUser = (
	token: string | null,
	user: User | undefined,
	setUser: SetterOrUpdater<User | undefined>,
) =>
	useQuery(['user', token], () => getCurrentUser(token, user), {
		onSuccess: (currentUser: User) => {
			setUser(currentUser);
		},
	});

const getCurrentUser = (token: string | null, user: User | undefined) => {
	if (token && !user) {
		return UserControllerService.getCurrentUserUsingGet();
	}
};
