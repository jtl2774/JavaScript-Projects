// Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
// Prints "Tesla"
console.log(otherRandomCar)
// Prints "Mercedes"

// Although the name randomCar seems like it should select one random car from the list, it should just print the first item 
// in the list based on the list's inherent order.

// The comma indicates that it is skipping the first item and preceding to print the second. 

// Problem 2 
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
// Should throw an error - name is not defined 
console.log(otherName);
// Should print "Elon"

// Need to reference otherName in console.log rather than name in order to print - assigning name to another variable essentially

// Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
// Prints 12345 
console.log(hashedPassword);
// Shows up as undefined 

// Password prints because declaring new variable 
// Hashed password doesn't print anything because it does not already exist in Person object

// Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
// Prints false 
console.log(first == third);
// Prints true 

// The first number is 2 
// The second number is 5 
// 2 is not equal to 5 

// The third number is 2 
// 2 is equal to 2 

// Problem 5 
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
// Prints 'value'
// key in lastTest object is set to 'value'
console.log(secondKey);
// Prints [1,5,1,8,3,3]
// secondKey in lastTest object is set to whole array 
console.log(secondKey[0]);
// Prints 1 
// Finds first item in array and prints the number at that index 
console.log(willThisWork);
// Prints 5
// Skips over first item in array and prints second item in array 




