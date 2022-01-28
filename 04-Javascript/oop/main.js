// class Book {
//     constructor(title, author, genre, year) {
//         this.title = title;
//         this.author = author;
//         this.genre = genre;
//         this.year = year;
//     }

//     getSummary() {
//         return `${this.title} is written by ${this.author}. The genre is ${this.genre}, and it was published in ${this.year}`;
//     }
// }

// const book1 = new Book("Harry Potter and the Half-Blood Prince", "J.K Rowling", "Fiction", 2009);
// console.log(book1);

// class Magazine extends Book {
//     constructor(title, author, genre, year, length) {
//         super(title, author, genre, year)
//         this.length = length;
//     }
// }

// const mag1 = new Magazine("Mag One", "Sam Joyce", "Tech", 2021, 100);
// console.log(mag1)

// console.log(mag1.getSummary())

//Done alone
// class Employee {
//     constructor(name, rating, grade, nextGrade) {
//         this.name = name;
//         this.rating = rating;
//         this.grade = grade;
//         this.nextGrade = nextGrade;
//     }

//     willTheyBePromoted() {
//         if(this.rating >= 7) {
//         return `${this.name} is ready to be promoted to ${this.nextGrade}`;
//         } else {
//         return `${this.name}, is not ready for ${this.nextGrade}, but they're great at ${this.grade} :)`
//         }
//     };
    
// }

// const employee1 = new Employee("Charlotte", 6, "Customer Service Assistant", "Team Leader");
// const employee2 = new Employee("Luke", 10, "Store Manager", "Area Manager")
// console.log(employee1.willTheyBePromoted())
// console.log(employee2.willTheyBePromoted())

//Challenge 2
 class Vehicle {
     constructor(name, year, speed) {
         this.name = name;
         this.year = year;
         this.speed = speed;
     }

     speed() {
         return `${this.name} is moving at ${this.speed}mph`;
     }
 }

 class Car extends Vehicle {
    constructor(name, year, type, gears, doors) {
        super(name, year);
        this.type = type;
        this.gears = gears;
        this.doors = doors;
    }

    changeGear() {
        return `${this.type} is has now changed its gear to ${this.gears}`
    }
 }

 class Ford extends Car {
     constuctor(year, doors, price, resalePrice) {
         super(year, doors);
         this.price = price;
     }

     resaleValue() {
         return `Ford cars are so popular because of the resale possibilitys, for example, this ${this.year} ${this.year} Ford, was bought for ${this.price} and sold for ${this.resalePrice} `
     }
 }

 //next time, do something that changes throughout each class, like in Module 4, Entending Classes Challende & Review videos
