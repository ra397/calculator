function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num1;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    } else {
        return "ERROR";
    }
}

// returns true if the string has an operator (not including the equals operator)
function hasOperator(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === '+'
        || str.charAt(i) === '−' || str.charAt(i) === '×'
        || str.charAt(i) === '÷') {
            return true;
        } 
    }
    return false;
}

function evaluate_expression(str) {
    // find the two numbers and the operator
    let operator_char = '';
    let found_operator = false;

    let firstNum = '';
    let secondNum = '';

    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str.charAt(i)) && !found_operator) {
            firstNum += str.charAt(i);
        }
        if (!isNaN(str.charAt(i)) && found_operator) {
            secondNum += str.charAt(i);
        }
        if (isNaN(str.charAt(i))) {
            operator_char = str.charAt(i);
            found_operator = true;
        }
    }
  
    console.log(operator_char, firstNum, secondNum);
    return operate(operator_char, parseInt(firstNum), parseInt(secondNum));
}

// An array storing user input 
let expression = "";

// create a reference for all number keys
const inputs = document.querySelectorAll('.input');

// create a reference for all operator keys
const operators = document.querySelectorAll('.input.operator');

// create a reference for the display window
const display = document.querySelector('.row.display');

inputs.forEach((input) => {
    input.addEventListener('click', function(e) {
        /*
        Specifications:
        1- cannot input operator if expression is empty
        2- equals operator cannot be first operator in expression
        3- With every operator input:
            - evaluate and update expression
            - display updated expression with the new operator,
            unless the operator was =, then display result only
        */
        // update display using expression
        if (e.target.textContent === '=' || e.target.textContent === '+'
        || e.target.textContent === '−' || e.target.textContent === '×'
        || e.target.textContent === '÷') { // if input is an operator
            if (expression != "") { // cannot input operator if expression is empty
                if (e.target.textContent === '=') {
                    if (hasOperator(expression)) {
                        // evaluate and update expression
                        evaluate_expression(expression);
                    }
                } else {
                    if (hasOperator(expression)) {
                        // evaluate and update expression, append new operator
                        evaluate_expression(expression);
                    } else {
                        expression += e.target.textContent;
                    }
                }
            }
        } else {
            expression += e.target.textContent;
        }
        display.textContent = expression;
    })
});


/* 
  if (!isEmpty(expression) && e.target.textContent === '=' || e.target.textContent === '+'
        || e.target.textContent === '−' || e.target.textContent === '×'
        || e.target.textContent === '÷') {
            expression += ' ';
        }
        if (!isEmpty(expression) && isNaN(expression.charAt(expression.length - 1))) {
            expression += ' ';
        }
*/