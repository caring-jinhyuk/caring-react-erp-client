import { atom } from 'recoil';
import { v1 } from 'uuid';

export enum SignInValidates {
	DEFAULT,
	PASSWORD,
	NON_ACCOUNT,
}

const signInState = atom({
	key: `${v1}`,
	default: SignInValidates.DEFAULT,
});

export { signInState };
