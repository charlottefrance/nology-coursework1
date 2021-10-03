const coaches = ["Andy", "Sam", "Bex"];
console.log(coaches[1]);

const pets = ["Ricky", "Tommy", "Tucker"];
console.log(pets[2]);

for (let index = 0; index < 5; index++) {
    console.log("The index on this loop was " + index);
}

for (let index = 0; index < pets.length; index++) {
   console.log(pets[index])
}

pets.forEach((pet) => {
    console.log(pet);
})

coaches.forEach((coach) => {
    console.log(coach);
})

const newCoaches = coaches.map((coach) => {
    return "Coach - " + coach;
})
console.log(newCoaches);

const newPets = pets.map((pet) => {
    return "Golden Retriever - " + pet;
})
console.log(newPets)

// const coaches = names.filter((name) => {
//     if (name.length > 3) {
//         return true;
//     } else {
//         return false;
//     }
// })
// console.log(coaches);

const scores = [8, 9, 12];

const highScores = scores.filter((score) => {
    return score > 10;


    // if (score > 10) {
    //     return true;
    // } else {
    //     return false;
    // };
})
