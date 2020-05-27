# audit

Add a notification for insecure versions of your modules.

This is an attempt to bring some of the features of `npm audit` to Deno.

## Setup

You need to create a JSON database that uses [this schema](schema.json).

Example:

```json
{
  "$schema": "https://deno.land/x/audit/schema.json",
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

Then import the `audit()` function in your module and pass in the required arguments

**Arguments**

1. Your module name
2. Audit database. (a json file with the list if depricated and insecure versions of you module name)
3. Current module version

Example:

```js
import audit from "https://deno.land/x/audit/mod.ts";

await audit("testModule", "https://deno.land/x/audit/example.json", "2.6");

// your module code
```

Do not use a fixed version of the database if you are using git. Use the database directly from the master branch if this is the case.

## Usage

To run an audit on your application, add `--audit` flag to your application. This would notify you if you are using an insecure version of any of your dependencies.

**NOTE:** This will only work for modules which use this module to mark their modules.

## License

This software is distributed under [MIT License](LICENSE)
