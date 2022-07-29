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

export function downloadCsv(rows: string[][], name: string) {
	let csvContent = '';
	rows.forEach(function (rowArray) {
		let row = rowArray.join(',');
		csvContent += row + '\r\n';
	});
	const pom = document.createElement('a');
	const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
	const url = URL.createObjectURL(blob);
	pom.href = url;
	pom.setAttribute('download', name);
	pom.click();
}
