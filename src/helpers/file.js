import { writeFile, utils } from 'xlsx';
/**
 * Get XLSX data
 */
export const downloadXlsxFile =(rows) =>{
    /* generate worksheet and workbook */
    const worksheet = utils.json_to_sheet(rows);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Data");

    /* calculate column width */
    const max_width = rows.reduce((w, r) => Math.max(w, r.name.length), 10);
    worksheet["!cols"] = [ { wch: max_width } ];

    /* create an XLSX file and try to save to Presidents.xlsx */
    writeFile(workbook, "validationData.xlsx");
}
