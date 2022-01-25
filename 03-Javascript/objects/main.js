// // OBJECT SYNTAX

// const exampleObject = {
//     key : "value" , // COMMA FOR OTHER KEYS
//     types : "any",
//     method() {
//         // DO SOMETHING
//         // this.key
//         return this.key + " " + this.types;
//     }
// }

// // ACCESS OBJECTS
// // DOT NOTATION
// console.log(exampleObject.key)
// console.log(exampleObject.types)

// // CALLING A METHOD
// console.log(exampleObject.method())

// // SQUARE BRACKETS
// console.log(exampleObject["key"]);
// console.log(exampleObject["types"]);


// // ADDING A KEY TO AN OBJECT
// exampleObject.newKey = "new value";

// console.log(exampleObject);
// const studentContainer = document.querySelector(".students-container");

// studentContainer.style.border ="50px solid red";

// const person = {
//     firstName: "Charlotte",
//     lastName: "France",
//     quote: "It doesnt get easier, you just go faster",
//     skills: ["html", "css", "javascript"],
//     imgURL: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg",
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     getSkillsHTML() {
//         const skillsHTML = this.skills.map(skill => `<li>${skill}</li>`);
//         console.log(skillsHTML)
//         return skillsHTML.join("\n");
//     },
//     getPersonHTML() {
//         const personsHTML = `
//         <article class="student-card">
//           <img src=${this.imgURL}/>
//           <h2>${this.getFullName()}</h2>
//           <blockquote>${this.quote}</blockquote>
//           <h3>Skills,</h3>
//           <ul>${this.getSkillsHTML()}</ul>
//         </article>
//         `
//         return personsHTML;
//     }
// }

// for(let index = 0; index < 10; index++)
    // studentContainer.innerHTML += person.getPerson();


// ADD A METHOD ONTO THE PERSON OBJECT THAT RETURNS THE SAME HTML
// USE ".THIS"


// WRITE A METHOD ON THE PERSON OBJECT THAT USES THE SKILLS ARRAY
// NEET TO RETURN A STRING
// person.age = 30;
// console.log(person.getSkillsHTML())
// console.log(person);

// // FIRST NAME AND LAST NAME ONTO CONSOLE
// console.log(person.firstName + " " + person.lastName)

// // GET METHOD OF GETFULLNAME() ONTO CONSOLE 
// console.log(person.getFullName())

// CLASS SYNTAX 

//PascalCase -> to name conventions for classes
// class ExampleClass {
//     constructor(firstName, lastName, age){
//         (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
//     }

//     greet() {
//         return `hi my name is ${this.firstName} ${this.lastName}`;
//     }
// }

// // CLASS INHERITANCE SYNTAX

// class ExtendedClass extends ExampleClass {
//     constructor(firstName, lastName, age, subject){
//         super(firstName, lastName, age), (this.subject = subject);
//     }

//     greet() {
//         return `Hi I am Miss ${this.lastName} I will teach you ${this.subject}`;
//     }
// }

// console.log(new ExtendedClass("Charlotte", "France", 21, "javascript").greet())
// const exampleOne = new ExampleClass("Charlotte", "France", 21)
// const exampleTwo = new ExampleClass("Luke", "Forman", 22)

// console.log(exampleOne.greet());
// console.log(exampleTwo.greet());

 class Profile {
    constructor(firstName, lastName, age, quote, skills, imgURL){
        (this.firstName = firstName),
        (this.lastName = lastName),
        (this.quote = quote),
        (this.skills = skills),
        (this.imgURL = imgURL);
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    getSkillsHTML() {
        const skillsHTML = this.skills.map(skill => `<li>${skill}</li>`);
        return skillsHTML.join("\n");
    }

    getProfileHTML() {
        const profileHTML = `
        <article class="student-card">
          <img src=${this.imgURL}/>
          <h2>${this.getFullName()}</h2>
          <blockquote>${this.quote}</blockquote>
          <h3>Skills:</h3>
          <ul<${this.getSkillsHTML()}</ul>
        </article>
        `;
        return profileHTML;
    }
}

class PremiumProfile extends Profile {
    constructor(firstName, lastName, age, quote, skills, imgURL, contactlink){
        super(firstName, lastName, age, quote, skills, imgURL),
        this.contactlink = contactlink
    }

    getProfileHTML() {
        const profileHTML = `
        <article class="student-card">
          <img src=${this.imgURL}/>
          <h2>${this.getFullName()}</h2>
          <blockquote>${this.quote}</blockquote>
          <h3>Skills:</h3>
          <ul<${this.getSkillsHTML()}</ul>
          <a href=${this.contactlink}>Lets get in touch</a>
        </article>
        `;
        return profileHTML;
    }
}


const studentContainer = document.querySelector(".students-container");

const charlotte = new PremiumProfile(
    "Charlotte",
    "France",
    "21",
    "It doesnt get easier, you just go faster",
    ["html", "css", "javascript"],
    "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg",
    "https://github.com/"
);

const exampleOne = new Profile(
    "Luke",
    "Forman",
    "22",
    "It doesnt get easier, you just go faster",
    ["html", "css", "javascript"],
    "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg",
);

const exampleTwo = new Profile(
    "Tucker",
    "France",
    "2",
    "It doesnt get easier, you just go faster",
    ["html", "css", "javascript"],
    "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg",
);

studentContainer.innerHTML += charlotte.getProfileHTML();
studentContainer.innerHTML += exampleOne.getProfileHTML();
studentContainer.innerHTML += exampleTwo.getProfileHTML();
