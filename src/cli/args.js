const parseArgs = () => {
    // Write your code here
    const args = process.argv.slice(2)
    args.forEach((elem, index)=>{
        if(elem.startsWith("--")){
            console.log(`${elem.slice(2)} is ${args[index+1]}`)
        }
    })
};

parseArgs();