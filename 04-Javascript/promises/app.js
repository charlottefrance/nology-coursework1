// A promise is a way of waiting for data
// A promise has 3 states, pending, resolved and rejected

// let samsPromise = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if (a == 2) {
//         resolve("Success")
//     } else {
//         reject("Failed")
//     }
// })

// samsPromise
//     .then((message) => {
//         console.log(message + `, I am in the THEN`)
//     })
//     .catch((message) => {
//         console.log(message + `, I am in the CATCH`)
//     });


// https://randomuser.me/api/
// const heading = document.querySelector(".json-results")
// const getRandomUser = () => {
//     fetch('https://randomuser.me/api/')
//         .then(res => res.json())
//         .then(json => heading.innerHTML = json.results[0].name.first)
//         .catch(err => console.log(err))
// }

// getRandomUser();

// https://api.punkapi.com/v2/beers/random

const beerName = document.querySelector(".beer-name")
const tagline = document.querySelector(".tagline")
const description = document.querySelector(".description")
const abv = document.querySelector(".abv")
const foodPair = document.querySelector(".food-pair")

const getRandomBeer = () => {
    fetch('https://api.punkapi.com/v2/beers/random')
        .then(res => res.json())
        .then(json => {
            beerName.innerHTML = json[0].name
            tagline.innerHTML = json[0].tagline
            description.innerHTML = json[0].description
            abv.innerHTML = json[0].abv
            foodPair.innerHTML = json[0].food_pairing[0]
        })
        .catch(err => console.log(err))
}

getRandomBeer();