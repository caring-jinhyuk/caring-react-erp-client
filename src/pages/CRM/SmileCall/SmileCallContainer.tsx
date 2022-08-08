import { Smile } from '../../../services/openApi';

export type SmileCallDetailForm = Smile & {
	choiceReasonEtc: string;
	resignationReasonEtc: string;
	advantagesEtc: string;
	disadvantagesEtc: string;
};

export const smileCallDetailInfo = {
	key: 'smileCallDetailInfo',
	default: {} as SmileCallDetailForm,
};
