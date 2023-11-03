//write the code without if else
//use arrow function
function checkAge(age) {
    return (age > 18) ? true : ('Did parents allow you?')
  }
  console.log(checkAge(17));

//2
//Write a function pow
// that returns x in power
//returns the result

function pow(x, n) {
let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));

//3
//Replace Function Expressions with arrow functions
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question, yes, no) {
    rl.question(question + ' (yes/no) ', (answer) => {
        if (answer.toLowerCase() === 'yes') {
            yes();
        } else {
            no();
        }
        rl.close();
    });
}

ask(
    "Do you agree?",
    () => console.log("You agreed."),
    () => console.log("You canceled the execution.")
);

//4
//Create an object calculator
//read() prompts for two values 
//sum() returns the sum of saved values
//mul() multiplies saved values 
const readlineModule = require('readline');

let calculator = {
  a: 0,
  b: 0,

sum() {
    return this.a + this.b;
  },

mul() {
    return this.a * this.b;
  },

read() {
    const rl = readlineModule.createInterface({
      input: process.stdin,
      output: process.stdout
});

  rl.question('a? ', (a) => {
    this.a = +a;
    rl.question('b? ', (b) => {
      this.b = +b;
      rl.close();
      this.displayResults();
    });
   });
},

displayResults() {
    console.log('Sum:', this.sum());
    console.log('Multiplication:', this.mul());
  }
};

calculator.read();
//5
//write a function
//use arrow function

const min = (a, b) => (a < b) ? a : b;
const result = min(5, 8);
console.log(result);

