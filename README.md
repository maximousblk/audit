# audit

[WIP] add a notification for insecure versions of your modules

## Usage

Import the `audit()` function and pass in the required arguments

```js
import audit from "https://denopkg.com/maximousblk/audit/mod.ts";

audit("http", "http://127.0.0.1:5500/example.json", "0.1");
```

**Arguments**

1. Your module name
2. Audit database. (a json file with the list if depricated and insecure versions of you module name)
3. Current module version
