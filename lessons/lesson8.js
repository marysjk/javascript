// Declarative function

helloOne()
function helloOne(){
    console.log("Hello one!")
}

// Anonymous function

var helloTwo = function(){
    console.log("Hello two!")
}

helloTwo()

//ES6 function syntax or arrow function
var helloThree = () => {
    console.log("Hello three!")
}

helloThree()

// Function with arguments
function printName(name){
    console.log(name)
}
printName("Mariana")

// Function with 1+ arguments
// function printName(name, lastName){
//     console.log(name, lastName)
// }
// printName("Mariana", "Batista")

//function with return
function multiplyByTwo(number){
    var result = number*2
    return result
}

var myResult = multiplyByTwo(10)
console.log(myResult)

//import function
import {printAge} from '../helpers/printHelper.js'
printAge(5)


import { multiplyBy } from '../helpers/printHelper.js'
var theResult = multiplyBy(10)
console.log(theResult)


//import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(37)
