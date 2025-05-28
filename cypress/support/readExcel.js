import path from "path";
import * as XLSX from "xlsx";

const readExcel = (filePath, sheetName) => {
  const absolutePath = path.resolve(filePath);
  const file = XLSX.readFile(absolutePath);
  const sheet = file.Sheets[sheetName];

  return XLSX.utils.sheet_to_json(sheet);
};

// eslint-disable-next-line no-undef
module.exports = { readExcel };
