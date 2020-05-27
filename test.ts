import audit from "./mod.ts";

await audit("http", "https://deno.land/x/audit/example.json", "2.6");

console.log("This version of the module is marked insecure.");
