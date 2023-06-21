import {fileURLToPath} from "node:url";
import path, {dirname} from "node:path";
import fs from "node:fs"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const pathToFile = path.join(__dirname, "files", 'fileToWrite.txt')

const write = async () => {
    // Write your code here
    const stream = fs.createWriteStream(pathToFile)
    process.stdin.pipe(stream)
};

await write();