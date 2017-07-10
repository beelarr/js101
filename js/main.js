/**
 * Created by beelarr on 7/10/17.
 */
console.log('What up?!?');

let today = 'Monday';
console.log('What is today? ', today);

let month = 'July';
console.log('What month is it? ', month);

let hoursInAYear = 24 * 365;
console.log('Hours in a year - ', hoursInAYear);

let minsInDecade = (hoursInAYear * 60 * 10);
console.log('Minutes in a Decade - ', minsInDecade);

let age = 40;
let secondsInYear = hoursInAYear * 60 * 60;
let ageInSeconds = age * secondsInYear;
console.log('My age in seconds is -', ageInSeconds);

let shoppingList = ['banana', 'milk', 'bread', 'peanut butter', 'avocado'];
console.log(shoppingList[1]);

let wiseAge = 45;
if (age > wiseAge){
  console.log('You are very wise.')
}else{
    console.log('You are too young to be wise.')
};

let phrase = 'The quick brown fox jumps over the lazy dog';
let phraseHolder = document.getElementById('phrase');
phraseHolder.innerHTML += phrase;

let myNumber = 2.34566868;
let shortNum = myNumber.toFixed(4);
console.log(shortNum)