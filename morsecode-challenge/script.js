const englishToMorse = {
    "A" : "._",
    "B" : "_...",
    "C" : "_._.",
    "D" : "_..",
    "E" : ".",
    "F" : ".._.",
    "G" : "_ _.",
    "H" : "....",
    "I" : "..",
    "J" : "._ _ _",
    "K" : "_._",
    "L" : "._..",
    "M" : "_ _",
    "N" : "_.",
    "O" : "_ _ _",
    "P" : "._ _.",
    "Q" : "_ _._",
    "R" : "._.",
    "S" : "...",
    "T" : "_",
    "U" : ".._",
    "W" : "._ _",
    "X" : "_.._",
    "Y" : "_._ _",
    "Z" : "_ _.."
}

const morseToEnglish = {
    "._" : "A",
    "_..." : "B",
    "_._." : "C",
    "_.." : "D",
    "." : "E",
    ".._." : "F",
    "_ _." : "G",
    "...." : "H",
    ".." : "I",
    "._ _ _" : "J",
    "_._" : "K",
    "._.." : "L",
    "_ _" : "M",
    "_ ." : "N",
    "_ _ _" : "O",
    "._ _." : "P",
    "_ _._" : "Q",
    "._." : "R",
    "..." : "S",
    "_" : "T",
    ".._" : "U",
    "._ _" : "W",
    "_.._" : "X",
    "_._ _" : "Y",
    "_ _.." : "Z",
}

translateToEnglish = (str) => {
    return str.toUpperCase().split("").map(el => {
        return englishToMorse[el] ? englishToMorse[el] : el;
    }).join("");
};

translateToMorseCode = (str) => {
    return str.toUpperCase().split("").map(el => {
        return morseToEnglish[el] ? morseToEnglish[el] : el;
    }).join("");
}

console.log(translateToEnglish('hello'))
console.log(translateToMorseCode('......_..._.._ _ _'))
// class MorseCode {
//     constructor(englishWord, morsecodeWord) {
//         this.englishWord = englishWord;
//         this.morsecodeWord = morsecodeWord;
//     }

//     translateToEnglish(str) {
//         return str.toUpperCase().split("").map(el => {
//             return englishToMorse[el] ? englishToMorse[el] : el;
//         }).join("");
//     };
// }

