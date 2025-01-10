const http = require('http');
const fs = require('fs')
const url = require('url');
// const url = require('node:url');

const myServer = http.createServer((req, res) => {

    // FILE SYSTEM WITH REQ URL BASIC
    // *************************************************************
    // const log = `\n${new Date()} : New request received`;
    // fs.appendFile('./log.txt', log, (err, data) => {
    //     res.end("Hello from server")
    // })

    // URL PARAM 
    // *************************************************************
    var parsedURL = url.parse(req.url, true);
    console.log(parsedURL)

    // NODE ROUTE BASIC
    // *************************************************************
    // switch(req.url){  // will throw error if uel consist query params
    switch (parsedURL.pathname) {
        case '/': res.end("Hello user !!"); break;
        case '/about':
            const name = parsedURL.query.name
            res.end("About us page !! HI , " + name);
            break;
        default: res.end("404 error");
    }
});

myServer.listen(8000, () => { console.log("server started") })