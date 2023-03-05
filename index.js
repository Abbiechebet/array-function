//Question 1
/**
Differences between mutating and non-mutation array methods in JavaScript.
List 5 array methods that fall under each of them.

*Mutating methods change the object after the method has been used.
examples: Array.prototype.pop()
          Array.prototype.push()
          Array.prototype.shift()
          Array.prototype.unshift()
          Array.prototype.reverse()
          Array.prototype.sort()
          Array.prototype.splice()
          Array.prototype.copywithin()
          
*Non-mutating methods do not change the object after the method has been 
used.
examples:  Array.prototype.slice()
           Array.prototype.concat()
           Array.prototype.map()
           Array.prototype.filter()
           Array.prototype.indexOf()
 */

//Question 2
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
//Add ‘Kotlin’ to the end of the array
languages.push('Kotlin');
console.log({languages});
//[ 'C#', 'JavaScript', 'Ruby', 'PHP', 'Python', 'Kotlin' ]

//Add ‘Java’ after ‘Ruby’
languages.splice(3,0,'Java');
console.log({languages});
//[ 'C#', 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ] 

//Remove the first item in the array
languages.shift();
console.log({languages});
// [ 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin' ]

//Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift('Scala', 'Swift');
console.log({languages});
//[ 'Scala','Swift','JavaScript', 'Ruby','Java','PHP','Python','Kotlin']

//Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5, 1,'Go', 'Rust');
console.log({languages});
// ['Scala', 'Swift','JavaScript', 'Ruby','Java', 'Go','Rust','Python','Kotlin']


//Question 3
//What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
    console.log({fruit}); // [ 'apple', 'mango', 'banana' ]

//Question 4
/**
function that accepts an array of numbers as an argument. 
Return the maximum value in the array.
e.g., max([4, 5, 10, -2]) // maximum value is 10
 */
const numbers = [1, 3, 2,-2,-10,7,8 ];
console.log('maximum value is ' + Math.max(...numbers));//maximum value is 8


//Question 5
/**
function called valTimesIndex which accepts an array of numbers 
returns a new array with each value multiplied by its index in the array 
 example: valTimesIndex([1,2,3]) // [0,2,6]
		      valTimesIndex([5,10,15]) // [0,10,30]
 */
          function valTimesIndex(arr){
            return arr.map(function(value,index,array){
          return value*index;
        });  
      }
      console.log(valTimesIndex([6,8,12]));//[ 0, 8, 24 ]
      