//1.
const cars = ['Tesla', 'Mercedes', 'Honda'];
const [randomCar] = cars;
const [, otherRandomCar] = cars;

//Predict the output - No errors: Tesla Mercedes
console.log(randomCar);
console.log(otherRandomCar);

//2.
const employee = {
  name: 'Elon',
  age: 47,
  company: 'Tesla',
};
const { name: otherName } = employee;

//Predict the output - one of the console.log's will throw an error due to referencing a variable that is not
//appropriately named.

// console.log(name); <-- Error
console.log(otherName);

//3.
const person = {
  name: 'Phil Smith',
  age: 47,
  height: '6 feet',
};
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output - not a proper way to attach the person object to the destructured hashedPassword
console.log(password);
console.log(hashedPassword);
console.log(person);

//4.
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output - no this hurts my head I would never in a million years do this.
console.log(first == second); //<-- false
console.log(first == third); //<-- true

//5.
const lastTest = {
  key: 'value',
  secondKey: [1, 5, 1, 8, 3, 3],
};
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key); //<-- value
console.log(secondKey); //<-- display the array
console.log(secondKey[0]); //<-- display 1 at index 0
console.log(willThisWork); //5
