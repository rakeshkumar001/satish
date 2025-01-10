function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}


// Also u can write
// exports.add = (a, b) => a + b;
// exports.sub = (a, b) => a - b;


// use MODULE oject to export the required data / function / etc

// module.exports = 'RAKESH'   // will return RAKESH in the console log

// module.exports =  add, sub  // wrong approach

module.exports = { add, sub }  // will pass/ export both function  O/P is { add: [Function: add], sub: [Function: sub] }

// module.exports = {  // way to rename the exported functions o/p **{ addFn: [Function: add], subFn: [Function: sub] }**
//     addFn: add,
//     subFn: sub
// }