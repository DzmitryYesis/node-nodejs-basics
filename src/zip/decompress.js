import {fileURLToPath} from "node:url"
import path, {dirname} from "node:path"
import {createWriteStream, createReadStream} from "node:fs"
import zlib from "node:zlib"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const pathToDecompressFile = path.join(__dirname, "files", "fileToCompress.txt")
const pathToCompressFile = path.join(__dirname, "files", "archive.gz")

const decompress = async () => {
    // Write your code here
    const readStream = createReadStream(pathToCompressFile)
    const writeStream = createWriteStream(pathToDecompressFile)
    const gzipStream = zlib.createGunzip()

    readStream.pipe(gzipStream).pipe(writeStream)
};

await decompress();