import fs from "node:fs"

const remove = async () => {
    // Write your code here
    const filePath = "src/fs/files/fileToRemove.txt"

    fs.unlink(filePath, (error) => {
        if (error) {
            if (error.code === "ENOENT") {
                throw new Error("FS operation failed")
            }
        } else {
            console.log("File deleted successfully")
        }
    })

};

await remove();