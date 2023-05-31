console.log(Math.ceil(6.1))

const object1 = {}
object1.name = "John"
//object1['name'] = "John"

console.log(object1.name)

function Obj(name) {
    this.name = name
    this.exec = function(){
        console.log("Exec...")
    }
}

const obj2 = new Obj('Chair')
const obj3 = new Obj('Table')
console.log(obj2.name)
console.log(obj3.name)
console.log(obj3.exec())

