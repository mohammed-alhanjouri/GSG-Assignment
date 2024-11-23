// TypeScript Basics

// JavaScript is the runtime language understood and executed by browsers and JavaScript engines, 
// whereas TypeScript can't be executed directly in these environments. Therefore, we need to convert TypeScript code into JavaScript code!

// This process, called Transpilation, by using the TypeScript Compiler (tsc)
// For example, running the command (tsc product.ts) transpiles the TypeScript file (product.ts) into a JavaScript file (product.js).
// (tsc) tool: Performs type-checking and Converts TypeScript code into JavaScript code that can be executed.

// Once transpiled, the JavaScript file can be run in any JavaScript environment, such as browsers, Node.js, or other JavaScript engines.

// Task 4: 
// TypeScript interface

interface Product {
    name: string,
    price: number
}

const productList: Product[] = [
    { name: "Laptop", price: 2500 },
    { name: "Phone", price: 500 }
]

const calcTotalPrice = (products: Product[]): number => products.reduce((acc, currentProduct) => acc + currentProduct.price, 0);

console.log(productList);
console.log(calcTotalPrice(productList)); // 3000


// Task 5: 
// Email Validation using Regular Expression: /^[a-zA-Z0-9](\.?[a-zA-Z0-9_-])*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/

const isValidEmail = (email: string): boolean => {
    const emailStructure: RegExp = /^[a-zA-Z0-9](\.?[a-zA-Z0-9_-])*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    const testEmail: boolean = emailStructure.test(email);
    return testEmail;
}

console.log(isValidEmail("username@domain.com"));  // true
console.log(isValidEmail("invalid-email.com"));    // false