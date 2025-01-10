const fs = require('fs')

function logReqRes(filename) {
    return (req, res, next) => (  //using clousers here
        fs.appendFile(filename, `TIME:- ${new Date().toLocaleString()} | METHOD:- ${req.method} |  PATH:- ${req.path} \n`, (err, data) => {
            next();
        })
    )
}

module.exports = { logReqRes }