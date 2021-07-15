export const getCellValue = (sheetname, a1) => {
  const range = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(sheetname)
    .getRange(`${a1}:${a1}`);
  const cell = range.getCell(1, 1);
  const value = cell.getValue();
  // console.log(`${a1}: ${value}`);
  return value;
};

export const setCellValue = (sheetname, a1, value) => {
  // const oldvalue = getCellValue(sheetname, a1);
  const range = SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName(sheetname)
    .getRange(`${a1}:${a1}`);
  const cell = range.getCell(1, 1);
  const newvalue = cell.setValue(value);
  // console.log(`${a1}: ${oldvalue} -> ${a1}: ${getCellValue(sheetname, a1)}`);
  return newvalue;
};

const getSheets = () => SpreadsheetApp.getActive().getSheets();

const getActiveSheetName = () => SpreadsheetApp.getActive().getSheetName();

export const getSheetsData = () => {
  const activeSheetName = getActiveSheetName();
  return getSheets().map((sheet, index) => {
    const name = sheet.getName();
    return {
      name,
      index,
      isActive: name === activeSheetName,
    };
  });
};

export const addSheet = sheetTitle => {
  SpreadsheetApp.getActive().insertSheet(sheetTitle);
  return getSheetsData();
};

export const deleteSheet = sheetIndex => {
  const sheets = getSheets();
  SpreadsheetApp.getActive().deleteSheet(sheets[sheetIndex]);
  return getSheetsData();
};

export const setActiveSheet = sheetName => {
  SpreadsheetApp.getActive()
    .getSheetByName(sheetName)
    .activate();
  return getSheetsData();
};
