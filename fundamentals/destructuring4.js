function rand( [min = 0, max = 1000] ){
    if(min > max) [min, max] = [max, min];
    const value = Math.random() * (max-min) + min;
    return Math.floor(value);
}

const array = [50,40]; 
console.log(rand(array));
array.pop();

console.log(rand(array)); //after pop, array will contain only 50, that is min in rand function
