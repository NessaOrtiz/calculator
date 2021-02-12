// import functions and grab DOM elements

import { add, subtract, multiply, divide } from './utilities.js'

function getNumber(input) {
    return Number(input.value);
}

function initOperator(firstInputId, secondInputId, buttonId, solutionId, calculation) {
    const input1 = document.getElementById(firstInputId);
    const input2 = document.getElementById(secondInputId);
    const button = document.getElementById(buttonId);
    const display = document.getElementById(solutionId);

button.addEventListener('click', () =>{
    display.textContent = calculation(getNumber(input1), getNumber(input2));
});
}

initOperator('add-input', 'add-into', 'add-button', 'add-total', add);
initOperator('sub-input', 'sub-into', 'sub-button', 'sub-total', subtract);
initOperator('mult-input', 'mult-into', 'mult-button', 'mult-total', multiply);
initOperator('div-input', 'div-into', 'div-button', 'div-total', divide);

