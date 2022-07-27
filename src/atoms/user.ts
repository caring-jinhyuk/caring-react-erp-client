import { atom } from 'recoil';
import { v1 } from 'uuid';

const userState = atom({
	key: `${v1()}`,
	default: {},
});

export { userState };
