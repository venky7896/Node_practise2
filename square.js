/* const os = require('os')

const user = os.userInfo()

console.log(user) */

/* const path = require('path')
const abPath = path.resolve(__dirname,'content','test.txt')
console.log(abPath) */

/* const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/second.txt','utf-8')
writeFileSync('./content/second.txt','hello again')

console.log(first)
console.log(second) */


/* const {readFile,writeFile} = require('fs')

readFile('./content/second.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(result)
    }
}) */

const http = require('http')

const server = http.createServer((req,res)=>{
    res.write('hello world')
    res.end()
})

server.listen(4000)