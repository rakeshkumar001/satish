const math = require('./math')
const { add, sub } = require('./math') // Destructure way of writing

console.log('Math addition value is :- ', math.add(2, 3))
console.log('Math subtraction value is :- ', math.sub(2, 3))
console.log('Math subtraction value is :- ', sub(2, 3)) // with destructure approach
console.log(math)
// O/P
// Math addition value is :-  5
// Math subtraction value is :-  -1
// { add: [Function: add], sub: [Function: sub] }