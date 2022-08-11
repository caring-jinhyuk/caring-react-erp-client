import { Consult, Synthesis } from '../services/openApi';
import moment from 'moment';
import { CallType } from '../pages/CRM/Statistics/constants/StatisticsConstants';
import { CITY } from '../constants/address';
import {
	ADD_INQUIRY_LIST,
	COUNSELORS,
	INFLOW_LIST,
	PROGRESS_LIST,
	STATE_LIST,
	WHY_LIST,
} from '../constants/selectValues';

export class CallData {
	private readonly response: Array<Consult>;

	calls = 0;

	recalls = 0;

	recallsService = 0;

	choiceReasonEtc = '';

	addInquiryEtc = '';

	create: string = moment().format('YY-MM-DD');

	searchDate: string = moment().format('YY-MM-DD');
	searchType: CallType;

	cityCall: number[] = Array.from({ length: CITY.length }, () => 0);

	itemCall: Array<number> = new Array(INFLOW_LIST.length).fill(0);

	itemService: Array<number> = new Array(INFLOW_LIST.length).fill(0);

	stateCall: number[] = Array.from({ length: STATE_LIST.length }, () => 0);

	cityVisitHopeCall: number[] = Array.from({ length: CITY.length }, () => 0);

	experienceCheckList: number[][] = Array(5)
		.fill(0)
		.map(() => Array(3).fill(0));

	progressCheckList: number[][] = Array(2)
		.fill(0)
		.map(() => Array(PROGRESS_LIST.length + 1).fill(0));

	choiceReasonCall: number[] = Array.from({ length: WHY_LIST.length }, () => 0);

	addInquiryCall = Array.from({ length: ADD_INQUIRY_LIST.length }, () => 0);

	counselorsCall = Array.from({ length: COUNSELORS.length }, () => 0);

	todayCallClick: boolean[] = [true, false, false];

	todayPerson: number = 0;

	todayCall: number = 0;

	todayNewCall: number = 0;

	todayRecall: number = 0;

	callDocument: number = 0;

	todayCityCall: number[] = Array.from({ length: 18 }, () => 0);

	counselorCallDetail: number[][] = Array(COUNSELORS.length)
		.fill(0)
		.map(() => Array(7).fill(0));

	todayNewcall: number = 0;

	todayCounselorCallList: number[][] = Array(COUNSELORS.length)
		.fill(0)
		.map(() => Array(2).fill(0));

	todayItemCall: number[] = Array.from({ length: INFLOW_LIST.length }, () => 0);

	todayStateCall: number[] = Array.from({ length: STATE_LIST.length }, () => 0);

	stateComeList: number[][] = Array(this.todayStateCall.length)
		.fill(0)
		.map(() => Array(INFLOW_LIST.length).fill(0));

	comeStateList: number[][] = Array(INFLOW_LIST.length)
		.fill(0)
		.map(() => Array(this.todayStateCall.length).fill(0));

	todayChoiceReasonEtc: string = '';

	todayAddInquiryEtc: string = '';

	todayAddInquiryCall: number[] = Array.from({ length: ADD_INQUIRY_LIST.length }, () => 0);

	todayChoiceReasonCall: number[] = Array.from({ length: WHY_LIST.length }, () => 0);

	counselorProgressDetail: number[] = Array.from({ length: COUNSELORS.length }, () => 0);

	constructor(consults: Array<Consult>, searchDate: Date, searchType: CallType) {
		this.response = consults;
		this.searchDate = moment(searchDate).format('YY-MM-DD');
		this.searchType = searchType;
		this.calculateCallData();
	}

	calculateCallData() {
		for (let i = 0; i < this.response.length; i++) {
			if (this.response[i] != null) {
				this.calls++;

				switch (this.response[i].come) {
					case INFLOW_LIST[0]:
						this.itemCall[0]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[0]++;
						}
						break;
					case INFLOW_LIST[1]:
						this.itemCall[1]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[1]++;
						}
						break;
					case INFLOW_LIST[2]:
						this.itemCall[2]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[2]++;
						}
						break;
					case INFLOW_LIST[3]:
						this.itemCall[3]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[3]++;
						}
						break;
					case INFLOW_LIST[4]:
						this.itemCall[4]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[4]++;
						}
						break;
					case INFLOW_LIST[5]:
						this.itemCall[5]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[5]++;
						}
						break;
					case INFLOW_LIST[6]:
						this.itemCall[6]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[6]++;
						}
						break;
					case INFLOW_LIST[7]:
						this.itemCall[7]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[7]++;
						}
						break;
					case INFLOW_LIST[8]:
						this.itemCall[8]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[8]++;
						}
						break;
					case INFLOW_LIST[9]:
						this.itemCall[9]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[9]++;
						}
						break;
					case INFLOW_LIST[10]:
						this.itemCall[10]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[10]++;
						}
						break;
					case INFLOW_LIST[11]:
						this.itemCall[11]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[11]++;
						}
						break;
					case INFLOW_LIST[12]:
						this.itemCall[12]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[12]++;
						}
						break;
					case INFLOW_LIST[13]:
						this.itemCall[13]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[13]++;
						}
						break;
					default:
						this.itemCall[14]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[14]++;
						}
						break;
				}

				for (let y = 0; y < this.cityCall.length; y++) {
					if (this.response[i].city === CITY[y]) {
						this.cityCall[y]++;
						if (this.response[i].visitHope === 'O') {
							this.cityVisitHopeCall[y]++;
						}
						break;
					} else if (y === this.cityCall.length - 1) {
						this.cityCall[y]++;
					}
				}

				for (let count = 0; count < STATE_LIST.length; count++) {
					if (this.response[i].state === STATE_LIST[count]) {
						this.stateCall[count]++;
						if (count === 0) {
							if (
								this.response[i].memo?.includes('가족요양중') ||
								this.response[i].memo?.includes('가족 요양중') ||
								this.response[i].memo?.includes('가족요양 중') ||
								this.response[i].memo?.includes('가족 요양 중') ||
								this.response[i].memo?.includes('이관') ||
								this.response[i].experience === '이관'
							) {
								this.experienceCheckList[0][0]++;
							} else if (
								this.response[i].memo?.includes('처음') ||
								this.response[i].memo?.includes('신규') ||
								this.response[i].experience === '신규'
							) {
								this.experienceCheckList[0][1]++;
							} else {
								this.experienceCheckList[0][2]++;
							}
						} else if (count === 5) {
							if (
								this.response[i].memo?.includes('가족요양중') ||
								this.response[i].memo?.includes('가족 요양중') ||
								this.response[i].memo?.includes('가족요양 중') ||
								this.response[i].memo?.includes('가족 요양 중') ||
								this.response[i].memo?.includes('이관') ||
								this.response[i].experience === '이관'
							) {
								this.experienceCheckList[1][0]++;
							} else if (
								this.response[i].memo?.includes('처음') ||
								this.response[i].memo?.includes('신규') ||
								this.response[i].experience === '신규'
							) {
								this.experienceCheckList[1][1]++;
							} else {
								this.experienceCheckList[1][2]++;
							}
						}
						break;
					}
				}

				if (this.response[i].progress !== '' && this.response[i].progress != null) {
					for (let count = 0; count < PROGRESS_LIST.length; count++) {
						if (this.response[i].progress === PROGRESS_LIST[count]) {
							this.progressCheckList[0][count]++;
						}
					}
				} else if (this.response[i].progress === '') {
					this.progressCheckList[0][PROGRESS_LIST.length]++;
				}

				if (this.response[i].why !== '' && this.response[i].why != null) {
					for (let count = 0; count < WHY_LIST.length; count++) {
						if (this.response[i].why?.includes(WHY_LIST[count])) {
							this.choiceReasonCall[count]++;
						}
					}
					this.response[i].why
						?.split(',')
						.filter((x) => !WHY_LIST.includes(x))
						.forEach((item) => {
							this.choiceReasonCall[WHY_LIST.length - 1]++;
							this.choiceReasonEtc += item + ', ';
						});
				}

				if (this.response[i].addInquiry !== '' && this.response[i].addInquiry != null) {
					for (let count = 0; count < ADD_INQUIRY_LIST.length; count++) {
						if (this.response[i].addInquiry?.includes(ADD_INQUIRY_LIST[count])) {
							this.addInquiryCall[count]++;
						}
					}
					this.response[i].addInquiry
						?.split(',')
						.filter((x) => !ADD_INQUIRY_LIST.includes(x))
						.forEach((item) => {
							this.addInquiryCall[ADD_INQUIRY_LIST.length - 1]++;
							this.addInquiryEtc += item + ', ';
						});
				}

				if (this.response[i].first != null && this.response[i].first !== '') {
					for (let count = 0; count < COUNSELORS.length; count++) {
						if (this.response[i].first === COUNSELORS[count]) {
							this.counselorsCall[count]++;
							break;
						}
					}
				}

				if (this.response[i].memo != null && this.response[i].memo !== '') {
					for (let count = 0; count < COUNSELORS.length; count++) {
						let counselor = new RegExp(COUNSELORS[count], 'g');
						if (this.response[i].memo?.search(COUNSELORS[count]) !== -1) {
							this.counselorsCall[count] += (this.response[i].memo?.match(counselor) || []).length;
							this.recalls++;
							if (this.response[i].progress === '기존 고객') {
								this.recallsService++;
							}
						}
					}
				}
				//
				if (this.response[i].lastModifiedDate != null && this.response[i].lastModifiedDate !== '') {
					this.create = moment(this.response[i].createdAt!).format('YY-MM-DD');
					if (this.response[i].memo != null && this.response[i].memo?.includes(this.searchDate)) {
						if (this.create === this.searchDate) {
							this.todayNewCall++;
							if (!this.searchType.includes(CallType.RE)) {
								this.today_statistics(this.response[i]);
							}
						} else {
							this.todayRecall++;
							if (!this.searchType.includes(CallType.NEW)) {
								this.today_statistics(this.response[i]);
							}
						}
					}
				}
			}
		}

		for (let i = 0; i < COUNSELORS.length; i++) {
			this.todayCall += this.counselorCallDetail[i][0];
			console.log('todayCall : ' + this.todayCall);
		}
	}

	today_statistics(data: Consult): void {
		let create = moment(data.createdAt!).format('YY-MM-DD');
		this.todayPerson++;
		for (let count = 0; count < STATE_LIST.length; count++) {
			if (data.state === STATE_LIST[count]) {
				this.todayStateCall[count]++;
				if (count === 0) {
					if (
						data.memo?.includes('가족요양중') ||
						data.memo?.includes('가족 요양중') ||
						data.memo?.includes('가족요양 중') ||
						data.memo?.includes('가족 요양 중') ||
						data.memo?.includes('이관') ||
						data.experience === '이관'
					) {
						this.experienceCheckList[2][0]++;
					} else if (
						data.memo?.includes('처음') ||
						data.memo?.includes('신규') ||
						data.experience === '신규'
					) {
						this.experienceCheckList[2][1]++;
					} else {
						this.experienceCheckList[2][2]++;
					}
				} else if (count === 5) {
					if (
						data.memo?.includes('가족요양중') ||
						data.memo?.includes('가족 요양중') ||
						data.memo?.includes('가족요양 중') ||
						data.memo?.includes('가족 요양 중') ||
						data.memo?.includes('이관') ||
						data.experience === '이관'
					) {
						this.experienceCheckList[3][0]++;
					} else if (
						data.memo?.includes('처음') ||
						data.memo?.includes('신규') ||
						data.experience === '신규'
					) {
						this.experienceCheckList[3][1]++;
					} else {
						this.experienceCheckList[3][2]++;
					}
				} else if (count === 1) {
					if (
						data.memo?.includes('가족요양중') ||
						data.memo?.includes('가족 요양중') ||
						data.memo?.includes('가족요양 중') ||
						data.memo?.includes('가족 요양 중') ||
						data.memo?.includes('이관') ||
						data.experience === '이관'
					) {
						this.experienceCheckList[4][0]++;
					} else if (
						data.memo?.includes('처음') ||
						data.memo?.includes('신규') ||
						data.experience === '신규'
					) {
						this.experienceCheckList[4][1]++;
					} else {
						this.experienceCheckList[4][2]++;
					}
				}
				if (data.come !== undefined) {
					this.today_state_come_statistics(data.come, count);
				}
				if (
					count === 0 &&
					data.progress != null &&
					data.progress !== '' &&
					(data.progress === '서류 받음' || data.progress === '서류 대기중')
				) {
					this.callDocument++;
				}
				break;
			}
		}

		switch (data.city) {
			case CITY[0]:
				this.todayCityCall[0]++;
				break;
			case CITY[1]:
				this.todayCityCall[1]++;
				break;
			case CITY[2]:
				this.todayCityCall[2]++;
				break;
			case CITY[3]:
				this.todayCityCall[3]++;
				break;
			case CITY[4]:
				this.todayCityCall[4]++;
				break;
			case CITY[5]:
				this.todayCityCall[5]++;
				break;
			case CITY[6]:
				this.todayCityCall[6]++;
				break;
			case CITY[7]:
				this.todayCityCall[7]++;
				break;
			case CITY[8]:
				this.todayCityCall[8]++;
				break;
			case CITY[9]:
				this.todayCityCall[9]++;
				break;
			case CITY[10]:
				this.todayCityCall[10]++;
				break;
			case CITY[11]:
				this.todayCityCall[11]++;
				break;
			case CITY[12]:
				this.todayCityCall[12]++;
				break;
			case CITY[13]:
				this.todayCityCall[13]++;
				break;
			case CITY[14]:
				this.todayCityCall[14]++;
				break;
			case CITY[15]:
				this.todayCityCall[15]++;
				break;
			case CITY[16]:
				this.todayCityCall[16]++;
				break;
			default:
				this.todayCityCall[17]++;
				break;
		}

		if (data.come != null && data.come !== '') {
			for (let count = 0; count < INFLOW_LIST.length; count++) {
				if (data.come === INFLOW_LIST[count]) {
					this.todayItemCall[count]++;
					if (data.state !== undefined) {
						this.today_come_state_statistics(data.state!, count);
					}
				}
			}
		} else {
			this.todayItemCall[14]++;
			if (data.state !== undefined) {
				this.today_come_state_statistics(data.state!, 14);
			}
		}

		for (let i = 0; i < COUNSELORS.length; i++) {
			if (data.memo != null && data.memo !== '') {
				if (data.memo.includes(this.searchDate + '/ ' + COUNSELORS[i])) {
					let str = new RegExp(this.searchDate + '/ ' + COUNSELORS[i], 'g');
					this.counselorCallDetail[i][0] += (data.memo.match(str) || []).length;
					if (create === this.searchType) {
						this.todayCounselorCallList[i][0] += (data.memo.match(str) || []).length;
					} else {
						this.todayCounselorCallList[i][1] += (data.memo.match(str) || []).length;
					}
					if (data.state === '가족 : 1~4등급 O, 자격증 O') {
						this.counselorCallDetail[i][1]++;
						this.counselorCallDetail[i][2] += (data.memo.match(str) || []).length;
					} else if (data.state === '가족 : 1~4등급 O, 자격증 X') {
						this.counselorCallDetail[i][3] += (data.memo.match(str) || []).length;
					} else if (data.state === '가족 : 단순 문의 / 인지') {
						this.counselorCallDetail[i][4] += (data.memo.match(str) || []).length;
					} else if (data.state === '부재 / 통화요망') {
						this.counselorCallDetail[i][5] += (data.memo.match(str) || []).length;
					} else {
						this.counselorCallDetail[i][6] += (data.memo.match(str) || []).length;
					}
				}
			}
		}

		if (data.progress !== '' && data.progress != null) {
			for (let count = 0; count < PROGRESS_LIST.length; count++) {
				if (data.progress === PROGRESS_LIST[count]) {
					this.progressCheckList[1][count]++;
				}
			}
		} else if (data.progress === '') {
			this.progressCheckList[1][PROGRESS_LIST.length]++;
			for (let count = 0; count < COUNSELORS.length; count++) {
				if (data.manager === COUNSELORS[count]) {
					this.counselorProgressDetail[count]++;
					break;
				}
			}
		}

		if (data.why !== '' && data.why != null) {
			for (let count = 0; count < WHY_LIST.length; count++) {
				if (data.why.includes(WHY_LIST[count])) {
					this.todayChoiceReasonCall[count]++;
				}
			}
			data.why
				.split(',')
				.filter((x) => !WHY_LIST.includes(x))
				.forEach((item) => {
					this.todayChoiceReasonCall[WHY_LIST.length - 1]++;
					this.todayChoiceReasonEtc += item + ', ';
				});
		}
		if (data.addInquiry !== '' && data.addInquiry != null) {
			for (let count = 0; count < ADD_INQUIRY_LIST.length; count++) {
				if (data.addInquiry.includes(ADD_INQUIRY_LIST[count])) {
					this.todayAddInquiryCall[count]++;
				}
			}
			data.addInquiry
				.split(',')
				.filter((x) => !ADD_INQUIRY_LIST.includes(x))
				.forEach((item) => {
					this.todayAddInquiryCall[ADD_INQUIRY_LIST.length - 1]++;
					this.todayAddInquiryEtc += item + ', ';
				});
		}
	}

	today_state_come_statistics(come: string, count: number) {
		switch (come) {
			case INFLOW_LIST[0]:
				this.stateComeList[count][0]++;
				break;
			case INFLOW_LIST[1]:
				this.stateComeList[count][1]++;
				break;
			case INFLOW_LIST[2]:
				this.stateComeList[count][2]++;
				break;
			case INFLOW_LIST[3]:
				this.stateComeList[count][3]++;
				break;
			case INFLOW_LIST[4]:
				this.stateComeList[count][4]++;
				break;
			case INFLOW_LIST[5]:
				this.stateComeList[count][5]++;
				break;
			case INFLOW_LIST[6]:
				this.stateComeList[count][6]++;
				break;
			case INFLOW_LIST[7]:
				this.stateComeList[count][7]++;
				break;
			case INFLOW_LIST[8]:
				this.stateComeList[count][8]++;
				break;
			case INFLOW_LIST[9]:
				this.stateComeList[count][9]++;
				break;
			case INFLOW_LIST[10]:
				this.stateComeList[count][10]++;
				break;
			case INFLOW_LIST[11]:
				this.stateComeList[count][11]++;
				break;
			case INFLOW_LIST[12]:
				this.stateComeList[count][12]++;
				break;
			case INFLOW_LIST[13]:
				this.stateComeList[count][13]++;
				break;
			default:
				this.stateComeList[count][14]++;
				break;
		}
	}

	today_come_state_statistics(state: string, count: number) {
		switch (state) {
			case STATE_LIST[0]:
				this.comeStateList[count][0]++;
				break;
			case STATE_LIST[1]:
				this.comeStateList[count][1]++;
				break;
			case STATE_LIST[2]:
				this.comeStateList[count][2]++;
				break;
			case STATE_LIST[3]:
				this.comeStateList[count][3]++;
				break;
			case STATE_LIST[4]:
				this.comeStateList[count][4]++;
				break;
			case STATE_LIST[5]:
				this.comeStateList[count][5]++;
				break;
			case STATE_LIST[6]:
				this.comeStateList[count][6]++;
				break;
			case STATE_LIST[7]:
				this.comeStateList[count][7]++;
				break;
			case STATE_LIST[8]:
				this.comeStateList[count][8]++;
				break;
			case STATE_LIST[9]:
				this.comeStateList[count][9]++;
				break;
			case STATE_LIST[10]:
				this.comeStateList[count][10]++;
				break;
			case STATE_LIST[11]:
				this.comeStateList[count][11]++;
				break;
			case STATE_LIST[12]:
				this.comeStateList[count][12]++;
				break;
			case STATE_LIST[13]:
				this.comeStateList[count][13]++;
				break;
			case STATE_LIST[14]:
				this.comeStateList[count][14]++;
				break;
			case STATE_LIST[15]:
				this.comeStateList[count][15]++;
				break;
			case STATE_LIST[16]:
				this.comeStateList[count][16]++;
				break;
			case STATE_LIST[17]:
				this.comeStateList[count][17]++;
				break;
			case STATE_LIST[18]:
				this.comeStateList[count][18]++;
				break;
			case STATE_LIST[19]:
				this.comeStateList[count][19]++;
				break;
			case STATE_LIST[20]:
				this.comeStateList[count][20]++;
				break;
			case STATE_LIST[21]:
				this.comeStateList[count][21]++;
				break;
			case STATE_LIST[22]:
				this.comeStateList[count][22]++;
				break;
			case STATE_LIST[23]:
				this.comeStateList[count][23]++;
				break;
			case STATE_LIST[24]:
				this.comeStateList[count][24]++;
				break;
			case STATE_LIST[25]:
				this.comeStateList[count][25]++;
				break;
			case STATE_LIST[26]:
				this.comeStateList[count][26]++;
				break;
			case STATE_LIST[27]:
				this.comeStateList[count][27]++;
				break;
		}
	}
}
