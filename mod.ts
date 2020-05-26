import { parse } from "https://deno.land/std/flags/mod.ts";

const args = parse(Deno.args);

export default async function audit(
    module: string,
    database: string,
    currentVersion: string
) {
    if (args.audit === true) {
        if (!database) {
            console.log("Audit database not provided");
        } else if (!currentVersion) {
            console.log("Current Version not provided");
        } else {
            var versiondb = await fetch(database).then((data) => {
                return data.json();
            });
            versiondb.versions.forEach((version: any) => {
                if (currentVersion == version.id) {
                    let patch = "",
                        note = "";

                    if (version.patch) {
                        patch = ` Patch: ${version.patch} |`;
                    }
                    if (version.note) {
                        note = ` Note: ${version.note} |`;
                    }
                    console.log(
                        `| ${version.type}: ${module} | version: ${version.id} |${patch}${note}`
                    );
                }
            });
        }
    }
}
