import { SheetService } from './sheet.service';
import { IRKitAPILauncher } from './irkit_api_launcher';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let global: any;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
global.doPost = (e): string => {
  try {
    const word = e.postData.getDataAsString().replace(/\s+/g, '');
    const message = SheetService.getMessage(SheetService.getSheet(), word);
    const res = new IRKitAPILauncher().sendMessage(message);
    return res;
  } catch (e) {
    console.error(e);
  }
};
