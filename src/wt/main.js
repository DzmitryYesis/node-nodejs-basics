import {Worker} from "node:worker_threads"
import path, {dirname} from "node:path"
import {fileURLToPath} from "node:url"
import os from "node:os"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const workerPath = path.join(__dirname, "worker.js")
const numberOfCPU = os.cpus().length

const fibonacciWorker = (n) => new Promise(resolve => {
    const worker = new Worker(workerPath, {workerData: n})

    worker.on("message", (data) => {
        resolve({status: "resolved", data})
    })

    worker.on("error", () => {
        resolve({status: "error", data: null})
    })
})


const performCalculations = async () => {
    // Write your code here
    console.log("number of CPU",numberOfCPU)
    const workerResultArray = []
    for(let i=0, n=10; i<numberOfCPU; i++){
        workerResultArray.push(fibonacciWorker(n))
        n++
    }
    const result = await Promise.all(workerResultArray)
    console.log(result)
};

await performCalculations();