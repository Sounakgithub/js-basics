//Use of rest operator
function shoppingcart(...user1){
    return user1
}
//console.log(shoppingcart(100,200,300,400))

//Passing of object into a function 
const user = {
    name:"Sounak",
    age:20
}
function handleObject(anyobject){
    console.log(`Name: ${anyobject.name}, Age:${anyobject.age}`)
}
//handleObject(user)
/*handleObject({
    name:"Sam",age:"21"
})*/
//Passing of arrays in functions
const arr  =[1,2,3,4,5]
function display(num){
    return num[1]
}
const st = display(arr)
console.log(st)