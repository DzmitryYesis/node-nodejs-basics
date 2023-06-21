import fs from "node:fs"

const copy = async () => {
    // Write your code here
    const folderPath = "src/fs/files/"
    const copyFolderPath = "src/fs/files_copy/"

    const isFileFolder = fs.existsSync(folderPath)
    const isFileCopyFolder = fs.existsSync(copyFolderPath)

    if (isFileFolder && !isFileCopyFolder) {
        await fs.cp(folderPath, copyFolderPath, {recursive: true}, (error) => {
            console.log("Error copy: ", error)
        })
    } else {
        throw new Error("FS operation failed")
    }
};

await copy();
