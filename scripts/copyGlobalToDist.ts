import * as fs from "fs-extra";

/**
 * Copy the global folder to the dist directory.
 */
async function copyGlobalFolder(): Promise<void> {
	try {
		const sourcePath = "./src/global";
		const destinationPath = "./dist/global";

		// Use fs-extra to copy the directory
		await fs.copy(sourcePath, destinationPath);
	} catch (error) {
		console.error("An error occurred while copying the global folder:", error);
	}
}

// Run the copy function
copyGlobalFolder();
