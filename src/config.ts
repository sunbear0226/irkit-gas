import config from './config.json';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Config {
  export const SHEET_ID = config.sheet_id;
  export const POST_URL = config.post_url;
  export const CLIENT_KEY = config.clientkey;
  export const DEVICE_ID = config.deviceid;
}
