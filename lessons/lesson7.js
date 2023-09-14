// for loop

for(let i=0; i<5; i++){
    console.log("Hello World!" +i)
}

//statement 1 - index begning of cursor
//statement 2 - max repetition
//statement 3 - increse by 1


//for of loop

var cars = ["Tesla", "Volvo", "Toyota"]
for(let i of cars){
    console.log(i)
}

//i as for iterator can be named the way you liked
//to break the loop when find a match

var cars = ["Tesla", "Volvo", "Toyota"]
for(let i of cars){
    console.log(i)
    if(i=="Volvo"){
        break
    }
}

//ES6 syntax for each loop - uses forEach method
cars.forEach( i => {
    console.log(i)
})
