const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [n1, , n3, n4, n5, , n7, , , , n11 = 0, n12] = array;

console.log(n1, n3, n4, n5, n7, n11, n12);


const [ , [, , three]] = [[,5,6,7] , [9,6,8]]; //array inside arrays - not usual

console.log(three);