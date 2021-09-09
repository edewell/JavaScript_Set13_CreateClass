// Create a Movie class with the following attributes: movieName, rating, and yearReleased. Create a method printAllAttributes that will alert the user of the value of each attribute.

// In your main function create two Movie objects, assign a value to each attribute, and print them to the console.

// Remember, this is the basic model of a javascript file with a class
// ```javascript
class Movie{
  constructor(name,rating,year){
      this.movieName = name;
      this.rating = rating;
      this.yearReleased = year;
  }
// add method
printAllAtributes()
{
    alert(`${this.movieName} has a rating of ${this.rating} and was released in ${this.yearReleased}`);
}
}

function main(){
let movie1 = new Movie("Taken", 10, 2008);
let movie2 = new Movie("Suicide Squad", 8, 2016);
movie1.printAllAtributes();
movie2.printAllAtributes();
console.log(movie1);
console.log(movie2);
}

main();