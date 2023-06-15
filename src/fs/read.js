import fs from 'node:fs';

const read = async () => {
    // Write your code here

    const filePath = "src/fs/files/fileToRead.txt"

   await fs.readFile(filePath, (error, data) => {
       if(error){
           throw new Error("FS operation failed")
       }
        console.log(data.toString())
    })
};

await read();