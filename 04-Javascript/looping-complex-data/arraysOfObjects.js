// const fruitObjectArray = [
//     { fruit: "apple" },
//     { fruit: "banana" },
//     { fruit: "orange" }
// ];

// // third challenge

// // solution is the same as what i did :D
// // console.log(fruitObjectArray[1].fruit);


// // console.log(fruitObjectArray[0].fruit);
// // console.log(fruitObjectArray[1].fruit);
// // console.log(fruitObjectArray[2].fruit);

// // Iterating over an array -> array of the values

// const fruitValueArray = fruitObjectArray.map((fruitObject) => {
//     const fruitValue = fruitObject.fruit;
//     return fruitValue;
// })

// // console.log(fruitValueArray);

// const searchTerm = "e";

// const matchingFruitArray = fruitObjectArray.filter((fruitObject) => {
//     const fruitMatch = fruitObject.fruit.includes(searchTerm);
//     return fruitMatch;
// })

// console.log(matchingFruitArray);

// //fourth challenge
// // couldnt figure it out

// //SOLUTION
// const generateFruitHTML = (fruitArray) => {
//     const html = fruitArray.map(fruitObject => {
//         return `<li>${fruitObject.fruit}</li>`
//     });
    
//     return html.join("");
// };

// console.log(generateFruitHTML(fruitObjectArray));

const fruitObjectArray = [
    { fruit: "apple" , rating: 8, price: 150 },
    { fruit: "banana" , rating: 5, price: 100 },
    { fruit: "orange" , rating: 6, price: 120 }
];

// console.log(fruitObjectArray[2].price)

const generateFruitHTML = (fruitArray) => {
    const html = fruitArray.map(fruitObject => {
        const price = (fruitObject.price / 100).toFixed(2);
        const capitalise = fruitObject.fruit[0].toUpperCase() + fruitObject.fruit.slice(1);

        const cardHtml = `
        <div>
            <h3> ${capitalise} </h3>
            <p>This fruit is ${fruitObject.rating} / 10 </p>
            <p>Buy now for ${fruitObject.price}p</p>
        </div>
        `
        return cardHtml;
    });
    
    return html.join("");
};


const sortedByHighestRating = fruitObjectArray.sort((a, b) => {
    return b.rating - a.rating;
});

console.log(sortedByHighestRating);
console.log(generateFruitHTML(sortedByHighestRating));