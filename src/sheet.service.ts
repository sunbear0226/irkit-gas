import Sheet = GoogleAppsScript.Spreadsheet.Sheet;
import { Config } from './config';

export class SheetService {
  static getSheet(): Sheet {
    const spreadsheet = SpreadsheetApp.openById(Config.SHEET_ID);
    return spreadsheet.getSheetByName('irkit');
  }

  static getMessage(sheet: Sheet, word: string): string {
    const values: string[][] = sheet
      .getRange(2, 1, sheet.getLastRow(), sheet.getLastColumn())
      .getValues();
    return values.filter(v => v.indexOf(word, 2) !== -1)[0][0];
  }
}
