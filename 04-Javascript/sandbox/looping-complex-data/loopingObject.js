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

const validateMessageObject = (messageObject) => {
    for(let key in messageObject) {
        const typeCheck = typeof messageObject[key] !== "string";
        
        if(typeCheck) {
            return false;
        }
    }
    return true;
};

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

