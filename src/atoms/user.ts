import { atom } from 'recoil';
import { User } from '../services/openApi';

const userState = atom<User | undefined>({
	key: `user`,
	default: undefined,
});

export { userState };
