var number = 1
{
  let number = 2
  console.log("Inside = ", number)
}
console.log("Outside = ", number)

/*in js, variables declarated with let respects the following scopes: 
global, function, block; 
differentlly of var, that respects only global and function scopes*/