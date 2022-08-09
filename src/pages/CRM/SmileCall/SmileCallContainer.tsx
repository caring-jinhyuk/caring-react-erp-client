import { Smile } from '../../../services/openApi';

export type SmileCallDetailForm = Smile & {
	choiceReasonEtc: string;
	resignationReasonEtc: string;
	advantagesEtc: string;
	disadvantagesEtc: string;
};
