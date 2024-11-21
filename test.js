const Calculator = require('./test.js');

// FILE: test.test.js


describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should initialize with a value of 0', () => {
        expect(calculator.getCurrentValue()).toBe(0);
    });

    test('should add positive numbers correctly', () => {
        expect(calculator.add(10)).toBe(10);
        expect(calculator.add(5)).toBe(15);
    });

    test('should add negative numbers correctly', () => {
        expect(calculator.add(-10)).toBe(-10);
        expect(calculator.add(-5)).toBe(-15);
    });

    test('should add zero correctly', () => {
        expect(calculator.add(0)).toBe(0);
    });

    test('should add a mix of positive and negative numbers correctly', () => {
        calculator.add(10);
        expect(calculator.add(-5)).toBe(5);
    });
});const Calculator = require('./test.js');

// FILE: test.test.js


describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should initialize with a value of 0', () => {
        expect(calculator.getCurrentValue()).toBe(0);
    });

    test('should add a value correctly', () => {
        calculator.add(10);
        expect(calculator.getCurrentValue()).toBe(10);
    });

    test('should subtract a value correctly', () => {
        calculator.add(10);
        calculator.subtract(5);
        expect(calculator.getCurrentValue()).toBe(5);
    });

    test('should multiply a value correctly', () => {
        calculator.add(10);
        calculator.multiply(3);
        expect(calculator.getCurrentValue()).toBe(30);
    });

    test('should divide a value correctly', () => {
        calculator.add(10);
        calculator.divide(2);
        expect(calculator.getCurrentValue()).toBe(5);
    });

    test('should not divide by zero', () => {
        console.error = jest.fn();
        calculator.add(10);
        calculator.divide(0);
        expect(console.error).toHaveBeenCalledWith("Cannot divide by zero.");
        expect(calculator.getCurrentValue()).toBe(10);
    });

    test('should clear the value correctly', () => {
        calculator.add(10);
        calculator.clear();
        expect(calculator.getCurrentValue()).toBe(0);
    });
});