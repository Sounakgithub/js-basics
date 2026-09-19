const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

//combine two objects using Object.assign()
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)

//when array of objects come from a database
const users = [
    {
        id:1,
        email:"s@123"
    },
    {
        id:2,
        email:"a@123"
    }
]
console.log(users[0].id)
//to find the keys and values of an object***imp***
const tinderuser = {
    name:"sounak",
    id:256,
    mail:"o@123"

}
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))