# IRKit-GAS
Google Assistant -> IFTTT -> GAS -> IRKitで家電をリモコン操作するためのスクリプト。
@howdy39様の[gas-clasp-starter](https://github.com/howdy39/gas-clasp-starter.git)をお借りしています。

## Getting Started
### Clone the repository
```
git clone https://github.com/s-higuma/irkit-gas.git
cd irkit-gas
```

### Install dependencies
```
npm install
```

### Configuration
#### Rename `.clasp.json.sample` to `.clasp.json`
#### Open `.clasp.json`, change scriptId
What is scriptId ? https://github.com/google/clasp#scriptid-required
```
{
  "scriptId": <your_script_id>,
  "rootDir": "dist"
}
```

#### Open `src/appsscript.json`, change timeZone (optional)
[Apps Script Manifests](https://developers.google.com/apps-script/concepts/manifests)
```
{
  "timeZone": "Asia/Tokyo", ## Change timeZone
  "dependencies": {
  },
  "webapp": {
    "access": "ANYONE_ANONYMOUS",
    "executeAs": "USER_DEPLOYING"
  },
  "exceptionLogging": "STACKDRIVER",
  "executionApi": {
    "access": "ANYONE"
  }
}
```

#### Rename `src/config.json.sample` to `src/config.json`
#### Open `src/config.json`, change google spread sheet id, clientkey, deviceid
```
{
    "sheet_id": "<your google spread sheet id>",
    "post_url": "https://api.getirkit.com/1/messages",
    "clientkey": "<your irkit clientkey>",
    "deviceid": "<your irkit deviceid>"
}
```
##### How to get clientkey and deviceid
Go https://getirkit.com/ and check `POST /1/keys` API

### Development and build project
```
npm run build
```

### Push
```
clasp push
```
