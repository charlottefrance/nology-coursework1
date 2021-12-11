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
const studentContainer = document.querySelector(".students-container");

// studentContainer.style.border ="50px solid red";

const person = {
    firstName: "Charlotte",
    lastName: "France",
    quote: "It doesnt get easier, you just go faster",
    skills: ["html", "css", "javascript"],
    imgURL: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg",
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    getSkills() {
        const skillsli = this.skills.map(skill => `<li>${skill}</li>`);
        console.log(skillsli)
        return skillsli.join("\n");
    },
    getPerson() {
        const personsHTML = `
        <article class="student-card">
          <img src=${this.imgURL}/>
          <h2>${this.getFullName()}</h2>
          <blockquote>${this.quote}</blockquote>
          <h3>Skills,</h3>
          <ul>${this.getSkills()}</ul>
        </article>
        `
        return personsHTML;
    }
}

for(let index = 0; index < 10; index++){
    studentContainer.innerHTML += person.getPerson();
}

// ADD A METHOD ONTO THE PERSON OBJECT THAT RETURNS THE SAME HTML
// USE ".THIS"


// WRITE A METHOD ON THE PERSON OBJECT THAT USES THE SKILLS ARRAY
// NEET TO RETURN A STRING
person.age = 30;
console.log(person.getSkills())
// console.log(person);

// // FIRST NAME AND LAST NAME ONTO CONSOLE
// console.log(person.firstName + " " + person.lastName)

// // GET METHOD OF GETFULLNAME() ONTO CONSOLE 
// console.log(person.getFullName())