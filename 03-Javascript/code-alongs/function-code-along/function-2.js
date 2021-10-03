const getDescription = (numberChildren, partnerName, location, jobTitle) => {
    const message = "I am currently a " + jobTitle + " living in " + location + " and married to " + partnerName + " with " + numberChildren + " kids"
    console.log(message)
}

const calculateSupply = (age, amountADay) => {
    const maxAge = 90;
    const lifetimeSupply = amountADay * 365 * (maxAge - age);
    const yearlySupply = amountADay  * 365;
    const message = "You will need " + lifetimeSupply + " to last you until the ripe old age of 90, you have roughly " + yearlySupply + " a year!";
    console.log(message)

}

const convertCelsiusToFarenheit = (celsius) => {
    farenheit = celsius * 9/5 + 32;
    console.log(farenheit) 
}

const puppyAgeCalculater = (puppyAgeInHumanYears) => {
    puppyAgeInDogYears = puppyAgeInHumanYears * 7;
    console.log(puppyAgeInDogYears);
}