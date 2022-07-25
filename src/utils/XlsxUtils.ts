import * as XLSX from 'xlsx';

/**
 * 데이터를 엑셀파일로 다운로드
 * legacy분석을 통해서 추후 항목 더 추가
 * @param fileName 파일 이름
 * @param data 엑셀로 표현할 데이터
 */
export function excelDownload(fileName: string, data: any[][]) {
	const wsName = fileName;
	const wb = XLSX.utils.book_new();
	const wdData = data;
	const ws = XLSX.utils.aoa_to_sheet(wdData);

	XLSX.utils.book_append_sheet(wb, ws, wsName);
	XLSX.writeFile(wb, fileName + '.xlsx');
	return;
}
