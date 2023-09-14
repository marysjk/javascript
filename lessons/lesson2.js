// Concatenation and Interpolation
var price = 50
var itemName = "cup"

var messageToPrint = "The price for your "+itemName+" is "+price+" dollars" //concatenation
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars` //Interpolation
console.log(messageToPrint)
console.log(messageToPrint2)