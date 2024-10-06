// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function plural (word){
  return `${word}s`;
}

const pluraled = plural('apple');
console.log(pluraled)

const food = 'pizza';
const pluraledFood = plural(food);
console.log(pluraledFood)