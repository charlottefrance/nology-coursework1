const fruitObjectArray = [
    { fruit: "apple" },
    { fruit: "banana" },
    { fruit: "orange" }
];

// third challenge

// solution is the same as what i did :D
// console.log(fruitObjectArray[1].fruit);


// console.log(fruitObjectArray[0].fruit);
// console.log(fruitObjectArray[1].fruit);
// console.log(fruitObjectArray[2].fruit);

// Iterating over an array -> array of the values

const fruitValueArray = fruitObjectArray.map((fruitObject) => {
    const fruitValue = fruitObject.fruit;
    return fruitValue;
})

// console.log(fruitValueArray);

const searchTerm = "e";

const matchingFruitArray = fruitObjectArray.filter((fruitObject) => {
    const fruitMatch = fruitObject.fruit.includes(searchTerm);
    return fruitMatch;
})

console.log(matchingFruitArray);

//fourth challenge
// couldnt figure it out

//SOLUTION
const generateFruitHTML = (fruitArray) => {
    const html = fruitArray.map(fruitObject => {
        return `<li>${fruitObject.fruit}</li>`
    });
    
    return html.join("");
};

console.log(generateFruitHTML(fruitObjectArray));
