import {createHash} from "node:crypto"
import {fileURLToPath} from "node:url";
import fs from "node:fs"


const __filename = fileURLToPath(import.meta.url)

const calculateHash = async () => {
    // Write your code here

    fs.readFile(__filename, (err, data)=>{
        if(err) throw err
        const hash = createHash("SHA256")
        hash.update(data)
        console.log(hash.digest("hex"))
    })
};

await calculateHash();