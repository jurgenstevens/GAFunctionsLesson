// Welcome To Functions
// This is a comment. You can use these to pseudocode and can create comment slashes quickly by using command + /
// Let's begin!

//LESSON Create a function that says "Hello World" when invoked
function sayHello(){
    console.log("Hello World!")
}
// Invoke the function
sayHello()

// PRACTICE:Create a function that multiplies two numbers in the parameter
function multiply(num1, num2) {
    console.log(num1 * num2)
}
// Invoke the function with two numbers set as arguments
multiply(9, 5)

// PRACTICE: Write a function that tells me who you are.
function myNameIs(name){
    console.log("Hello my name is " + name + ".")
    console.log(`Hello my name is ${name}.`)
}
myNameIs("Jurgen")
myNameIs("Matthew")



// PRACTICE: Create a function that will capitalize any argument taken.
function capitalizeMe(input){
    const capitalized = input.toLowerCase()
    console.log(capitalized)
}
// Invoke the function with a string
capitalizeMe("Hello world")
capitalizeMe("I LOVE PIZZA." + capitalizeMe);



// BONUS: Use conditionals in a function i.e.: if, else if & else
function fizzBuzz(){
    for (let i = 1; i <= 30; i++) { 
        if(i % 3 === 0 && i % 5 === 0){
            console.log("Fizz Buzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

fizzBuzz()