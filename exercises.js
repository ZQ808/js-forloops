/* 1) Ticket Generator
Write a for-loop that will iterate through 20 numbers (starting at 1 and ending at 20) and console.log the following message:
"Now serving 1."
"Now serving 2."
"Now serving 3."
.
.
.
"Now serving 20."
*/

for (var i=1; i<21; i++){
  console.log("Tickets:", "Now serving " + i);
}

for (var i=20; i<31; i++){
  console.log("Numbers:", "Now dating " + i);

}
 
for (var i=100; i<111; i++){
  console.log("Autographs:", "Now signing " + i);
    
} 
 
 for (var i=800; i<811; i++){
  console.log("Signatures:", "Now calling " + i);

}   

for (var i=348; i<359; i++){
  console.log("Notes:", "Now taking " + i);

}

/* 2) Pop Charts
Write a for-loop that will iterate through the topFive array below and console.log the following message:
This week's chart buster is: 'Closer.'
This week's chart buster is: 'Starboy.'
This week's chart buster is: 'I Feel It Coming.'
This week's chart buster is: 'Let Me Love You.'
This week's chart buster is: '24K Magic.'
*/

var topFive = ["Closer", "Starboy", "I Feel It Coming", "Let Me Love You", "24K Magic"];

function topSongs(song){
  for (var i = 0; i<song.length; i++)
    console.log("song:", song [i]);
} 
topSongs(topFive);


var newDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function anotherDay(whatDay){
for (var i=0; i<whatDay.length; i++)
console.log("whatDay:", whatDay [i]);
}
anotherDay(newDay);


var newCard = ["Ace", "King", "Queen", "Jack", "Joker"];

function anotherCard(getCard){
  for (var i=0; i<getCard.length; i++)
    console.log("getCard:", getCard [i]);
}
anotherCard(newCard);


var newBike = ["Yamaha", "Honda", "Triumph", "Ducati", "Harley"];

function gottaBike(getBike){
for (var i=0; i<getBike.length; i++)
  console.log("getBike:", getBike [i]);
}
gottaBike(newBike);


var newCar = ["Corvette", "WRX", "GTO", "370Z", "Porsche"];

function goodCar(getCar){
for (var i=0; i<getCar.length; i ++)
console.log("getCar:", getCar [i]);
}
goodCar(newCar);

/* 3) Dead Presidents
Declare a variable named `presidents` and assign it to an array containing the following Presidents: Washington, Adams, Jefferson, Madison and Monroe.
 
Write a for-loop that will iterate through this array and within the for-loop console.log the following:
The value at 0 is Washington.
The value at 1 is Adams.
The value at 2 is "Jefferson.
The value at 3 is "Madison.
The value at 4 is Monroe.

Next, console.log the length of the array.

3-A) Create a function named leaders which will take in a parameter: `person`.
   @param Datatype: String `person`
 
This function will iterate through the person parameter and console.log the following message for each item in the array:

"President person was a great leader."
*/

var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];

for (var i = 0; i<presidents.length; i++){
  console.log("The value at " + i + " is " + presidents[i]);
} 

console.log("prezLength:", presidents.length);


function leaders(person){

  for (var i=0; i<person.length; i++){
    console.log("President " + person[i] + " was a great leader.");
  }

}
leaders(presidents);

/* 4) Line Number
Declare a variable named `stringOfNumbers` and assign its value to an empty string. 

Write a for-loop that concatenates a Number value into that string on each iteration, starting at `10` and continuing up to and including `20`. Console.log your result. It should read "1011121314151617181920"*/

var stringOfNumbers = "";

for (var i=10; i<21; i++){
  stringOfNumbers += i;
}
console.log(stringOfNumbers);

/* 5) Even Stevens
Declare a variable named `evenNumArr` and assign its value to an empty array. 

Write a for-loop that will push even numbers to the `evenNumArr` array. We want to push 50 even even numbers starting from 0.
Console.log your results.
*/

var evenNumArr = [];

for (var i=0; i<100; i++){
  if(i%2===0){
    evenNumArr.push(i);
  } 
}
console.log(evenNumArr);

/* 6) Up the Odds
Declare a variable named `oddSum` and assign it to the Number value 0.

Write a for-loop that will sum up odd numbers to the `oddSum` variable. We want to add 50 odd numbers starting from 1.
Console.log your results.
*/
  
  var oddSum =0;

for (var i=1; i<100; i++){
if (i%2===1){
  oddSum +=i;
}
}
console.log(oddSum);

/* 7) Oops There It is
Declare a variable named `oopsArray` and assign its to the following array: `[ 'turn' , , 'down' , , 'for' , , 'what' ]`.
Note that every odd index value in `oopsArray` is currently `undefined`. Using a for-loop, add the string `'nope'` to every odd index. Console.log your result. It should look like this:

[ 'turn' , 'nope' , 'down' , 'nope' , 'for' , 'nope' , 'what' ]
*/

var oopsArray = [ 'turn' , , 'down' , , 'for' , , 'what' ];

for (var i=0; i<oopsArray.length; i++){
console.log(oopsArray[i]);
if(i%2===1){
  oopsArray[i] = "nope";
}
 
}
console.log(oopsArray);

/* 8) Is It There Oops
Using a for-loop, iterate through the Array stored at `oopsArray` backwards. Console.log your result. It should look like this:

what
nope
for
nope
down
nope
turn
*/

for (var i=0; i<oopsArray.length; i++){

  oopsArray.reverse(oopsArray[i]);
}

console.log(oopsArray);

/* 9) Siesta Time
Declare a variable named `napSchedule` and assign its value to the following array: `[false, false, true, false, true, true]`

Next, write a function named `nap`. This function takes in a single parameter: `schedule`

   @param Datatype: Array `schedule`

Inside of this function write a for-loop that will iterate through the `napSchedule` array and console.log the message: `ZzZzZzZz` if the schedule is `true`, otherwise the it will console.log the message: `Gotta get coding!` if the schedule is `false`.
*/

var napSchedule = [false, false, true, false, true, true];

function nap(schedule){

  for (var i=0; i<napSchedule.length; i++);
    console.log( schedule [i] === true ); "ZzZzZzZz";
console.log( schedule [i] === false ); "Gotta get coding!";

}
console.log(napSchedule);

/* 10) Copy Pasta
Declare a variable named `valuesArray` and assign its value to be an array: `[99, 66, 829, 1941, 8, 76]`. 
Declare another variable named `copyValuesArray` and assing its value to an empty array.

Write a function named `copyArray` which takes two arguments: `originArray` and `destinationArray`. 

   @param Datatype: Array `originArray`
   @param Datatype: Array `destinationArray`

Inside of this function write a for-loop that will iterate through the contents of the `originArray` and pushes each element of that array into `destinationArray`. Console.log your result.
*/




/*Final Boss*/

/* 11) Go Long
Declare a variable named `topQuote` and assign it to a String value of your favorite one line quote.
Write a function that will iterate through the string value and return the longest word in that quote. Console.log your result.
*/



/* 12) Puppet Master
Declare a variable named `miscStorage` set it's value to be: `[ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush' ]`
Write a function named `generateArrayOfStrings` which takes a single argument `storage`. This function will return a new Array with only `String` values inside of it.

   @param Datatype: Array `storage`
   @return Datatype: Array

*/



/* 13) All Grown Up 
Write a function that will capitalize the first letter in each word in the phrase below. The function will console.log the message: "I've Lived A Life That's Full. I've Traveled Each And Every Highway. But More, Much More Than This. I Did It My Way."  
*/

var myWay = "i've lived a life that's full, i've traveled each and every highway. but more, much more than this. i did it my way.";



/* 14) Back to School
Declare a variable named `currentCohort` and set it's value to be this [array found here](https://gist.github.com/sgnl/e40879b2249e06ca7811).
Write a function named `graduateAndSetNewClass`, which takes a single argument called `cohort`.

   @param Datatype: Array `cohort`

The function will iterate through the `cohort` argument and check each student's `enrolled` property.
If the `enrolled` property is set to `true` then change that student's `graduated` property to `true`. Otherwise, if `enrolled` is set to `false` then change `enrolled` to `true` leaving `graduated` alone and unchanged.
Console.log your result.
*/

