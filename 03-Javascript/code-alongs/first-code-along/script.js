<<<<<<< HEAD
function calculateSomething(event) {
    const currentAge = event.target.value;

    const yearsLeft = 65 - currentAge;
    alert(yearsLeft)   
}

function getGreetingInFrench(event) {
    const greeting = event.target.value;

    if (greeting == "hello") {
        alert("bonjour!")
    } else if (greeting == "goodbye") {
        alert("Au revoir!")
    } else {
        alert("Not recognised")
    }
}

function getGreetingInSpanish(event) {
    const greeting = event.target.value;

    if(greeting == "hello") {
        alert("hola!")
    } else if (greeting == "goodbye") {
        alert("adios!")
    } else {
        alert("Not recognised")
    }
=======
function calculateSomething(event) {
    const currentAge = event.target.value;

    const yearsLeft = 65 - currentAge;
    alert(yearsLeft)   
}

function getGreetingInFrench(event) {
    const greeting = event.target.value;

    if (greeting == "hello") {
        alert("bonjour!")
    } else if (greeting == "goodbye") {
        alert("Au revoir!")
    } else {
        alert("Not recognised")
    }
}

function getGreetingInSpanish(event) {
    const greeting = event.target.value;

    if(greeting == "hello") {
        alert("hola!")
    } else if (greeting == "goodbye") {
        alert("adios!")
    } else {
        alert("Not recognised")
    }
>>>>>>> 8413529f44e07efdb7c12cc7f4ab8a76617dfa58
}