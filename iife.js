//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS: To prevent the global scope from polluting other functions
(function chai(){
    //named iife
    console.log("DB CONNECTED!")
})();  /*USE SEMI COLON OTHERWISE ERROR WILL OCCUR */
((name)=>{
    console.log(`DB CONNECTED ${name} `)
})("sounak");