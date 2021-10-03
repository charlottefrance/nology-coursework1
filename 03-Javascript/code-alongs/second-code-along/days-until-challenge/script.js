function daysUntilWeekend(event) {
    let day = event.target.value;

        if (day == "Sunday") {
            alert("0 days! Its still the Weekend!")
        } else if (day =="Monday") {
            alert("5 days")
        } else if (day == "Tuesday") {
            alert("4 days")
        } else if (day == "Wednesday") {
            alert("3 days")
        } else if (day == "Thursday") {
            alert("2 days")
        } else if (day == "Friday") {
            alert("1 day, Its tomorrow!")
        } else if (day == "Saturday") {
            alert("0 days! Its the weekend!")
        } else {
            alert("Unrecognised day")
        }
}