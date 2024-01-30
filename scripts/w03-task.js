/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;    
};

function addNumbers (){
    let addNumber1 = document.getElementById("add1").value;
    let addNumber2 = document.getElementById("add2").value; 
    let result = parseFloat(addNumber1) + parseFloat(addNumber2);
    document.getElementById("sum").value = result;
    
};

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function Subtract (number1, number2) {
    return number1 - number2;    
};

function subtractNumbers (){
    let subNumber1 = document.getElementById("subtract1").value;
    let subNumber2 = document.getElementById("subtract2").value; 
    let result = parseFloat(subNumber1) - parseFloat(subNumber2);
    document.getElementById("difference").value = result;

};

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
const Multiply = (number1, number2) => parseFloat(number1) * parseFloat(number2);

const multiplyNumbers = () => {
    let factor1 = parseFloat(document.getElementById("factor1").value);
    let factor2 = parseFloat(document.getElementById("factor2").value);
    let product = Multiply(factor1, factor2);
    document.getElementById("product").value = product;

};

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
}

const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient;

};

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
function getTotal(){
    let subtotal = parseFloat(document.getElementById("subtotal").value);

    if (document.getElementById("member").checked){
        subtotal = subtotal - subtotal * 0.2;
    }

    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}

document.getElementById("getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Source Array */
document.getElementById("array").textContent = numbersArray.join(',');

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 === 1);

document.getElementById("odds").textContent = oddNumbers.join(',');

/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(number => number % 2 === 0);

document.getElementById("evens").textContent = evenNumbers.join(',');

/* Output Sum of Org. Array */
let sumResult = numbersArray.reduce((accumulator, constantValue) => accumulator + constantValue, 0);

document.getElementById("sumOfArray").textContent = sumResult;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(number => number * 2);

document.getElementById("multiplied").textContent = multipliedArray.join(',');

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multipliedArray.reduce( (sum, number) => sum + number, 0);

document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;
