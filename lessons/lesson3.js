// Objects -  they are in brackets and saved in key and value pairs separeted by collon and each pair separeted by comma

var customer = {
    firstName: "John",
    lastName: "Smith"
}
console.log(customer)

// Dot notaion
console.log(customer.firstName)
console.log(customer.lastName)

customer.firstName = "Mike"
// Bracket notation
customer['lastName'] = "Silva"
console.log(`${customer.firstName} ${customer.lastName}`)



// Arrays - index always start in 0 - they are separeted by square brackets
var car = ["Volvo", "Toyota", "Tesla"]

console.log(car[0])
console.log(car[1])
console.log(car[2])

car[1] = "BMW"

console.log(car[1])


// Objects also may have arrays

var customer = {
    firstName: "John",
    lastName: "Smith",
    car: ["Volvo", "Toyota", "Tesla"]
}
console.log(customer.car[1])