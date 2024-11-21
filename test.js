class Calculator {
    constructor() {
        this.currentValue = 0;
    }

    add(value) {
        this.currentValue += value;
        return this.currentValue;
    }

    subtract(value) {
        this.currentValue -= value;
        return this.currentValue;
    }

    multiply(value) {
        this.currentValue *= value;
        return this.currentValue;
    }

    divide(value) {
        if (value === 0) {
            console.error("Cannot divide by zero.");
            return this.currentValue;
        }
        this.currentValue /= value;
        return this.currentValue;
    }

    clear() {
        this.currentValue = 0;
        return this.currentValue;
    }

    getCurrentValue() {
        return this.currentValue;
    }
}

// Example usage:
const calculator = new Calculator();

console.log("Initial value:", calculator.getCurrentValue());
console.log("Add 10:", calculator.add(10));
console.log("Subtract 5:", calculator.subtract(5));
console.log("Multiply by 3:", calculator.multiply(3));
console.log("Divide by 2:", calculator.divide(2));
console.log("Clear:", calculator.clear());
console.log("Final value:", calculator.getCurrentValue());