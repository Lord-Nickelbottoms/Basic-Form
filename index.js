/****************************** Declarations *******************************/
const submitBtn = document.getElementById("submitBtn")

let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let occupation = document.getElementById("occupation")
let email = document.getElementById("email")

let countryList = document.getElementById("countryList")






submitBtn.addEventListener("click", function () {
    console.log(`First Name: ${firstName.value}`)
    console.log(`Last Name: ${lastName.value}`)
    console.log(`Occupation: ${occupation.value}`)
    console.log(`Email: ${email.value}`)

    console.log(`Country: ${countryList.value}`)
})



/*********************************************************************************************************************************************************/
// function poundTokilogram(pounds) {
//     return pounds * 0.45359237
// }
let pound = (pounds) =>
{
    return pounds * 0.45359237
}

// function inchToCenti(inches) {
//     return inches * 2.54
// }

let inch = (inches) => {
    return inches * 2.54
}

// function fahrenheitToCelsius(fahrenheit) {
//     return (fahrenheit - 32) * .5556
// }

let fahrenheit = (fahrenheit) => {
    return (fahrenheit - 32) * .5556
}

// function feetToMeter(feet) {
//     return feet * 0.3048
// }

let feet = (feet) => {
    return feet * 0.3048
}
