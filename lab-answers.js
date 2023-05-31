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
/*

let ninja = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
let ninjaTurtles = [];
for (let item of ninja) {
    ninjaTurtles.push(item.toUpperCase());
}
console.log(ninjaTurtles);


//Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf('Titanic'));

//Use the .sort method.
favMovies.sort();
console.log(favMovies); //yes.

//Use the method pop
favMovies.pop();
console.log(favMovies);

//push "Guardians of the Galaxy"
favMovies.push('Guardians of the Galaxy');
console.log(favMovies);


//Reverse the array
let reverseIt = favMovies.reverse();
console.log(reverseIt);

//Use the shift method
favMovies.shift();
console.log(favMovies);

//unshift - what does it return?
console.log(favMovies.unshift());

//splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained" instead of counting it yourself)
favMovies.splice(14, 1, 'Avatar')
console.log(favMovies);

//slice the last half of the array. (Challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it.)
//console.log(favMovies.slice(10))

//Store the value of your slice in a variable and console.log it
let s = favMovies.slice(5, 10);
console.log(s);

//console.log your final results
console.log(favMovies)

//After running the above tasks, console.log the index of "Fast and Furious."
console.log(favMovies.indexOf('Fast and Furious'));

//We removed it from the array. What value do we get when we look for the index of something that is not in the array?
//-1

//Thought Question: We declared the variable favMovies with const, and yet we were allowed to change the array. Weird? Should we have used let?
//I don't believe so, it didn't give me a problem so I don't see the need to change it. 

//Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]];
//Remove Eggbert (hint look at the slice/splice methods)
whereIsWaldo.splice(1, 1);
console.log(whereIsWaldo);
//Change "Neff" to "No One"
whereIsWaldo[2].splice(2, 1, 'No One');
console.log(whereIsWaldo);

//Access and console.log "Waldo".
const waldo = whereIsWaldo[3][1][1];
console.log(waldo);

//Excited Kitten
for (let i = 0; i < 20; i++) {
    console.log("Love me, pet me! HSSSSSS!")
}

//For every even number in your loop, log "...human... why you taking pictures of me...?", "...the catnip made me do it...", or "...why does the red dot always get away...?" at random
const logMessages = [
    "...human... why are you taking pictures of me...?",
    "...the catnip made me do it...",
    "...why does the red dot always get away...?"
  ];

  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      const randomLog = logMessages[Math.floor(Math.random() * logMessages.length)];
      console.log(randomLog);
    } else {
      console.log(i);
    }
  }
  */
  //Find the Median
  //Find the median number in the following nums array, then console.log that number
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
const middleIndex = Math.floor(nums.length / 2);
if (nums.length % 3 === 0) {
  const median = nums[middleIndex];
  console.log(median);
} else {
  const median = (nums[middleIndex + 1] + nums[middleIndex]) / 2;
  console.log(median);
}
// Expected output: 15