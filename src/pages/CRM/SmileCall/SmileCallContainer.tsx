import { Smile } from '../../../services/openApi';

export type SmileCallDetailForm = Smile & {
	resignationReasonEtc: string;
};

export const smileCallDetailInfo = {
	key: 'smileCallDetailInfo',
	default: {} as SmileCallDetailForm,
};
