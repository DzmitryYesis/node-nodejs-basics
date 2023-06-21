import {fileURLToPath} from "node:url"
import path, {dirname} from "node:path"
import {createWriteStream, createReadStream} from "node:fs"
import zlib from "node:zlib"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const pathToFile = path.join(__dirname, "files", "fileToCompress.txt")
const pathToCompressFile = path.join(__dirname, "files", "archive.gz")

const compress = async () => {
    // Write your code here
    const readStream = createReadStream(pathToFile)
    const writeStream = createWriteStream(pathToCompressFile)
    const gzipStream = zlib.createGzip()

    readStream.pipe(gzipStream).pipe(writeStream)
};

await compress();