import fs from 'node:fs';

const create = async () => {
    // Write your code here

    const filePath = "src/fs/files/fresh.txt"

    await fs.access(filePath, fs.constants.F_OK, (error) => {
        if (!error) {
            throw new Error("FS operation failed")
        } else {
            const text = "I am fresh and young"
            fs.writeFile(filePath, text, (error) => {
            })
        }
    })
};

await create();