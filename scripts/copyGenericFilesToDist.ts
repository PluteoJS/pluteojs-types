import * as fs from "fs-extra";

// List of files to copy
const filesToCopy = [
	"LICENSE",
	"README.md",
	// Add more files as needed
];

// The destination directory
const destDir = "./dist";

async function copyGenericFilesToDist(): Promise<void> {
	try {
		// Ensure the destination directory exists
		await fs.ensureDir(destDir);

		// Use Promise.all to wait for all files to be copied
		await Promise.all(
			filesToCopy.map(async (file) => {
				const destFile = `${destDir}/${file.split("/").pop()}`;
				await fs.copy(file, destFile);
				console.log(`${file} was copied to ${destFile}`);
			})
		);

		console.log("All specified files have been copied successfully.");
	} catch (error) {
		console.error("An error occurred during file copy:", error);
	}
}

// Execute the function to copy files
copyGenericFilesToDist();
