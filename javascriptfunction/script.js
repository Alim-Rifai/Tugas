// Define Practice
function printHeart() {
    console.log("<3");
}
printHeart();

// Return Value Practice
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(2, 3)); // 6
console.log(multiply(9, 9)); // 81
console.log(multiply(5, 4)); // 20

// Scope Practice A
let animal = "Giant Pacific Octopus";
function observe() {
    let animal = "Pajama Squid";
    console.log(animal); // Output: Pajama Squid
}
observe();

// Scope Practice B
let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    console.log(deadlyAnimal); // Output: Scorpionfish
}
handleAnimal();
console.log(deadlyAnimal); // Output: Blue-Ringed Octopus

// Arrow Function Exercise
const sayHello = (name) => `Hello ${name}!`;
console.log(sayHello("Hagrid")); // "Hello Hagrid!"
console.log(sayHello("Luna")); // "Hello Luna!"
