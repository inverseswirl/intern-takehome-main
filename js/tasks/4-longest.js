#! npm test ./tests/4-longest.js

/**
 * Returns the longest string out of an array of strings.
 * @param {Array} strings An array that might contain strings.
 * @returns {String} The longest string from within the input array.
 */
export default function longestString(strings) {

    let longest_string = ''
    let length_object = {}
    strings.map((word)=>{
        if(typeof word === 'string'){
          length_object[word] = word.length   //object with words and their lengths as values.
        }
    })

   const values_array = Object.values(length_object) //get values
   const max_length = Math.max(...values_array) //get max length
   
  for (const word in length_object){
    if(length_object[word] === max_length){ //match word with max_length
      longest_string = word   
      return longest_string
    }
   }

}
    
