const usingString = "test"

console.log(usingString.charAt(2)) // return the character is index 2
console.log(usingString.charAt(5)) // doesnt make error in acessing nonexistent character

console.log(usingString.charCodeAt(3)) // return the ASCII value of the character in index 3
console.log(usingString.indexOf('e')) // return in witch index is the character

console.log(usingString.substring(2)) // return a "substring" with the posters characters of index 2. [2,en/d]
console.log(usingString.substring(1,3)) // the end and beggining of the "substring" is passed as parameter. [1,3[

console.log('New text: '.concat(usingString).concat('!'))
console.log(usingString.concat("New text "). concat("!"))
console.log('New text: ' + usingString + "!") 
console.log("3" + 2) // return 32, because the concatenation prevails over the sum

console.log(usingString.replace(2, 'm')) // replace the character in index 2 for 'm'
console.log(usingString.replace(/\d/g, 'm')) // replace all the characters for 'm'
console.log(usingString.replace(/\w/g, 'm')) // replace all the characters and digits for 'm'

console.log('Marcos, Vyctor, Fonseca'.split(',')) // push in array the strings sperating them with ','