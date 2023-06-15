const parseEnv = () => {
    // Write your code here
    const prefix = "RSS_"
    const env = process.env
    for (let key in env) {
        if (key.startsWith(prefix)) {
            console.log(`${key}=${env[key]}`)
        }
    }
};

parseEnv();