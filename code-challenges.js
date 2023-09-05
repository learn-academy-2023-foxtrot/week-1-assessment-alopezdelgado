// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

// Pseudo code:
    // name: boilingPoint
    // input: a number, that represents the boiling point
    // output: a string, that tells the user wether the inputted number was above, below or at the boiling point
    // process: take the number, create an if else statement to determine where the number is at in regards to the boiling point and create an output that tells the user where the number is in regards to the boiling point. Use string interpolation to add the value to the string output. 
        
        const boilingPoint = (number) => {
            if (number === 212) {
                return `The number ${number} is at boiling point`
            } else if (number > 212) {
                return `The number ${number} is above boiling point`
            } else if (number < 212) {
                return `The number ${number} is below boiling point`
            } else {
                return "Please give a temperature in the form of a number"
            }
        }
        console.log(boilingPoint(temperature1))
        console.log(boilingPoint(temperature2))
        console.log(boilingPoint(temperature3))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
    // process: use a built in method that is coded to combine two arrays (concat) to combine the two arrays, then after concat, add .length to get the length of the combined array, use console.log to log into terminal

    console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)
    
// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Foxtrot 2023"
// Expected output: "3202 tortxoF"

// Pseudo code:
    // process: use the built in method .split to convert currentCohort into an array, put only "" in the parentheses of .split so that the letters are separated by a comma, then use .reverse to reverse the letters.Then, use .join to return to a string Use console.log to log into terminal
        console.log(currentCohort.split("").reverse().join(""))

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// Pseudo code:
    //process: use built in method .lastIndexOf to find the last index of the numbers
        console.log(numberOfConnections.lastIndexOf(givenValue1))
        console.log(numberOfConnections.lastIndexOf(givenValue2))
