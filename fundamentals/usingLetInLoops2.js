const funcs = []

for(let i = 0; i < 10; i ++){
    funcs.push(function(){
        console.log(i)
    })
}

/*
* the output is 2 8, because let respects block scope
*/
funcs[2]()
funcs[8]()