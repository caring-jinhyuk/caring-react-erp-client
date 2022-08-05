import { Consult } from '../../../services/openApi';
import moment from 'moment';
import CallStatistics from './components/CallStatistics';

export class CallData {
	private readonly response: Array<Consult>;

	inflowList: string[] = [
		'TV광고',
		'유튜브',
		'인터넷(검색/뉴스 등)',
		'인터넷(블로그)',
		'인터넷(지식in)',
		'지인 소개',
		'홈페이지(pc)',
		'홈페이지(mo)',
		'전단지',
		'페이스북',
		'인스타',
		'라디오',
		'캐시워크',
		'케어랩스 DB',
		'나머지',
	];

	stateList: string[] = [
		'가족 : 1~4등급 O, 자격증 O',
		'가족 : 1~4등급 O, 자격증 X',
		'가족 : 5등급',
		'가족 : 등급 신청 중',
		'가족 : 단순 문의 / 인지',
		'일반 : 구인문의',
		'목욕 : 구인문의',
		'입주 : 구인문의',
		'일반/목욕 : 구직문의',
		'일반 : 기매칭',
		'일반 : 입주요양 구인구직',
		'복지용구',
		'부재 / 통화요망',
		'홈페이지 예약',
		'스마일콜',
		'기타 : 방문간호',
		'기타 : 자격증/교육원',
		'기타 : 등급 신청 문의',
		'기타 : 등급 신청 대행',
		'기타 : 종료 / 기타 문의',
		'기타 : 무응답',
		'간병 : 유형 미파악',
		'간병 : 구직 - 병원',
		'간병 : 구직 - 입주',
		'간병 : 구인 - 병원',
		'간병 : 구인 - 입주',
		'VOC : 고객 단순 요청/문의',
		'VOC : 고객 클레임',
	];

	cityList: string[] = [
		'경기',
		'서울',
		'부산',
		'인천',
		'경남',
		'대구',
		'경북',
		'대전',
		'전북',
		'전남',
		'충남',
		'광주',
		'강원',
		'충북',
		'울산',
		'제주',
		'세종',
	];

	progressList: string[] = [
		'서류 받음',
		'서류 대기중',
		'연락가능성 높음',
		'연락가능성 낮음',
		'매칭 요청',
		'기존 고객',
		'이탈 - 시작요청일 늦음',
		'이탈 - 급여 차이 적음',
		'이탈 - 타 센터에서 잡음',
		'이탈 - 기타',
	];

	whyList: string[] = [
		'높은 급여',
		'정동원 / 장민호 팬',
		'지인 추천',
		'일자리가 더 많을 것 같아서',
		'요양보호사 권익 생각해줘서',
		'유튜브 설명 좋아서',
		'티비에 나와서',
		'전국적이라서',
		'체계적이라서',
		'등급 대행 해줄 줄 알고',
		'기타',
	];

	addInquiryList: string[] = [
		'이용X',
		'가족요양',
		'방문요양',
		'방문목욕',
		'방문간호',
		'주야간',
		'기타',
	];

	counselors: string[] = [
		'임규경',
		'원효정',
		'김미가',
		'이수환',
		'김태석',
		'이가은',
		'김지은',
		'곽조아',
		'전담비',
		'최지은',
	];

	calls = 0;

	recalls = 0;

	recallsService = 0;

	choiceReasonEtc = '';

	addInquiryEtc = '';

	create: Date = moment().toDate();

	now: string = moment().format('YY-MM-DD');

	today: string = new Date().toISOString().substring(0, 10);

	cityCall: number[] = Array.from({ length: this.cityList.length }, () => 0);

	itemCall: Array<number> = new Array(this.inflowList.length).fill(0);

	itemService: Array<number> = new Array(this.inflowList.length).fill(0);

	stateCall: number[] = Array.from({ length: this.stateList.length }, () => 0);

	cityVisitHopeCall: number[] = Array.from({ length: this.cityList.length }, () => 0);

	experienceCheckList: number[][] = Array(5)
		.fill(0)
		.map((x) => Array(3).fill(0));

	progressCheckList: number[][] = Array(2)
		.fill(0)
		.map((x) => Array(this.progressList.length + 1).fill(0));

	choiceReasonCall: number[] = Array.from({ length: this.whyList.length }, () => 0);

	addInquiryCall = Array.from({ length: this.addInquiryList.length }, () => 0);

	counselorsCall = Array.from({ length: this.counselors.length }, () => 0);

	todayCallClick: boolean[] = [true, false, false];

	todayPerson: number = 0;

	todayCall: number = 0;

	todayNewCall: number = 0;

	todayRecall: number = 0;

	callDocument: number = 0;

	todayCityCall: number[] = Array.from({ length: 18 }, () => 0);

	counselorCallDetail: number[][] = Array(this.counselors.length)
		.fill(0)
		.map((x) => Array(7).fill(0));

	todayNewcall: number = 0;

	todayCounselorCallList: number[][] = Array(this.counselors.length)
		.fill(0)
		.map((x) => Array(2).fill(0));

	todayItemCall: number[] = Array.from({ length: this.inflowList.length }, () => 0);

	todayStateCall: number[] = Array.from({ length: this.stateList.length }, () => 0);

	stateComeList: number[][] = Array(this.todayStateCall.length)
		.fill(0)
		.map((x) => Array(this.inflowList.length).fill(0));

	comeStateList: number[][] = Array(this.inflowList.length)
		.fill(0)
		.map((x) => Array(this.todayStateCall.length).fill(0));

	todayChoiceReasonEtc: string = '';

	todayAddInquiryEtc: string = '';

	todayAddInquiryCall: number[] = Array.from({ length: this.addInquiryList.length }, () => 0);

	todayChoiceReasonCall: number[] = Array.from({ length: this.whyList.length }, () => 0);

	counselorProgressDetail: number[] = Array.from({ length: this.counselors.length }, () => 0);

	constructor(consults: Array<Consult>, searchDate: Date) {
		this.response = consults;
		this.now = moment(searchDate).format('YY-MM-DD');
		this.calculateCallData();
	}

	calculateCallData() {
		for (let i = 0; i < this.response.length; i++) {
			if (this.response[i] != null) {
				this.calls++;

				switch (this.response[i].come) {
					case this.inflowList[0]:
						this.itemCall[0]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[0]++;
						}
						break;
					case this.inflowList[1]:
						this.itemCall[1]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[1]++;
						}
						break;
					case this.inflowList[2]:
						this.itemCall[2]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[2]++;
						}
						break;
					case this.inflowList[3]:
						this.itemCall[3]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[3]++;
						}
						break;
					case this.inflowList[4]:
						this.itemCall[4]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[4]++;
						}
						break;
					case this.inflowList[5]:
						this.itemCall[5]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[5]++;
						}
						break;
					case this.inflowList[6]:
						this.itemCall[6]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[6]++;
						}
						break;
					case this.inflowList[7]:
						this.itemCall[7]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[7]++;
						}
						break;
					case this.inflowList[8]:
						this.itemCall[8]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[8]++;
						}
						break;
					case this.inflowList[9]:
						this.itemCall[9]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[9]++;
						}
						break;
					case this.inflowList[10]:
						this.itemCall[10]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[10]++;
						}
						break;
					case this.inflowList[11]:
						this.itemCall[11]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[11]++;
						}
						break;
					case this.inflowList[12]:
						this.itemCall[12]++;
						if (this.response[i].progress === '기존 고객') {
							this.itemService[12]++;
						}
						break;
					case this.inflowList[13]:
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
					if (this.response[i].city == this.cityList[y]) {
						this.cityCall[y]++;
						if (this.response[i].visitHope == 'O') {
							this.cityVisitHopeCall[y]++;
						}
						break;
					} else if (y == this.cityCall.length - 1) {
						this.cityCall[y]++;
					}
				}

				for (let count = 0; count < this.stateList.length; count++) {
					if (this.response[i].state == this.stateList[count]) {
						this.stateCall[count]++;
						if (count == 0) {
							if (
								this.response[i].memo?.includes('가족요양중') ||
								this.response[i].memo?.includes('가족 요양중') ||
								this.response[i].memo?.includes('가족요양 중') ||
								this.response[i].memo?.includes('가족 요양 중') ||
								this.response[i].memo?.includes('이관') ||
								this.response[i].experience == '이관'
							) {
								this.experienceCheckList[0][0]++;
							} else if (
								this.response[i].memo?.includes('처음') ||
								this.response[i].memo?.includes('신규') ||
								this.response[i].experience == '신규'
							) {
								this.experienceCheckList[0][1]++;
							} else {
								this.experienceCheckList[0][2]++;
							}
						} else if (count == 5) {
							if (
								this.response[i].memo?.includes('가족요양중') ||
								this.response[i].memo?.includes('가족 요양중') ||
								this.response[i].memo?.includes('가족요양 중') ||
								this.response[i].memo?.includes('가족 요양 중') ||
								this.response[i].memo?.includes('이관') ||
								this.response[i].experience == '이관'
							) {
								this.experienceCheckList[1][0]++;
							} else if (
								this.response[i].memo?.includes('처음') ||
								this.response[i].memo?.includes('신규') ||
								this.response[i].experience == '신규'
							) {
								this.experienceCheckList[1][1]++;
							} else {
								this.experienceCheckList[1][2]++;
							}
						}
						break;
					}
				}

				if (this.response[i].progress != '' && this.response[i].progress != null) {
					for (let count = 0; count < this.progressList.length; count++) {
						if (this.response[i].progress == this.progressList[count]) {
							this.progressCheckList[0][count]++;
						}
					}
				} else if (this.response[i].progress == '') {
					this.progressCheckList[0][this.progressList.length]++;
				}

				if (this.response[i].why != '' && this.response[i].why != null) {
					for (let count = 0; count < this.whyList.length; count++) {
						if (this.response[i].why?.includes(this.whyList[count])) {
							this.choiceReasonCall[count]++;
						}
					}
					if (this.response[i].why != null) {
						this.response[i].why
							?.split(',')
							.filter((x) => !this.whyList.includes(x))
							.forEach((item) => {
								this.choiceReasonCall[this.whyList.length - 1]++;
								this.choiceReasonEtc += item + ', ';
							});
					}
				}

				if (this.response[i].addInquiry != '' && this.response[i].addInquiry != null) {
					for (let count = 0; count < this.addInquiryList.length; count++) {
						if (this.response[i].addInquiry?.includes(this.addInquiryList[count])) {
							this.addInquiryCall[count]++;
						}
					}
					if (this.response[i].addInquiry != null) {
						// response[i].addInquiry
						// 	?.split(',')
						// 	.filter((x) => !addInquiryList.includes(x))
						// 	.forEach((item) => {
						// 		addInquiryCall[addInquiryList.length - 1]++;
						// 		addInquiryEtc += item + ', ';
						// 	});
					}
				}

				if (this.response[i].first != null && this.response[i].first != '') {
					for (let count = 0; count < this.counselors.length; count++) {
						if (this.response[i].first == this.counselors[count]) {
							this.counselorsCall[count]++;
							break;
						}
					}
				}

				if (this.response[i].memo != null && this.response[i].memo != '') {
					for (let count = 0; count < this.counselors.length; count++) {
						let counselor = new RegExp(this.counselors[count], 'g');
						if (this.response[i].memo?.search(this.counselors[count]) !== -1) {
							this.counselorsCall[count] += (this.response[i].memo?.match(counselor) || []).length;
							this.recalls++;
							if (this.response[i].progress === '기존 고객') {
								this.recallsService++;
							}
						}
					}
				}
				//
				if (this.response[i].lastModifiedDate != null && this.response[i].lastModifiedDate != '') {
					this.create = new Date(this.response[i].createdAt!);
					// 	// days = '22-07-01/'
					// 	// for(let minute=0; minute<160; minute++){
					// 	//   for (let counselors=0; counselors<this.counselors.length; counselors++){
					// 	//     if(data[i].memo.includes(days + ' ' + this.counselors[counselors] + ') (' + moment(times).add(minute, 'minute').format('HH:mm') + ')')){
					// 	//       people++;
					// 	//     }
					// 	//   }
					// 	// }
					// 	// for(let minute=0; minute<145; minute++){
					// 	//   for (let counselors=0; counselors<this.counselors.length; counselors++){
					// 	//     if(data[i].memo.includes(days + ' ' + this.counselors[counselors] + ') (' + moment(times1).add(minute, 'minute').format('HH:mm') + ')')){
					// 	//       people1++;
					// 	//     }
					// 	//   }
					// 	// }
					// 	// for(let minute=0; minute<142; minute++){
					// 	//   for (let counselors=0; counselors<this.counselors.length; counselors++){
					// 	//     if(data[i].memo.includes(days + ' ' + this.counselors[counselors] + ') (' + moment(times2).add(minute, 'minute').format('HH:mm') + ')')){
					// 	//       people2++;
					// 	//     }
					// 	//   }
					// 	// }
					// 	// for(let minute=0; minute<150; minute++){
					// 	//   for (let counselors=0; counselors<this.counselors.length; counselors++){
					// 	//     if(data[i].memo.includes(days + ' ' + this.counselors[counselors] + ') (' + moment(times3).add(minute, 'minute').format('HH:mm') + ')')){
					// 	//       people3++;
					// 	//     }
					// 	//   }
					// 	// }
					// 	// for(let minute=0; minute<150; minute++){
					// 	//   for (let counselors=0; counselors<this.counselors.length; counselors++){
					// 	//     if(data[i].memo.includes(days + ' ' + this.counselors[counselors] + ') (' + moment(times4).add(minute, 'minute').format('HH:mm') + ')')){
					// 	//       people4++;
					// 	//     }
					// 	//   }
					// 	// }
					// 	// for(let minute=0; minute<130; minute++){
					// 	//   for (let counselors=0; counselors<this.counselors.length; counselors++){
					// 	//     if(data[i].memo.includes(days + ' ' + this.counselors[counselors] + ') (' + moment(times5).add(minute, 'minute').format('HH:mm') + ')')){
					// 	//       people5++;
					// 	//     }
					// 	//   }
					// 	// }
					// 	// for(let minute=0; minute<150; minute++){
					// 	//   for (let counselors=0; counselors<this.counselors.length; counselors++){
					// 	//     if(data[i].memo.includes(days + ' ' + this.counselors[counselors] + ') (' + moment(times6).add(minute, 'minute').format('HH:mm') + ')')){
					// 	//       people6++;
					// 	//     }
					// 	//   }
					// 	// }
					// 	// minute++;
					// 	// console.log(minute);
					if (this.response[i].memo != null && this.response[i].memo?.includes(this.now)) {
						if (this.create.toISOString().substring(0, 10) === this.today) {
							this.todayNewCall++;
							if (!this.todayCallClick[2]) {
								this.today_statistics(this.response[i]);
							}
						} else {
							this.todayNewCall++;
							if (!this.todayCallClick[1]) {
								this.today_statistics(this.response[i]);
							}
						}
						// 	}
						// }
					}
				}
			}
		}
	}

	today_statistics(data: Consult): void {
		let create = new Date(data.createdAt!);
		this.todayPerson++;
		for (let count = 0; count < this.stateList.length; count++) {
			if (data.state == this.stateList[count]) {
				this.todayStateCall[count]++;
				if (count == 0) {
					if (
						data.memo?.includes('가족요양중') ||
						data.memo?.includes('가족 요양중') ||
						data.memo?.includes('가족요양 중') ||
						data.memo?.includes('가족 요양 중') ||
						data.memo?.includes('이관') ||
						data.experience == '이관'
					) {
						this.experienceCheckList[2][0]++;
					} else if (
						data.memo?.includes('처음') ||
						data.memo?.includes('신규') ||
						data.experience == '신규'
					) {
						this.experienceCheckList[2][1]++;
					} else {
						this.experienceCheckList[2][2]++;
					}
				} else if (count == 5) {
					if (
						data.memo?.includes('가족요양중') ||
						data.memo?.includes('가족 요양중') ||
						data.memo?.includes('가족요양 중') ||
						data.memo?.includes('가족 요양 중') ||
						data.memo?.includes('이관') ||
						data.experience == '이관'
					) {
						this.experienceCheckList[3][0]++;
					} else if (
						data.memo?.includes('처음') ||
						data.memo?.includes('신규') ||
						data.experience == '신규'
					) {
						this.experienceCheckList[3][1]++;
					} else {
						this.experienceCheckList[3][2]++;
					}
				} else if (count == 1) {
					if (
						data.memo?.includes('가족요양중') ||
						data.memo?.includes('가족 요양중') ||
						data.memo?.includes('가족요양 중') ||
						data.memo?.includes('가족 요양 중') ||
						data.memo?.includes('이관') ||
						data.experience == '이관'
					) {
						this.experienceCheckList[4][0]++;
					} else if (
						data.memo?.includes('처음') ||
						data.memo?.includes('신규') ||
						data.experience == '신규'
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
					count == 0 &&
					data.progress != null &&
					data.progress != '' &&
					(data.progress == '서류 받음' || data.progress == '서류 대기중')
				) {
					this.callDocument++;
				}
				break;
			}
		}

		switch (data.city) {
			case this.cityList[0]:
				this.todayCityCall[0]++;
				break;
			case this.cityList[1]:
				this.todayCityCall[1]++;
				break;
			case this.cityList[2]:
				this.todayCityCall[2]++;
				break;
			case this.cityList[3]:
				this.todayCityCall[3]++;
				break;
			case this.cityList[4]:
				this.todayCityCall[4]++;
				break;
			case this.cityList[5]:
				this.todayCityCall[5]++;
				break;
			case this.cityList[6]:
				this.todayCityCall[6]++;
				break;
			case this.cityList[7]:
				this.todayCityCall[7]++;
				break;
			case this.cityList[8]:
				this.todayCityCall[8]++;
				break;
			case this.cityList[9]:
				this.todayCityCall[9]++;
				break;
			case this.cityList[10]:
				this.todayCityCall[10]++;
				break;
			case this.cityList[11]:
				this.todayCityCall[11]++;
				break;
			case this.cityList[12]:
				this.todayCityCall[12]++;
				break;
			case this.cityList[13]:
				this.todayCityCall[13]++;
				break;
			case this.cityList[14]:
				this.todayCityCall[14]++;
				break;
			case this.cityList[15]:
				this.todayCityCall[15]++;
				break;
			case this.cityList[16]:
				this.todayCityCall[16]++;
				break;
			default:
				this.todayCityCall[17]++;
				break;
		}

		if (data.come != null && data.come != '') {
			for (let count = 0; count < this.inflowList.length; count++) {
				if (data.come == this.inflowList[count]) {
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

		for (let i = 0; i < this.counselors.length; i++) {
			if (data.memo != null && data.memo != '') {
				if (data.memo.includes(this.now + '/ ' + this.counselors[i])) {
					let str = new RegExp(this.now + '/ ' + this.counselors[i], 'g');
					this.counselorCallDetail[i][0] += (data.memo.match(str) || []).length;
					if (create.toISOString().substring(0, 10) === this.today) {
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

		if (data.progress != '' && data.progress != null) {
			for (let count = 0; count < this.progressList.length; count++) {
				if (data.progress == this.progressList[count]) {
					this.progressCheckList[1][count]++;
				}
			}
		} else if (data.progress == '') {
			this.progressCheckList[1][this.progressList.length]++;
			for (let count = 0; count < this.counselors.length; count++) {
				if (data.manager == this.counselors[count]) {
					this.counselorProgressDetail[count]++;
					break;
				}
			}
		}

		if (data.why != '' && data.why != null) {
			for (let count = 0; count < this.whyList.length; count++) {
				if (data.why.includes(this.whyList[count])) {
					this.todayChoiceReasonCall[count]++;
				}
			}
			data.why
				.split(',')
				.filter((x) => !this.whyList.includes(x))
				.forEach((item) => {
					this.todayChoiceReasonCall[this.whyList.length - 1]++;
					this.todayChoiceReasonEtc += item + ', ';
				});
		}
		if (data.addInquiry != '' && data.addInquiry != null) {
			for (let count = 0; count < this.addInquiryList.length; count++) {
				if (data.addInquiry.includes(this.addInquiryList[count])) {
					this.todayAddInquiryCall[count]++;
				}
			}
			data.addInquiry
				.split(',')
				.filter((x) => !this.addInquiryList.includes(x))
				.forEach((item) => {
					this.todayAddInquiryCall[this.addInquiryList.length - 1]++;
					this.todayAddInquiryEtc += item + ', ';
				});
		}
	}

	today_state_come_statistics(come: string, count: number) {
		switch (come) {
			case this.inflowList[0]:
				this.stateComeList[count][0]++;
				break;
			case this.inflowList[1]:
				this.stateComeList[count][1]++;
				break;
			case this.inflowList[2]:
				this.stateComeList[count][2]++;
				break;
			case this.inflowList[3]:
				this.stateComeList[count][3]++;
				break;
			case this.inflowList[4]:
				this.stateComeList[count][4]++;
				break;
			case this.inflowList[5]:
				this.stateComeList[count][5]++;
				break;
			case this.inflowList[6]:
				this.stateComeList[count][6]++;
				break;
			case this.inflowList[7]:
				this.stateComeList[count][7]++;
				break;
			case this.inflowList[8]:
				this.stateComeList[count][8]++;
				break;
			case this.inflowList[9]:
				this.stateComeList[count][9]++;
				break;
			case this.inflowList[10]:
				this.stateComeList[count][10]++;
				break;
			case this.inflowList[11]:
				this.stateComeList[count][11]++;
				break;
			case this.inflowList[12]:
				this.stateComeList[count][12]++;
				break;
			case this.inflowList[13]:
				this.stateComeList[count][13]++;
				break;
			default:
				this.stateComeList[count][14]++;
				break;
		}
	}

	today_come_state_statistics(state: string, count: number) {
		switch (state) {
			case this.stateList[0]:
				this.comeStateList[count][0]++;
				break;
			case this.stateList[1]:
				this.comeStateList[count][1]++;
				break;
			case this.stateList[2]:
				this.comeStateList[count][2]++;
				break;
			case this.stateList[3]:
				this.comeStateList[count][3]++;
				break;
			case this.stateList[4]:
				this.comeStateList[count][4]++;
				break;
			case this.stateList[5]:
				this.comeStateList[count][5]++;
				break;
			case this.stateList[6]:
				this.comeStateList[count][6]++;
				break;
			case this.stateList[7]:
				this.comeStateList[count][7]++;
				break;
			case this.stateList[8]:
				this.comeStateList[count][8]++;
				break;
			case this.stateList[9]:
				this.comeStateList[count][9]++;
				break;
			case this.stateList[10]:
				this.comeStateList[count][10]++;
				break;
			case this.stateList[11]:
				this.comeStateList[count][11]++;
				break;
			case this.stateList[12]:
				this.comeStateList[count][12]++;
				break;
			case this.stateList[13]:
				this.comeStateList[count][13]++;
				break;
			case this.stateList[14]:
				this.comeStateList[count][14]++;
				break;
			case this.stateList[15]:
				this.comeStateList[count][15]++;
				break;
			case this.stateList[16]:
				this.comeStateList[count][16]++;
				break;
			case this.stateList[17]:
				this.comeStateList[count][17]++;
				break;
			case this.stateList[18]:
				this.comeStateList[count][18]++;
				break;
			case this.stateList[19]:
				this.comeStateList[count][19]++;
				break;
			case this.stateList[20]:
				this.comeStateList[count][20]++;
				break;
			case this.stateList[21]:
				this.comeStateList[count][21]++;
				break;
			case this.stateList[22]:
				this.comeStateList[count][22]++;
				break;
			case this.stateList[23]:
				this.comeStateList[count][23]++;
				break;
			case this.stateList[24]:
				this.comeStateList[count][24]++;
				break;
			case this.stateList[25]:
				this.comeStateList[count][25]++;
				break;
			case this.stateList[26]:
				this.comeStateList[count][26]++;
				break;
			case this.stateList[27]:
				this.comeStateList[count][27]++;
				break;
		}
	}
}
