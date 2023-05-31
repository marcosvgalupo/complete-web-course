//Object is a combination of keys and values
//creating objects dynamically
const product1 = {}
product1.name = "Smart TV"
product1.price = 4998.90
product1['Full discount'] = 0.40 // avoid atributtes with spaces

console.log(product1)
console.table(product1)


const product2 = {
    name: "Polo T-Shirt",
    price: 79.90,
    discount: 0.40,
    object: {
        acessTest: 'Test',
        object2: {
            insideObject2Test: 'Inside'
        }
    }
}

console.table(product2)

product2.name = "Marcos"
console.table(product2)