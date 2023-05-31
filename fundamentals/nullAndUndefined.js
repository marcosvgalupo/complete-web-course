const object1 = {
    name: "Marcos"
}

console.log(object1)

const object2 = object1
object2.name = "New String"

//object1 changed together with object 2
//object1 e object2 keeps the address of 'name'
console.log(`object2 with modified string: `,object2)
console.log(`òbject1 after modifying object2's string: `, object1)

let number = 3
let copyiedNumber

copyiedNumber = number
copyiedNumber++
//'number' didnt change because its a primitive value, so was assigned to 'copyiedNumber' a copy of 'number'
console.log(`Copyied number value: `, copyiedNumber)
console.log(`Number value: `, number)


/*
undefined concept
*/
let value // not started
console.log(value)

value = null // has no address, no value
console.log(value)
//console.log(valor.toString())  ERROR! Cant acess properties of an null element 

const product = {}
console.log(product.price) // undefined because price was not defined yet
//console.log(produto.preco.test) ERROR! Cant acess a propertie of a undefined element

product.price = 3.50
product.name = "test"
console.log(product)
delete product.price // delete price
console.log(product)
