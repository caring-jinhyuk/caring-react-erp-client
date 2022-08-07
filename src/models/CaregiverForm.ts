import { Caregiver } from '../services/openApi';

export class CaregiverForm {
	address?: string;
	black?: boolean;
	career?: number;
	certificate?: boolean;
	city?: string;
	covid?: boolean;
	createdAt?: string;
	dementia?: boolean;
	gender: string;
	hopeArea?: string;
	id?: number;
	information?: string;
	lastModifiedDate?: string;
	modifier?: string;
	name?: string;
	phone?: string;
	prefer_gender: string[];
	privacy?: boolean;
	takerProgress?: string;
	town?: string;
	ward?: string;
	work_kinds: string[];
	writer?: string;
	year?: number;
	hope_city1?: string;
	hope_city2?: string;
	hope_city3?: string;
	hope_ward1?: string;
	hope_ward2?: string;
	hope_ward3?: string;

	constructor(caregiver: Caregiver) {
		this.id = caregiver.id;
		this.black = caregiver.black;
		this.address = caregiver.address;
		this.career = caregiver.career;
		this.certificate = caregiver.certificate;
		this.city = caregiver.city;
		this.covid = caregiver.covid;
		this.dementia = caregiver.dementia;
		this.gender = caregiver.gender === undefined || false ? '여자' : '남자';
		this.information =
			caregiver.information ||
			'이력/경력사항 : \n' + '요보사가 원하는 사항 : \n' + '면접 특이사항 : ';
		this.takerProgress =
			caregiver.takerProgress ||
			'1. 수급자 지역 : \n' + '2. 수급자 전화번호: \n' + '3. 수급자 날짜별 진행 상황 : ';
		this.name = caregiver.name;
		this.phone = caregiver.phone;
		this.prefer_gender = this.convertPreferGender(caregiver.prefer_gender);
		this.work_kinds = this.convertWorkKind(caregiver.work_kinds);
		this.town = caregiver.town;
		this.ward = caregiver.ward;
		this.convertHopeArea(caregiver.hopeArea);
		this.year = caregiver.year;
		this.createdAt = caregiver.createdAt;
	}

	convertPreferGender(value?: string) {
		if (value === null) {
			return [];
		} else {
			const arrGender = [];
			if (value?.includes('남자')) {
				arrGender.push('남자');
			} else if (value?.includes('여자')) {
				arrGender.push('여자');
			}
			return arrGender;
		}
	}

	convertWorkKind(value?: string) {
		if (value === null) {
			return [];
		} else {
			const arrWorkKind = [];
			if (value?.includes('방문요양')) {
				arrWorkKind.push('방문요양');
			} else if (value?.includes('방문목욕')) {
				arrWorkKind.push('방문목욕');
			} else if (value?.includes('입주요양')) {
				arrWorkKind.push('입주요양');
			} else if (value?.includes('요양시설')) {
				arrWorkKind.push('요양시설');
			}

			return arrWorkKind;
		}
	}

	convertHopeArea(value?: string) {
		if (value == null) {
		} else {
			const homeValue = value?.split(',');
			const hopeTown = ['', '', ''];
			const hopeWard = ['', '', ''];
			for (let i = 0; i < homeValue.length; i++) {
				hopeTown[i] = homeValue[i].substr(0, 2);
				hopeWard[i] = homeValue[i].substring(3);
			}

			this.hope_city1 = hopeTown[0];
			this.hope_city2 = hopeTown[1];
			this.hope_city3 = hopeTown[2];
			this.hope_ward1 = hopeWard[0];
			this.hope_ward2 = hopeWard[1];
			this.hope_ward3 = hopeWard[2];
		}
	}
}
