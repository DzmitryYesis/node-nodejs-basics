import fs from 'node:fs';

const create = async () => {
    // Write your code here
    await fs.access("src/fs/files/fresh.txt", fs.constants.F_OK, (error) => {
        if (!error) {
            throw new Error("FS operation failed")
        } else {
            const text = "I am fresh and young"
            const filePath = "src/fs/files/fresh.txt"
            fs.writeFile(filePath, text, (error)=>{})
        }
    })
};

await create();