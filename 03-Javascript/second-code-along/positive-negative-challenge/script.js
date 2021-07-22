function positiveOrNegative(event) {
    let number = event.target.value;

    if (number < 0) {
        alert("Negative")
    } else if (number > 0) {
        alert("Positive")
    } else if (number == 0) {
        alert("The number is 0")
    } else {
        alert("Unrecognised")
    }
}