// Create a class Product that represents a product sold online. A product has a price, quantity and name. Create a method printAllAttributes that will alert the user of the value of each attribute.

// In your main function create two Product objects, assign a value to each attribute, and print them to the console.
class Product {
    constructor(name,price,quantity)
    {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    printAllAttributes()
    {
        alert(`${this.name} has a price of ${this.price} and a quantity of ${this.quantity}`);
    }
}

function main(){
    let product1 = new Product('Jordan 11', '$180', 5);
    let product2 = new Product('Yeezys', '$200', 7);
    let product3 = new Product('Vans', '$50', 12);
    product1.printAllAttributes();
    product2.printAllAttributes();
    product3.printAllAttributes();
    console.log(product1);
    console.log(product2);
    console.log(product3);
}

main();