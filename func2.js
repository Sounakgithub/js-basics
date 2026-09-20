//In case of nested functions, the child functions can get the access of parent's variables,but the reverse is not true.
function one(){
    const username = "sounak"
    function two(){
        const web = "youtube"
        console.log(username)
    }
    two()
}
one()
//The same concept is also applicable for if-else statements
