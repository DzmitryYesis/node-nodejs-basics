import {fileURLToPath} from "node:url"
import path, {dirname} from "node:path";
import {fork} from "node:child_process"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const scriptFile = path.join(__dirname,"files", "script.js")

const spawnChildProcess = async (args) => {
    // Write your code here
    fork(scriptFile, args)
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1,2,3,"test","second test"]);
