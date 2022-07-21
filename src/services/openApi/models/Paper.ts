/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CaringProvider } from './CaringProvider';
import type { CaringRecipient } from './CaringRecipient';
import type { User } from './User';

export type Paper = {
	createdAt?: string;
	data?: any;
	date?: string;
	id?: number;
	provider?: CaringProvider;
	providerId?: number;
	recipient?: CaringRecipient;
	recipientId?: number;
	state?: Paper.state;
	type?: Paper.type;
	updatedAt?: string;
	writer?: User;
};

export namespace Paper {
	export enum state {
		CONFIRM = 'CONFIRM',
		TEMP = 'TEMP',
	}

	export enum type {
		a = '수급자욕구평가',
		b = '낙상위험도',
		c = '욕창위험도',
		KMMSE = 'KMMSE',
		KMMSE2 = 'KMMSE2',
	}
}
