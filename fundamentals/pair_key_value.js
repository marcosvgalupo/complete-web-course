const hello = "Hello" //first context

function exec(){   //second context
    const hello = "Hello"
    return hello
}

//Objects are groups that have the pair key/value

const client = {
    name: "Jhon",
    age: 18,
    last_name: "Zuckenberg",
    adress: {
        street: "Very nice",
        number: 78,
        neighbourhood: "Brooklyn",
        city: "New York"
    }
}

console.log(hello)
console.log(exec())
console.log(client)