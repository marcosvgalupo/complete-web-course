const funcs = []

for(var i = 0; i < 10; i ++){
    funcs.push(function(){
        console.log(i)
    })
}

/*
* the output is 10 10, because var doens't have block scope
*/
funcs[2]()
funcs[8]()