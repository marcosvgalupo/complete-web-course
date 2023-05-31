//Storing a function in a variable

const printSum = function (a, b) {
    console.log(a+b)
}

printSum(2, 3)

//Storing an arrow function in a variable

const sum = (a, b) => {
return a+b
}

console.log(sum(10,8))

const subtraction = (a, b) => a - b
console.log(subtraction(10, 9))

const arrowOneParameter = a => console.log(a) // arrow function with one parameter
const arrowNoParameter = () => console.log("Hello") // arrow function with no parameter

arrowOneParameter("Testing...")
arrowNoParameter()