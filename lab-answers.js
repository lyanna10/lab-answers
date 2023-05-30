//Easy Going  - Write a for loop that will log the numbers 1 through 20
/*for (let i = 1; i <= 20; i++) {
    console.log(i)
}

//Get Even - Write a for loop that will log only the even numbers in 0 through 200
for (let i = 0; i < 200; i+=2) {
    console.log(i)
}
*/
//Fizz Buzz
let x = []
for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        x.push("FizzBuzz");
    } else if (i % 3 === 0) {
        x.push("Fizz");
    } else if (i % 5 === 0) {
        x.push("Buzz");
    } else {
        x.push(i)
    }
}
console.log(x)
