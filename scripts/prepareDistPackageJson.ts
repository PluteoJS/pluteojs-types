/* eslint-disable @typescript-eslint/ban-ts-comment */
import fs from "fs";
import path from "path";

import packageJson from "../dist/package.json";

const distPackageJsonPath = path.resolve(__dirname, "../dist/package.json");

// Adjust fields as necessary for distribution
packageJson.main = "modules/index.js";
packageJson.types = "modules/index.d.ts";

// Remove fields not relevant to consumers
// @ts-ignore
delete packageJson.scripts;
// @ts-ignore
delete packageJson.devDependencies;

// Write the adjusted package.json back to 'dist'
fs.writeFileSync(distPackageJsonPath, JSON.stringify(packageJson, null, 2));
