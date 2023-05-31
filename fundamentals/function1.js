// funcao sem retorno
function printSum(a,b){
    console.log(a+b)
}

printSum(4,5)
printSum(4) // passing just one parameter, the function will do 4 + undefined = Not a Number
printSum()


function sum(a, b = 1){
    return a+b
}

let result = sum(4,5)
console.log(result)
result = sum(4)
console.log(result) // return 5 because the b parameter is set to one by default


