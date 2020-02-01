import { Config } from './config';

export class IRKitAPILauncher {
  private getPayload(message: string): string {
    return JSON.stringify({
      // eslint-disable-next-line @typescript-eslint/camelcase
      clientkey: Config.CLIENT_KEY,
      deviceid: Config.DEVICE_ID,
      message: message
    });
  }
  private getOptions(payload: string): any {
    return {
      method: 'POST',
      contentType: 'application/json',
      payload: payload
    };
  }
  sendMessage(message: string): any {
    const options = this.getOptions(this.getPayload(message));
    return UrlFetchApp.fetch(Config.POST_URL, options);
  }
}
