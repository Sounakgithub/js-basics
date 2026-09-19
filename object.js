//singleton => when the object is made by the constructor then it made a singleton , when it mede by literals it don't make a singleton.
//Object.create(singleton forms in this case)
//object literals

//using symbols
const sym = Symbol("key1")


const user = {
    name:"Sounak",
    [sym]:"mykey1",
    age:20,
    location:"Kolkata",
    email:"sounak@google.com",
    isLoggedIn:true,
    lastLogin:["Monday","Thursday"]
}
//Both prints the same result
//console.log(user.name)
//console.log(user["name"])
//console.log(typeof user[sym])

//to change some values in an obj
user.email="sounak@opeani.com"
//console.log(user.email)

//To freeze an object(so that no changes can be made)
//Object.freeze(user)
user.age=21  //age will not change
//console.log(user.age)
user.greeting = function(){
    console.log(`hello!this is ${this.name}`)
}
console.log(user.greeting)
console.log(user.greeting())