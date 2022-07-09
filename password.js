var password = "bigchanges@407"

function containsNumber(password) {
    return /[0-9]/.test(password);
}
console.log(containsNumber(password))

function containsLowercaseLetter(password) {
    return /[a-z]/.test(password);
}
console.log(containsLowercaseLetter(password))

function containsUpercaseLetter(password) {
    return /[A-Z]/.test(password);
}
console.log(containsUpercaseLetter(password))

// if (password.length >= 10 && containsNumber(password) === true && containsAnyLetter(password) === true) {
//     console.log("Password a Success");
// } else {
//     console.log("Invalid Password")
// }

if (password.length >= 10) {
    if (containsNumber(password) === true) {
        if (containsLowercaseLetter(password) === true) {
            if (containsUpercaseLetter(password) === true) {
                console.log('Password a Success')
                }
            } 
        }
    }   else {
    console.log('Password Invalid')
}