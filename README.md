# JavaScript_Set13_CreateClass

### Exercise 1
Create a Movie class with the following attributes: movieName, rating, and yearReleased. Create a method printAllAttributes that will alert the user of the value of each attribute.

In your main function create two Movie objects, assign a value to each attribute, and print them to the console.

Remember, this is the basic model of a javascript file with a class
```javascript
class Movie{
  CLASS HERE
}

function main(){

}

main();
```

### Exercise 2
Create a class Product that represents a product sold online. A product has a price, quantity and name. Create a method printAllAttributes that will alert the user of the value of each attribute.

In your main function create two Product objects, assign a value to each attribute, and print them to the console.

### Exercise 3: Inheritance
Create a Person class that has the properties Name and Occupation. Set the Name from the constructor method while Occupation should default to 'Unemployed'. Add a greet() method that when called will print 'Hello, my name is NAME'.

Create a Student class who sets the Occupation property to 'Student'. Override the base greet() method so when called it will call greet() on the parent class and then print it's own additional greeting of 'My occupation is OCCUPATION'.

Create a people array.
Create 2 instances of Person and add to people array.
Create 2 instances of Student and add to people array.

Use forEach to iterate the array and for each object print their name and greeting (by calling creeting method).

