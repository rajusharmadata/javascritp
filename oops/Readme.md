/**
 * Comprehensive JavaScript OOP Guide
 *
 * This example covers key OOP concepts:
 * 1. Classes and Objects
 * 2. Constructor
 * 3. Inheritance
 * 4. Encapsulation
 * 5. Polymorphism
 * 6. Static Methods
 * 7. Getter and Setter
 * 8. Composition
 * 9. Method Overriding
 * 10. Prototype-based Inheritance
 */

// 1. Basic Class Declaration
class Person {
    // Constructor
    constructor(name, age) {
        // Encapsulation: Private properties (using '_' convention)
        this._name = name;
        this._age = age;
    }

    // 2. Getter Methods (Encapsulation)
    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    // 3. Setter Methods (Encapsulation)
    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        }
    }

    // 4. Instance Method
    introduce() {
        return `Hi, I'm ${this._name} and I'm ${this._age} years old.`;
    }

    // 5. Static Method (belongs to class, not instance)
    static compareAges(person1, person2) {
        return person1.age - person2.age;
    }
}

// 6. Inheritance
class Employee extends Person {
    constructor(name, age, jobTitle, salary) {
        // Super call to parent constructor
        super(name, age);

        // Additional properties
        this._jobTitle = jobTitle;
        this._salary = salary;
    }

    // 7. Method Overriding
    introduce() {
        // Calling parent method and extending
        return `${super.introduce()} I work as a ${this._jobTitle}.`;
    }

    // 8. Getter for salary with encapsulation
    get salary() {
        return this._salary;
    }
}

// 9. Composition
class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    // Method to add employees
    addEmployee(employee) {
        this.employees.push(employee);
    }

    // Method demonstrating composition
    listEmployees() {
        return this.employees.map(emp => emp.introduce());
    }
}

// 10. Abstract Class Simulation (JavaScript doesn't have native abstract classes)
class Shape {
    // Abstract method (must be overridden)
    calculateArea() {
        throw new Error("Method 'calculateArea()' must be implemented.");
    }
}

// 11. Concrete implementation of Shape
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    // Implementing abstract method
    calculateArea() {
        return this.width * this.height;
    }
}

// 12. Prototype-based Inheritance (Traditional JavaScript approach)
function Vehicle(make, model) {
    this.make = make;
    this.model = model;
}

Vehicle.prototype.start = function() {
    return `${this.make} ${this.model} is starting`;
};

function Car(make, model, color) {
    // Calling parent constructor
    Vehicle.call(this, make, model);
    this.color = color;
}

// Prototype chain inheritance
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// 13. Demonstrating Polymorphism
class PaymentProcessor {
    processPayment(amount) {
        console.log(`Processing payment of $${amount}`);
    }
}

class CreditCardProcessor extends PaymentProcessor {
    processPayment(amount) {
        console.log(`Processing credit card payment of $${amount}`);
        // Additional credit card specific logic
    }
}

class PayPalProcessor extends PaymentProcessor {
    processPayment(amount) {
        console.log(`Processing PayPal payment of $${amount}`);
        // Additional PayPal specific logic
    }
}

// Demonstration Function
function demonstrateOOPConcepts() {
    // Creating instances
    const john = new Person("John Doe", 30);
    console.log(john.introduce());

    const alice = new Employee("Alice Smith", 35, "Software Engineer", 85000);
    console.log(alice.introduce());

    // Composition
    const techCorp = new Company("Tech Corp");
    techCorp.addEmployee(alice);
    console.log(techCorp.listEmployees());

    // Shape and Area
    const rect = new Rectangle(5, 10);
    console.log(`Rectangle Area: ${rect.calculateArea()}`);

    // Prototype-based Vehicle
    const myCar = new Car("Toyota", "Camry", "Blue");
    console.log(myCar.start());

    // Polymorphism
    const processors = [
        new CreditCardProcessor(),
        new PayPalProcessor()
    ];

    processors.forEach(processor => processor.processPayment(100));
}

// Run the demonstration
demonstrateOOPConcepts();

// Export for potential module usage
module.exports = {
    Person,
    Employee,
    Company,
    Shape,
    Rectangle,
    Vehicle,
    Car,
    PaymentProcessor
};
