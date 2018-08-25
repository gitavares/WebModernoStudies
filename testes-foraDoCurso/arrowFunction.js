/*
Use arrow function syntax to compute the square of only the 
positive integers (fractions are not integers) in the array 
realNumberArray and store the new array in the variable squaredIntegers.
*/

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const filteredIntegers = arr.filter((number) => number > 0 && Number.isInteger(number));
  const squaredIntegers = filteredIntegers.map((number) => Math.pow(number, 2));

    // for(var i = 0; i < squaredIntegers.length; i++){ 
    //     squaredIntegers[i] = Math.pow(squaredIntegers[i],2)
    // }
    

  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);