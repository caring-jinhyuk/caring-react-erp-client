import { atom } from 'recoil';
import { v1 } from 'uuid';

export enum SignUpValidates {
	DEFAULT,
	PASSWORD,
	PASSWORD_RULES,
	EXISTS,
}

const signUpState = atom({
	key: `${v1()}`,
	default: SignUpValidates.DEFAULT,
});

export { signUpState };
