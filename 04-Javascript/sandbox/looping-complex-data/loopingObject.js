const validMessage = {
    userName : "Charlotte",
    content : "Have a great day",
};

const invalidMessage = {
    userName : "Charlotte",
    error : 76543,
};

// for (let key in message){
//     console.log(key)
//     console.log(message[key])
// }

// First task

// WHAT I DID

// const stringCheck = () => {
//     if (typeof message[key] === "string") {
//         return true;
//     } else {
//         return false;
//   }
// }
// console.log(stringCheck(validMessage))


// THE SOLUTION

// const validateMessageObject = (messageObject) => {
//     for(let key in messageObject) {
//         const typeCheck = typeof messageObject[key] !== "string";
        
//         if(typeCheck) {
//             return false;
//         }
//     }
//     return true;
// };

// console.log(validateMessageObject(validMessage));
// console.log(validateMessageObject(invalidMessage));

const validMessageValues = Object.values(validMessage);
const invalidMessageValues = Object.values(invalidMessage);

// console.log(validMessageValues);
// console.log(invalidMessageValues)


// console.log
//     (validMessageValues.every(validMessage => {
//         const typeCheck = typeof validMessage === "string"
//         return typeCheck;
//     })
// );

// console.log
//     (invalidMessageValues.every(validMessage => {
//         const typeCheck = typeof validMessage === "string"
//         return typeCheck;
//     })
// );

const validMessageKeys = Object.keys(validMessage);
const invalidMessageKeys = Object.keys(invalidMessage);

// console.log(validMessageKeys);
// console.log(invalidMessageKeys);


//Second task

//WHAT I DID
const matchingKeys = (message) => {
    if ('username', 'content' in message) {
        return true;
    } else {
        return false;
    }
}

// console.log(matchingKeys(validMessage));
// console.log(matchingKeys(invalidMessage));

//SOLUTION

const validateMessageKeys = (messageObject) => {
    // GET KEYS
    const objectKeys = Object.keys(messageObject);
    // CHECK IF THEY ARE VALID
    const keyCheck = objectKeys.every((key) => {
        const validKeys = ["userName", "content"];
        return validKeys.includes(key);
    });
    // RETURN THIS CHECK
    return keyCheck;
};

// console.log(validateMessageKeys(validMessage));
// console.log(validateMessageKeys(invalidMessage));

const validMessageEntries = Object.entries(validMessage);
const invalidMessageEntries = Object.entries(invalidMessage);

console.log(validMessageEntries);
console.log(invalidMessageEntries);


const validateMessageObject = (messageObject) => {
    const objectEntries = Object.entries(messageObject);

    const validation = objectEntries.every((entry) => {
        const key = entry[0];
        const value = entry[1];

        //Check the type of value
        const typeCheck = typeof value === "string";
        //Check key is valid
        const validKeys = ["userName", "content"];
        const keyCheck = validKeys.includes(key);

        return typeCheck && keyCheck;
    });

    return validation;
};

console.log(validateMessageObject(validMessage));
console.log(validateMessageObject(invalidMessage));
