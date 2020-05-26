import { parse } from "https://deno.land/std/flags/mod.ts";

const args = parse(Deno.args);

export default async function audit(
    moduleName: string,
    database: string,
    currentVersion: string
) {
    if (args.audit === true) {
        if (!moduleName) {
            console.log("Module name not provided");
        } else if (!database) {
            console.log("Audit database URL not provided");
        } else if (!currentVersion) {
            console.log("Current Version of the module not provided");
        } else {
            var versiondb = await fetch(database).then((data) => {
                return data.json();
            });
            versiondb.versions.forEach((version: any) => {
                if (currentVersion == version.tag) {
                    let patch = "",
                        note = "";

                    if (version.patch) {
                        patch = ` Patch: ${version.patch} |`;
                    }
                    if (version.note) {
                        note = ` Note: ${version.note} |`;
                    }
                    console.log(
                        `| Insecure: ${moduleName} | version: ${version.tag} |${patch}${note}`
                    );
                }
            });
        }
    }
}
