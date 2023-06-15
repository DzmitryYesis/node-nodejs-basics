import fs from "node:fs"

const remove = async () => {
    // Write your code here

    fs.unlink("src/fs/files/fileToRemove.txt", (error) => {
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