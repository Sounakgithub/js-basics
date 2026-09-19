let a = 300//global scope
if(true){
    let a=3//Block scope
    console.log("INNER: ",a)
}
console.log("OUTER:",a) 