const obj = {
    username:"Sounak",
    age:20,
    welcome:function(){
        console.log(`${this.username} , welcome!`)
    }
}
obj.welcome()//will print: Sounak , welcome!
obj.username = "Sam"//changed the username
obj.welcome()//will print: Sam, welcome!

/*Arrow functions(syntax)
const arr = ()=>{

}  */
//Implicit arrow func
const sum = (num1,num2)=> num1+num2
console.log(sum(2,3))

//If we use curly braces use return keyword, and if we use parentheses(),return keyword is not required
/*1.const sum = (num1,num2)=>{
    retun num1+num2 
    }
    2.const sum=(num1+num2)=> (num1+num2)*/
//To return objects in arrow functions:
const objreturn = ()=> ({username:"sounak"})
console.log(objreturn())