import fs from "node:fs"

const list = async () => {
    // Write your code here
    await fs.readdir("src/fs/files/", (error, files) => {
        if (error) {
            throw new Error("FS operation failed")
        } else {
            files.forEach(file => console.log(file))
        }
    })
};

await list();