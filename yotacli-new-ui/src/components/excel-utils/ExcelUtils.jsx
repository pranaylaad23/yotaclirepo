import * as XLSX from 'xlsx';

export const ExportToExcel = (data, fileName) => {
    if(data.length === 0) {
        alert("Unable to generate report. Data is not available.");
        return;
    }else {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, fileName + '.xlsx');
    }
}