<<<<<<< HEAD
function handleCalculateGrade(event) {

    let grade = event.target.value;

    if (!grade) {
        return;
    }

    grade = grade.toUpperCase();
    let percentage;
    switch (grade) {
        case "A":
            percentage = "90-100%";
            break;
        case "B":
            percentage = "75-90%";
            break;
        case "C":
            percentage = "50-75%";
            break;
        case "D":
            percentage = "25-50%";
            break;
        case "E":
            percentage = "0-25%";
            break;
    }

    alert("The percentage was " + percentage);
=======
function handleCalculateGrade(event) {

    let grade = event.target.value;

    if (!grade) {
        return;
    }

    grade = grade.toUpperCase();
    let percentage;
    switch (grade) {
        case "A":
            percentage = "90-100%";
            break;
        case "B":
            percentage = "75-90%";
            break;
        case "C":
            percentage = "50-75%";
            break;
        case "D":
            percentage = "25-50%";
            break;
        case "E":
            percentage = "0-25%";
            break;
    }

    alert("The percentage was " + percentage);
>>>>>>> 8413529f44e07efdb7c12cc7f4ab8a76617dfa58
}