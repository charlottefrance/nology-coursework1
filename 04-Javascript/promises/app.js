// A promise is a way of waiting for data
// A promise has 3 states, pending, resolved and rejected

let samsPromise = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve("Success")
    } else {
        reject("Failed")
    }
})

samsPromise
    .then((message) => {
        console.log(message + `, I am in the THEN`)
    })
    .catch((message) => {
        console.log(message + `, I am in the CATCH`)
    });