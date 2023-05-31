const person = {
    name: "Marie",
    age: 15,
    adress: {
        street: "abcd",
        number: 1978
    }
}


const { name, age} = person //take out "name" and "age" from person object
console.log(name, age)

const {name: n, age: a} = person
console.log(n, a)

const {last_name, defaultBoolean = true} = person // if defaultBoolean is undefined, by default, yout value is set to true
console.log(last_name, defaultBoolean)

const { adress: {street: s, number: nb}} = person
console.log(s, nb)


