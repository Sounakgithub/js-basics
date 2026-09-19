let a = 300//global
if(true){
    let a=3//local
    console.log("INNER: ",a)
}
console.log("OUTER:",a) 