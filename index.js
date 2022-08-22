// Closure is the process of ending a situation, a "process". In javascript it allows you to reiterate through a function that is another function


/**2 a
 * The way we are returning the anonymous function makes me think that there is a closure
 */

/**
 * 2 b
 * The process to calculate it is always the same, the difference is in the outcome
 */

/**
 * 2 c
 * identifying the function and it's relation to the higher function
 */

// Ex 3

function createBase(number) {
  return function addSix(otherNumber) {
    console.log(number + otherNumber);
  }

}




const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27