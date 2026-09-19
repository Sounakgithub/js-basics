//Destructuring of object

const course = {
    coursename:"js course",
    price:"999",
    instructor:"sounak"

}
//just another syntax...
const{instructor,price} = course
console.log(instructor,price)