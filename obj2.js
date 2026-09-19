//Destructuring of object

const course = {
    coursename:"js course",
    price:"999",
    instructor:"sounak"

}
//just another syntax...
const{instructor,price} = course
console.log(instructor,price)
//use of the above in React(destructuring)
/*const navbar = ({company,date})=>{

}
navbar(company = "sounak",date = "20-11-2026")*/