// document.querySelector(".translate-btn").addEventListener("click", () => {
//     const englishWord = document.querySelector(".input-box").value;
//     if (englishWord === "hello") {
//         document.querySelector(".translate-result").innerHTML = "bonjour";
//     } else if (englishWord === "goodbye") {
//         document.querySelector(".translate-result").innerHTML = "au revoir";
//     } else {
//         document.querySelector(".translate-result").innerHTML = "unavailable";
//     }
// });

// Making the code more testable
// 'Decouple' logic

// Pure functions accept inputs > return outputs
// const translateEnglishToFrench = (englishWord) => {
//     if (englishWord === "hello") {
//         return "bonjour";
//     } else if (englishWord === "goodbye") {
//         return "au revoir";
//     } else {
//         return "unavailable";
//     }
// };

// document.querySelector(".translate-btn").addEventListener("click", () => {
//     const englishWord = document.querySelector(".input-box").value;
//     const frenchWord = translateEnglishToFrench(englishWord);

//     document.querySelector(".translate-result").innerHTML = frenchWord;
// });



// https://gist.github.com/mbickell/f613fc2bf3095ca91830d40df4ebffa5

const capitalisingFullName = (firstName, lastName) => `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;

const findsDaysSinceBirth = (birthday) => {
    const userBirthday = new Date(birthday);
    const todaysDate = new Date();

    const differenceInMS = todaysDate.getTime() - userBirthday.getTime();
    const MSInADay = 1000 * 3600 * 24;

    const numberOfDaysSinceBirth = Math.floor(differenceInMS / MSInADay);
    return numberOfDaysSinceBirth;
};

const testForTechKeyword = (phraseArray) => {
    const techSearchInPhrase = phraseArray.filter((phrase) => phrase.toLowerCase().includes("tech"));
    return techSearchInPhrase;
  };

console.log(capitalisingFullName("matt", "bickell"));
console.log(findsDaysSinceBirth("09/15/2000"))
console.log(testForTechKeyword([
    "Tech is booming",
    "Covid 19 yada yada yada",
    "Economy due for a resurgance!",
    "You can retrain in tech too!"
  ]));
