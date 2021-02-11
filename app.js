// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const addInput = document.getElementById('add-input');
const addIntoInput = document.getElementById('add-into');
const addButton = document.getElementById('add-button');
const addTotal = document.getElementById('add-total');

// console.log(addInput, addIntoInput, addButton, addTotal, sumDisplay)

addButton.addEventListener('click', () =>{
    const solution = Number(addInput.value) + Number(addIntoInput.value);
addTotal.textContent = solution;
// console.log(solution);
});


const subInput = document.getElementById('sub-input');
const subIntoInput = document.getElementById('sub-into');
const subButton = document.getElementById('sub-button');
const subTotal = document.getElementById('sub-total');

subButton.addEventListener('click', () =>{
    const subSolution = Number(subInput.value) - Number(subIntoInput.value);
subTotal.textContent = subSolution;
// console.log(solution);
});


const multInput = document.getElementById('mult-input');
const multIntoInput = document.getElementById('mult-into');
const multButton = document.getElementById('mult-button');
const multTotal = document.getElementById('mult-total');

multButton.addEventListener('click', () =>{
    const multSolution = Number(multInput.value) * Number(multIntoInput.value);
multTotal.textContent = multSolution;
// console.log(solution);
});

const divInput = document.getElementById('div-input');
const divIntoInput = document.getElementById('div-into');
const divButton = document.getElementById('div-button');
const divTotal = document.getElementById('div-total');

divButton.addEventListener('click', () =>{
    const divSolution = Number(divInput.value) / Number(divIntoInput.value);
divTotal.textContent = divSolution;
// console.log(solution);
});