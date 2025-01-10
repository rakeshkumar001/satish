const fs = require("fs") // file system inbuilt module of node js 

// WRITE FILE

// synchronous call / BLOCKING REQ
// fs.writeFileSync('./test.txt', "Hey there synchronous")
// fs.writeFileSync('./test.txt',"Hello Admin") // to overwrite

// Asynchornous / NON - BLOCKING REQ
// fs.writeFile('./test.txt', "Hey there Asynchornous call", (err) => { }) // here u will get CALL BACK function in case of error



// READ FILE
// const mobile = fs.readFileSync('./contacts.txt', "utf-8")
// console.log(mobile)

// fs.readFile('./contacts.txt', "utf-8", (err, res) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(res);
//     }
// });


// APPEND FILE

// fs.appendFileSync("./test.txt", '\n' + new Date().toLocaleDateString())

// COPY FILE
// fs.copyFileSync("./test.txt",'./copy.txt')

// DELETE FILE
// fs.unlinkSync("./copy.txt")

// MAKE DIRECTORY
// fs.mkdirSync("./directory")
// fs.mkdirSync("./directory/subDirectory")


// DIFFERENCE EXAMPLE BETWEEN BLOCKING & NON BLOCKING 

// blocking code / synchronous 

// console.log("1")
// const result = fs.readFileSync("./contacts.txt","utf-8")
// console.log(result)
// console.log("2")

// NON-BLOCKING / asynchronous 
// console.log("1")
// fs.readFile("./contacts.txt", "utf-8", (err, data) => {
//     console.log(data)
// })
// console.log("2")



// COUNT HOW many threads ur system have
// threads are workers that are made use of to execute blocking/synchronous code
const os = require('os')
console.log(os.cpus().length)   