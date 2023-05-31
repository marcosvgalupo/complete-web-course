function rand( { min = 0, max = 1000} ){
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

const random = {
    max: 50,
    min: 40
}

const random2 = {
    min: 30
}

console.log(rand(random));
console.log(rand(random2)) //max is set to 1000 by default in rand function