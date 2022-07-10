var password = "Bigchanges@407"

function containsNumber(password) {
    return /[0-9]/.test(password);
}
console.log(containsNumber(password))

function containsLowercaseLetter(password) {
    return /[a-z]/.test(password);
}
console.log(containsLowercaseLetter(password))

function containsUppercaseLetter(password) {
    return /[A-Z]/.test(password);
}
console.log(containsUppercaseLetter(password))

function containsSpecialChars(password) {
    return /[!@#$%&*?]/.test(password)
}
console.log(containsSpecialChars(password))

function containsSpace(password) {
    return /[ ]/.test(password)
}
console.log(containsSpace(password))

const char = "password"

console.log(password.includes(char));
// if (password.length >= 10 && containsNumber(password) === true && containsAnyLetter(password) === true) {
//     console.log("Password a Success");
// } else {
//     console.log("Invalid Password")
// }




if (password.length >= 10) {
    if (containsNumber(password) === true) {
        if (containsLowercaseLetter(password) === true) {
            if (containsUppercaseLetter(password) === true) {
                if (containsSpecialChars(password) === true) {
                    if (containsSpace(password) === false) {
                        if (password.length < 20) {
                            if (password.includes(char) === false) {
                                console.log('Password Successful!')
                            } else {
                                console.log('Cannot contain the word "password"!')
                            }
                        } else {
                            console.log('Cannot contain more than 20 characters!')
                        }
                    } else {
                        console.log('Cannot contain space!')
                    }
                } else {
                    console.log('Must contain special character!')
                }
            } else {
                console.log('Must contain uppercase!')
            }
        } else {
            console.log('Must contain lowercase!')
        }
    } else {
        console.log('Must contain numerical value!')
    }
} else {
    console.log('Must contain at least 10 characters!')
}