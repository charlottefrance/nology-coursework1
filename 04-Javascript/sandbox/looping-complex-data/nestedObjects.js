const user = {
    id: "bgjnnjsfnaovjn",
    loggedIn: true,
    information: {
        firstName: "charlotte",
        lastName: "france",
        age: 21,
        likes: ["cycling", "disco", "coding"],
    },
    contact: {
        email: "charlie.france@ntlworld.com",
        contactNumber: "07398216550",
        address: {
            houseNumber: 120,
            nameOfRoad: "spring road",
            postcode: "MK42 8NB",
            country: "uk",
        },
    },
};

const userTwo = {
    id: "bgjnnjsfnaovjn",
    loggedIn: true,
    information: {
        firstName: "charlotte",
        lastName: "france",
        age: 21,
        likes: ["cycling", "disco", "coding"],
    },
    contact: {
        email: "charlie.france@ntlworld.com",
        contactNumber: "07398216550",
        address: {
            houseNumber: 120,
            nameOfRoad: "spring road",
            postcode: "MK42 8NB",
            country: "uk",
        },
    },
};

// // number
// console.log(user.contact.contactNumber);

// // age
// console.log(user.information.age);

// // country
// console.log(user.contact.address.country);

// // contact object
// console.log(user.contact);

// console.log(user.information.likes);

const userArray = [user, userTwo];

userArray.forEach(user => {
    console.log(user.information.likes);
})