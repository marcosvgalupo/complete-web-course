function treatError(error){
    throw new Error ("Error in object key");
    //throw true;
    //throw 10;
    /**
     * throw {
     *      name: erro.name,
     *      msg: erro.message,
     *      date: new Date
     * }
     */
}



function printNameUpperCase(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    }
    catch(e){
        treatError(e);
    }
    finally{
        console.log("Finally....") // finally block is always executated
    }
}

const obj = {
    namee: 'Robert'
};

printNameUpperCase(obj);