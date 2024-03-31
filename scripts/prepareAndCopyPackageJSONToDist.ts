import * as fs from "fs-extra";

/**
 * Copy the package.json file to the dist directory, removing specified fields.
 */
async function copyPackageJSONToDist(): Promise<void> {
	const filePath = "./package.json";
	const outputPath = "./dist/package.json";
	const fieldsToRemove = [
		"lint-staged",
		"standard-version",
		"packageManager",
		"author",
		"volta",
		"scripts",
		"devDependencies",
	]; // Add any other properties you want to remove

	try {
		// Read package.json
		const packageJsonData = await fs.readJson(filePath);

		// Remove specified fields
		fieldsToRemove.forEach((field) => {
			delete packageJsonData[field];
		});

		// Write the modified object to dist/package.json
		await fs.ensureDir("./dist"); // Ensure the dist directory exists
		await fs.writeJson(outputPath, packageJsonData, {spaces: "\t"}); // Formatting the JSON output
	} catch (error) {
		console.error("An error occurred:", error);
	}
}

// Execute the function
copyPackageJSONToDist();
