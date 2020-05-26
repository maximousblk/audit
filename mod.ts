import { parse } from "https://deno.land/std@0.53.0/flags/mod.ts";

const args = parse(Deno.args);

export default async function audit(
  moduleName: string,
  database: string,
  currentVersion: string,
) {
  if (args.audit === true) {
    if (moduleName && database && currentVersion) {
      var versionDB = await fetch(database).then((data) => {
        return data.json();
      });
      versionDB.versions.forEach((version: any) => {
        if (currentVersion == version.tag) {
          let patch: string = "",
            note: string = "";
          if (version.patch) {
            patch = ` Patch: ${version.patch} |`;
          }
          if (version.note) {
            note = ` Note: ${version.note} |`;
          }
          console.log(
            `| Insecure: ${moduleName} | version: ${version.tag} |${patch}${note}`,
          );
        }
      });
    } else {
      console.error("!!! Incomplete audit info !!!");
    }
  }
}
