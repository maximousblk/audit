# audit

[WIP] add a notification for insecure versions of your modules

## Setup

You need to create a JSON database that uses the following schema.

```json
"$schema": "https://denopkg.com/maximousblk/audit/schema.json",
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

await audit("testModule", "https://denopkg.com/maximousblk/audit/example.json", "2.6");

// your module code
```

Then when a user runs a program that uses your module with the `--audit` flag, it notifies the user if they are using an insecure version.
