//Constant values never change

const weight1 = 1.0
const weight2 = Number('2.0')
const weight3 = 1.5

console.log("Weight 1: ",weight1, "   Weight 2: ", weight2)
console.log("Weight 1 is integer?  ",Number.isInteger(weight1))
console.log("Weight 2 is integer?  ",Number.isInteger(weight3))

const exam1 = 9.871
const exam2 = 6.871

const total = (exam1 * weight1) + (exam2 * weight2)
const mean = total / (weight1+weight2)

console.log("Mean: ", mean)
console.log("Mean (1 casa): ", mean.toFixed(1)) // limitates 1 number in fractional part
console.log("Mean (2 casas): ",mean.toFixed(2)) // limitates 2 numbers in fractional part
console.log("Mean (3 casas): ",mean.toFixed(3)) // limitates 3 numbers in fractional part
console.log("Mean (original value): ", mean.toString()) // print origial mean without fractional part limitation
console.log("Mean (binary value): ", mean.toString(2)) // print binary mean