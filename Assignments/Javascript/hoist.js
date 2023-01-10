//1.
console.log(hello);
var hello = 'world';

//returns undefined

//2.
var needle = 'haystack';
test();
function test() {
  var needle = 'magnet';
  console.log(needle);
}

//returns magnet

//3.
var brendan = 'super cool';
function print() {
  brendan = 'only okay';
  console.log(brendan);
}
console.log(brendan);

//returns super cool

//4.
var food = 'chicken';
console.log(food);
eat();
function eat() {
  food = 'half-chicken';
  console.log(food);
  var food = 'gone';
}

//returns chicken half-chicken

//5.
//mean();
console.log(food);
var mean = function () {
  food = 'chicken';
  console.log(food);
  var food = 'fish';
  console.log(food);
};
console.log(food);

//returns error "This is because the function is an expression"

//6.
console.log(genre);
var genre = 'disco';
rewind();
function rewind() {
  genre = 'rock';
  console.log(genre);
  var genre = 'r&b';
  console.log(genre);
}
console.log(genre);

//returns undefined rock r&b disco

//7.
dojo = 'san jose';
console.log(dojo);
learn();
function learn() {
  dojo = 'seattle';
  console.log(dojo);
  var dojo = 'burbank';
  console.log(dojo);
}
console.log(dojo);

//returns san jose seattle burbank san jose
