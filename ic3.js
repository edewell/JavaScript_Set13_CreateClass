// Create a Person class that has the properties Name and Occupation. Set the Name from the constructor method while Occupation should default to 'Unemployed'. Add a greet() method that when called will print 'Hello, my name is NAME'.

// Create a Student class who sets the Occupation property to 'Student'. Override the base greet() method so when called it will call greet() on the parent class and then print it's own additional greeting of 'My occupation is OCCUPATION'.

// Create a people array.
// Create 2 instances of Person and add to people array.
// Create 2 instances of Student and add to people array.

// Use forEach to iterate the array and for each object print their name and greeting (by calling creeting method).

class Person{
constructor(name){
    this.name = name;
    this.occupation = "unemployed";
}
greet(){
    console.log(`Hello my name is ${this.name}`);
}
}

class Student extends Person{
    occupation = "Student";
    greet()
    {
        super.greet();
        console.log(`and my occupation is ${this.occupation}`);
    }
}

function main(){
   
let peopleArray = [];

let person1 = new Person('Eddie');
let person2 = new Person('Tre');

peopleArray.push(person1);
peopleArray.push(person2);

let student1 = new Student('Joe');
let student2 = new Student('Kyron');
peopleArray.push(student1);
peopleArray.push(student2);

peopleArray.forEach(el => {
    console.log(el.name);
    el.greet();
});


}

main();

