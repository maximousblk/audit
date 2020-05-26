# audit

[WIP] add a notification for insecure versions of your modules

## Setup

You need to create a JSON database that uses [this schema](schema.json).

```json
{
  "$schema": "https://denopkg.com/maximousblk/audit/schema.json",
  "versions": [
    {
      "tag": "1.2",
      "patch": "1.2.1",
      "note": "https://link/to/the/nocice"
    },
    {
      "tag": "2.6",
      "patch": "2.6.5",
      "note": "This version is vulnerable to XXS"
    },
    {
      "tag": "4.6",
      "patch": "4.6.1",
      "note": "Vulnerability notice"
    }
  ]
}
```

## Usage

Import the `audit()` function in your module and pass in the required arguments

**Arguments**

1. Your module name
2. Audit database. (a json file with the list if depricated and insecure versions of you module name)
3. Current module version

Example:

```js
import audit from "https://denopkg.com/maximousblk/audit/mod.ts";

await audit(
  "testModule",
  "https://denopkg.com/maximousblk/audit/example.json",
  "2.6"
);

// your module code
```

Then when a user runs a program that uses your module with the `--audit` flag, it notifies the user if they are using an insecure version.
