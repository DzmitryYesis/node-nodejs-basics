import fs from "node:fs"

const list = async () => {
    // Write your code here

    const dirPath = "src/fs/files/"

    await fs.readdir(dirPath, (error, files) => {
        if (error) {
            throw new Error("FS operation failed")
        } else {
            files.forEach(file => console.log(file))
        }
    })
};

await list();