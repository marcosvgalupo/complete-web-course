//creating arrays
const values = [7.7, 9, 8.1, 6.5]
console.log(values[0], values[1])
console.log(values[4]) //in JS, try to acess a nonexistent element doenst make error

values[4] = 10
console.log(values)

values[12] = 35
console.log(values)
console.log(`Array size: ${values.length}`)

//Add values to array
values.push({id: 3}, false, null, "Marcos") // you can mix types in the same array, but its not recommended
console.log(values)

values.pop() //delete the last array item
delete values[3] // delete the item in index 3
console.log(values)

console.log(`Array type: ${typeof values}`) // array type is object