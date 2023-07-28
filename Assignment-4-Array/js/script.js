

//Question 1

window.console.log("\n");
window.console.log("Answer of Question 1 ");
window.console.log("\n");

var a=["Death on the Nile","Scream","The batman","Uncharted","Top Gun"];
window.console.log(a[1]);

//Question 2

window.console.log("\n");
window.console.log("Answer of Question 2 ");
window.console.log("\n");

var movies = new Array(5);
movies[0]="Death on the Nile";
movies[1]="Scream";
movies[2]="The batman";
movies[3]="Uncharted";
movies[4]="Top Gun";
window.console.log(movies[0]);

//Question 3

window.console.log("\n");
window.console.log("Answer of Question 3 ");
window.console.log("\n");

movies.splice(2, 0, "Jocker");
window.console.log(movies.length);

//Question 4

window.console.log("\n");
window.console.log("Answer of Question 4 ");
window.console.log("\n");

var movies = [];
movies[0]="Death on the Nile";
movies[1]="Scream";
movies[2]="The batman";
movies[3]="Uncharted";
movies[4]="Top Gun";

delete movies[0];
window.console.log(movies);

//Question 5

window.console.log("\n");
window.console.log("Answer of Question 5 ");
window.console.log("\n");

var movies_2 = [];
movies_2[0]="Death on the Nile";
movies_2[1]="Scream";
movies_2[2]="The 100";
movies_2[3]="The batman";
movies_2[4]="Uncharted";
movies_2[5]="Top Gun";
movies_2[6]="Jocker";
for (var i in movies_2) {
  window.console.log(movies_2[i]);
}

//Question 6
window.console.log("\n");
window.console.log("Answer of Question 6");
window.console.log("\n");
for(var i of movies_2) {
  "use strict";
  window.console.log(i);
}

//Question 7 

window.console.log("\n");
window.console.log(" Answer of Question 7 ");
window.console.log("\n");
movies_2.sort();
for(var i of movies_2) {
  "use strict";
  window.console.log(i);
}

//Question 8 

window.console.log("\n");
window.console.log(" Answer of Question 8 ");
window.console.log("\n");

var movies1 = ["Death on the Nile","Scream","The 100","The batman","Uncharted","Top Gun","Jocker"];
var leastFavMovies = ["Pushpa ","Paa ","Sajan "];

window.console.log("Movies I like:");
window.console.log("\n");
for(var i of movies1) {
  "use strict";
  window.console.log(i);
}

window.console.log("\n");
window.console.log("Movies I regret watching:");

window.console.log("\n");
for(var i of leastFavMovies) {
  "use strict";
  window.console.log(i);
}

//Question 9

window.console.log("\n");
window.console.log(" Answer of Question 9 ");
window.console.log("\n");

var Allmovies = movies1.concat(leastFavMovies);
Allmovies.sort().reverse();
for(var i of Allmovies) {
  "use strict";
  window.console.log(i);
}

//Question 10

window.console.log("\n");
window.console.log("Answer of Question 10-Last item");
window.console.log("\n");
var lastmovie = Allmovies.slice(-1)[0];
window.console.log(lastmovie);

//Question 11

window.console.log("\n");
window.console.log(" Answer of Question 11-First item");
window.console.log("\n");
window.console.log(Allmovies.shift());

//Question 12

window.console.log("\n");
window.console.log("Answer of Question 12");
window.console.log("\n");


var movies_2 = ["Death on the Nile","Scream","The 100","The batman","Uncharted","Top Gun","Jocker"];
var leastFavMovies = ["Pushpa ","Paa ","Sajan "];
var Allmovies = movies_2.concat(leastFavMovies);
Allmovies.sort().reverse();
var leastFavMoviesindices = [];

Allmovies.forEach((movie, index) => {
  if (leastFavMovies.includes(movie)) {
    leastFavMoviesindices.push(index); }
});

var goodmovies = ["Titanic","Avatar","Avatar-2"]
leastFavMoviesindices.forEach((index) => {
    Allmovies[index] = goodmovies.shift();
});

for (var count = 0; count < Allmovies.length; count++) {
    "use strict";
    window.console.log(Allmovies[count] );
}
window.console.log("\n");


//Question 13

window.console.log("\n");
window.console.log("Answer of Question 13");
window.console.log("\n");

var movies1 = [["Titanic", 1], ["Avatar", 2], ["Avatar-2", 3], ["Uncharted", 4], ["Jocker", 5]];
var movieNames = movies1.filter(function(movie) {
  return typeof movie[0] === "string";
});

window.console.log(movieNames.map(movie => movie[0]));


//Question 14

window.console.log("\n");
window.console.log("Answer of Question 14");
window.console.log("\n");

var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

var showEmployee = function(employees) {
  window.console.log("Employees: ");
  window.console.log("\n"); 
  employees.forEach(function(employe) {
    window.console.log(employe);
  });
};

showEmployee(employees);

//Question 15

window.console.log("\n");
window.console.log("Answer of Question 15");
window.console.log("\n");

var values = [58, '', 'abcd', true, null, false, 0];

var filterValues = function(values){
    return values.filter(function(v) {
  return v !== false && v !== null && v !== 0  && v !== "";
});
};

window.console.log(filterValues([58, '', 'abcd', true, null, false, 0]));


//Question 16

window.console.log("\n");
window.console.log("Answer of Question 16");
window.console.log("\n");


var RandomNumber = function(v) {
  return v[Math.floor(Math.random() * v.length)];
};
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
window.console.log(RandomNumber(nums));

//Question 17

window.console.log("\n");
window.console.log("Answer of Question 17");
window.console.log("\n");



var LargestNumber = function(v){
    return Math.max(...v);
}

var numbers = [102 , 13, 20 , 3 , 1001 ,0 , 7 ];
window.console.log(LargestNumber(numbers));












