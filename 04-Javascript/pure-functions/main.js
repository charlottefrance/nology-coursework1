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
const testForTechKeyword = (arrayName) => {
  let myArray = [];
  arrayName.forEach((phrase) => {
    if (phrase.includes("tech")) {
      return myArray.push(phrase);
    } else if (phrase.includes("Tech")) {
        return myArray.push(phrase);
    } else {
        return "nope not tech"
    }
  });
  return myArray;
};

const capitalisingFullName = (firstName, lastName) => {
    const fullName = firstName.toUpperCase() + " " + lastName.toUpperCase();
    return fullName;
};

const findsDaysSinceBirth = (birthday) => {
    const bday = new Date(birthday);
    const aDate = new Date("02/16/2021");
    const diff = aDate.getTime() - bday.getTime();

    let ms = 1000 * 3600 * 24;

    const result = diff / ms;
    return result;
};

console.log(testForTechKeyword([
    "Tech is booming",
    "Covid 19 yada yada yada",
    "Economy due for a resurgance!",
    "You can retrain in tech too!"
  ]));

console.log(capitalisingFullName("matt", "bickell"));
console.log(findsDaysSinceBirth("09/26/1993"))
