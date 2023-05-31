let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1
console.log(!!isActive)

isActive = 0
console.log(!!isActive)

console.log(`
Act like true:`)
console.log(!!3) // integer
console.log(!!-1) // integer
console.log(!!' ') // not null string
console.log(!![]) // array
console.log(!!{}) // object
console.log(!!Infinity) // infinity
console.log(!!(isActive = 33)) // the result of assignment is true, so the all expression is true
console.log(`
Act like false:`)
console.log(!!0)
console.log(!!'') // null string
console.log(!!null) // null
console.log(!!NaN) // Not a Number
console.log(!!undefined)
console.log(!!(isActive = undefined))
console.log(`
Boolean Expressions:`)
console.log(!!( 0 || '' || null || 23)) // result equals true


