import fs from "node:fs"

const rename = async () => {
    // Write your code here
    const filePath = "src/fs/files/wrongFilename.txt"
    const renameFilePath = "src/fs/files/properFilename.md"

    const isFileExist = fs.existsSync(filePath)
    const isRenameFilePathExist = fs.existsSync(renameFilePath)

    if (isFileExist && !isRenameFilePathExist) {
        await fs.rename(filePath, renameFilePath, (error) => {
        })
    } else {
        throw new Error("FS operation failed")
    }
};

await rename();