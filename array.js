// The fundamental difference between slice() and splice() is that:

// slice() copies elements into a new array without changing the original array,
// whereas splice() permanently modifies (mutates) the original array by adding, removing, or replacing elements.
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"]

const slicedFruits = fruits.slice(1,3)// Copies elements from index 1 to 3 (index 4 excluded)
console.log(slicedFruits)


const splicedFruits = fruits.splice(1,3)// Removes 3 elements starting from index 1)
console.log(splicedFruits)
console.log(fruits)


