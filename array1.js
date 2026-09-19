const marvel = ["thor","ironman","superman"]
const dc = ["superman","batman","flash"]

//marvel.push(dc)
//console.log(marvel)

//const mod = marvel.concat(dc)//concat functions joins 2 arrays and stores the value in a new array
//console.log(mod)

//SPREAD(another method instead of concat)
//const all_heroes = [...marvel,...dc]
//console.log(all_heroes)


//Flat method
const another_arr=[1,2,3,[4,5,6],7,[8,9,[10,11]]]

const new_arr=another_arr.flat(Infinity)
console.log(new_arr)

//from(to convert any obj or string into array)
console.log(Array.from("Sounak"))

//Interesting case(in case of objects)
console.log(Array.from({name:"Sounak"})) //you have to specify whether to make an array of keys or values in an object

//Array.of()*to make an array of multiple variables
let arr1 = 100;
let arr2= true;
let arr3 = "sounak";
console.log(Array.of(arr1,arr2,arr3))