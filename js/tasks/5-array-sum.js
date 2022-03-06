#! npm test ./tests/5-array-sum.js

/**
 * Sums all integers in a nested array, no matter how many levels deep.
 * @param {Array} startOfTree An array containing other arrays, ints, strings..
 * @returns {Number} The sum of all integers contained in the input, at any level.
 */
export default function arraySum(startOfTree) {
  let sum = 0
  let flat_array = startOfTree.flat(Infinity) //flattens deep nested arrays to single level
    
  flat_array.map((element)=>{
    if(typeof element === 'number'){  //ignores any other data type other than number
        sum += element  //adds all integers
    }
   })
   
   return sum;

}


