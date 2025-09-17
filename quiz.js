// Values, Data Types, and Operations Quiz Application
// This quiz tests knowledge from the module using readline-sync

const readlineSync = require('readline-sync');

// Welcome message and get user's name
console.log("=".repeat(50));
console.log("Welcome to the Values, Data Types & Operations Quiz!");
console.log("=".repeat(50));

// Prompt for user's name and greet them
const userName = readlineSync.question('What is your name? ');
console.log(`\nHello ${userName}! Let's test your knowledge.\n`);

// Initialize variables to store answers
let answer1, answer2, answer3, answer4, answer5;

console.log("Let's begin with 5 questions...\n");

// Question 1: Testing knowledge of data types
console.log("Question 1:");
answer1 = readlineSync.question('What data type is the value true? (string, number, boolean, undefined) ');

// Question 2: Testing type conversion (requires number input)
console.log("\nQuestion 2:");
answer2 = readlineSync.questionInt('What is the result of Number("42") + 8? (Enter a number) ');

// Question 3: Testing string operations
console.log("\nQuestion 3:");
answer3 = readlineSync.question('What operator is used to concatenate strings in JavaScript? ');

// Question 4: Testing variable naming conventions
console.log("\nQuestion 4:");
answer4 = readlineSync.question('Which variable naming convention is preferred in JavaScript? (camelCase, snake_case, PascalCase, kebab-case) ');

// Question 5: Testing falsy values
console.log("\nQuestion 5:");
answer5 = readlineSync.question('Which of the following is NOT a falsy value in JavaScript? (0, "", "false", null) ');

// Display all answers back to the user
console.log("\n" + "=".repeat(50));
console.log(`${userName}, here are your answers:`);
console.log("=".repeat(50));

console.log(`\nQuestion 1 - Data type of 'true':`);
console.log(`Your answer: "${answer1}"`);
console.log(`Data type of your answer: ${typeof answer1}`);

console.log(`\nQuestion 2 - Number("42") + 8:`);
console.log(`Your answer: ${answer2}`);
console.log(`Data type of your answer: ${typeof answer2}`);

console.log(`\nQuestion 3 - String concatenation operator:`);
console.log(`Your answer: "${answer3}"`);
console.log(`Data type of your answer: ${typeof answer3}`);

console.log(`\nQuestion 4 - JavaScript naming convention:`);
console.log(`Your answer: "${answer4}"`);
console.log(`Data type of your answer: ${typeof answer4}`);

console.log(`\nQuestion 5 - NOT a falsy value:`);
console.log(`Your answer: "${answer5}"`);
console.log(`Data type of your answer: ${typeof answer5}`);

// Bonus: Show some additional information about their answers
console.log("\n" + "=".repeat(50));
console.log("BONUS - Analysis of your answers:");
console.log("=".repeat(50));

// Demonstrate type operations with their numeric answer
if (typeof answer2 === 'number') {
    console.log(`\nYour numeric answer (${answer2}) operations:`);
    console.log(`As a string: "${String(answer2)}"`);
    console.log(`As a boolean: ${Boolean(answer2)}`);
    console.log(`Doubled: ${answer2 * 2}`);
}

// Show string length for text answers
console.log(`\nYour name "${userName}" has ${userName.length} characters.`);
console.log(`Answer 1 "${answer1}" has ${answer1.length} characters.`);

// Demonstrate concatenation
const summary = "Quiz completed by " + userName + " with " + 5 + " questions answered!";
console.log(`\nSummary: ${summary}`);

console.log("\n" + "=".repeat(50));
console.log("Thank you for taking the quiz!");
console.log("=".repeat(50));