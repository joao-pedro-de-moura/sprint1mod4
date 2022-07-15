
import readline from "readline"

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let arr = []
rl.on('line', (line)=>{
    if(line == "saida" ){
        rl.pause()

        console.log(arr.sort().join(" "))
    }else{
        arr.push(line)
    }
})
