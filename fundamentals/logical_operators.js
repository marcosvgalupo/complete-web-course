function shopping(job1, job2){
    const buyIceCream = job1 || job2;
    const buyComputer = job1 && job2;
    const buyTV = !!(job1 ^ job2); //bitwise xor - is the same thing as job1 != job2
    const beHealthy = !buyIceCream;
    
    return {buyIceCream, buyComputer, buyTV, beHealthy};
    /**
     * returns an object with the key being the name of the constants and the value 
     * itself assigned above
     */
}

console.log(shopping(true, false));