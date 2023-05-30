//Easy Going  - Write a for loop that will log the numbers 1 through 20
/*for (let i = 1; i <= 20; i++) {
    console.log(i)
}

//Get Even - Write a for loop that will log only the even numbers in 0 through 200
for (let i = 0; i < 200; i+=2) {
    console.log(i)
}

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


//Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

//Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = 5001;
console.log(plantee);

//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City"
console.log(wolfy);

//Give D'Art a second hometown by adding "Hawkins"
dart[4] = "Hawkins"
console.log(dart)

//Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.splice(0, 1, 'Gameboy')
console.log(wolfy)
*/

//Yell at the Ninja Turtles 
//Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
/*const ninja = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
let n = ninja[0].toUpperCase();
for (n === "Donatello" || n === "Leonardo" || n === "Raphael" || n === "Michaelangelo") {

}*/

let ninja = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
let ninjaTurtles = [];
for (let item of ninja) {
    ninjaTurtles.push(item.toUpperCase());
}
console.log(ninjaTurtles);
