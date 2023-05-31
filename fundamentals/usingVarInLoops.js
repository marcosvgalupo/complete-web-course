for(var i = 0; i < 10; i ++){  //for is block scope
    console.log(i)
  }
  
  console.log("final i value =", i)
  //the output is 10 because "var" variables doesn't respect block scope