
const name = 'Marcos'
const concat = "Hello " + name + " !"

//Using `` all the spaces are considered in console.log, like spaces, tab, break lines, etc
const templateString = `

    Oi
    ${name}
`

console.log(concat, templateString)

//expressions

console.log(` 1 + 1 = ${1+1}`) // what is enclosed {} its interpreted like an operation

//its possible call functions inside templateStrings
const up = texto => texto.toUpperCase()
console.log(`Hey, ${up('be careful')}`)
