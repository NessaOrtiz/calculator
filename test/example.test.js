// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, subtract, multiply, divide} from '../utilities.js'

const test = QUnit.test;


test('adds two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 3;
    const y = 4;
    const sum = 7;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, sum);
});

test('subtract two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 6;
    const y = 4;
    const sum = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = subtract(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, sum);
});

test('multiplies two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 3;
    const y = 4;
    const sum = 12;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = multiply(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, sum);
});

test('divides two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 8;
    const y = 2;
    const sum = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = divide(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, sum);
});