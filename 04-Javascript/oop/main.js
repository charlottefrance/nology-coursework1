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
class Employee {
    constructor(name, rating, grade, nextGrade) {
        this.name = name;
        this.rating = rating;
        this.grade = grade;
        this.nextGrade = nextGrade;
    }

    willTheyBePromoted() {
        if(this.rating >= 7) {
        return `${this.name} is ready to be promoted to ${this.nextGrade}`;
        } else {
        return `${this.name}, is not ready for ${this.nextGrade}, but they're great at ${this.grade} :)`
        }
    };
    
}

const employee1 = new Employee("Charlotte", 8, "Manager", "Area Manager");
console.log(employee1.willTheyBePromoted())