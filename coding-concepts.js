// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: It will log 10
// b) Verify and explain: It did, and it it because it is counting the amount of characters in the string, or also considered the length of the string, and the space is counted as well. 

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: It will log "o"
// b) Verify and explain: It did, and it is because the square brackets ([]) are asking for the character that is at the index 4 of the string, which is o 

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Because we assigned the word index to be a constant of the index of 1, the index of 1 is assigned to Ruby, because indexes start counting the values inside the array at 0, not 1 

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:["SATURDAY", "SUNDAY"]
// b) Verify and explain: I forgot that toUpperCase only works on strings, as such the code will not run anything and will give an type error because we are trying to run .toUpperCase on an array, which is the wrong type for this built in method 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: typeof is a built in method that asks for the data type of the code, in this case, dataTypes.length is asking for length, which outputs a number that represents the length of the array, thus the output is number. 
