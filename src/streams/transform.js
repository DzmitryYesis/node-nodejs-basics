import {Transform} from "node:stream"

const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
        const data = chunk.toString().trim().split("").reverse().join("")
        callback(null, `${data}\n`)
    }
})

const transform = async () => {
    // Write your code here
    process.stdin.pipe(reverseStream).pipe(process.stdout)
};

await transform();