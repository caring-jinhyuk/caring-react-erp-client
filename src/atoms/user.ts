import { atom } from 'recoil';
import { v1 } from 'uuid';
import { User } from '../services/openApi';

const userState = atom({
	key: `${v1()}`,
	default: {} as User,
});

export { userState };
