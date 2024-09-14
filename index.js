function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
}

function isEven(number) {
    return number % 2 === 0;
}

function factorial(n) {
    if (n < 0) {
        return -1;
    } else if (n === 0) {
        return 1;
    } else {
        return (n * factorial(n - 1));
    }
}

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}

const users = [
    { name: "John", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 35 },
];

function getUsersOverAge(age) {
    return users.filter(user => user.age > age);
}

function printUserNames() {
    users.forEach(user => console.log(user.name));
}

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function average(arr) {
    return sumArray(arr) / arr.length;
}

const numbers = [5, 10, 15, 20, 25, 30];

function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}

function filterEvenNumbers(arr) {
    return arr.filter(isEven);
}

const person = {
    name: "Jane",
    age: 28,
    greet: function() {
        return "Hello, my name is " + this.name;
    },
};

function incrementAge(person) {
    person.age += 1;
}

function setPersonName(person, newName) {
    person.name = newName;
}

const cars = ["BMW", "Audi", "Mercedes", "Tesla"];

function printCars() {
    cars.forEach(car => console.log(car));
}

function addCar(car) {
    cars.push(car);
}

function removeCar(car) {
    const index = cars.indexOf(car);
    if (index > -1) {
        cars.splice(index, 1);
    }
}

function findCar(car) {
    return cars.includes(car);
}

const randomNumbers = [3, 7, 12, 19, 22, 29];

function sumOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0).reduce((acc, curr) => acc + curr, 0);
}

function findFirstOddNumber(arr) {
    return arr.find(num => num % 2 !== 0);
}

function reverseArray(arr) {
    return arr.reverse();
}

function createPerson(name, age) {
    return {
        name,
        age,
        greet: function() {
            return "Hi, I'm " + this.name + " and I'm " + this.age + " years old.";
        }
    };
}

function printPersonDetails(person) {
    console.log(person.greet());
}

function squareNumbers(arr) {
    return arr.map(num => num * num);
}

function cubeNumbers(arr) {
    return arr.map(num => num * num * num);
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function sortNumbers(arr) {
    return arr.sort((a, b) => a - b);
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function filterPrimeNumbers(arr) {
    return arr.filter(isPrime);
}

function printNumbers(arr) {
    arr.forEach(num => console.log(num));
}

function multiply(a:number, b:number){
    return a*b;
}
function sum(a:number, b:number){
    return a+b;
}
function subtract(a:number, b:number){
    return a-b;
}
function divide(a:number, b:number){
    if(b === 0){
        return "Cannot divide by zero!";
    }
    return a/b;
}
