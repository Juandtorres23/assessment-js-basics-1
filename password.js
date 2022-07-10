var password = "Bigchanges@407"

function containsNumber(password) {                                                            //Function created to check for numerical values in the string provided
    return /[0-9]/.test(password);
}
console.log(containsNumber(password))

function containsLowercaseLetter(password) {                                                   //Function created to check for lowercase letters 
    return /[a-z]/.test(password);
}
console.log(containsLowercaseLetter(password))

function containsUppercaseLetter(password) {                                                   //Function created to check for uppercase letters 
    return /[A-Z]/.test(password);
}
console.log(containsUppercaseLetter(password))

function containsSpecialChars(password) {                                                      //Function created to check for specific special characters 
    return /[!@#$%&*?]/.test(password)
}
console.log(containsSpecialChars(password))

function containsSpace(password) {                                                             //Function created to check for a space 
    return /[ ]/.test(password)
}
console.log(containsSpace(password))

const char = "password"                                                                        //A variable created with a string to check if the specific key word is included in the password

console.log(password.includes(char));
// if (password.length >= 10 && containsNumber(password) === true && containsAnyLetter(password) === true) {
//     console.log("Password a Success");
// } else {
//     console.log("Invalid Password")
// }




if (password.length >= 10) {                                                                        //check for minimum lenght of password
    if (containsNumber(password) === true) {                                                        //Check if password contains numbers
        if (containsLowercaseLetter(password) === true) {                                           //Check if password contains lowercase letters
            if (containsUppercaseLetter(password) === true) {                                       //Check if password contains uppercase letters
                if (containsSpecialChars(password) === true) {                                      //Check if password contains special characters 
                    if (containsSpace(password) === false) {                                        //*Additional check - Check if password contains a space
                        if (password.length < 20) {                                                 //*Additional check - Check if passwords length acceds 20 characters
                            if (password.includes(char) === false) {                                //*Additional check - Check if the string password is in the created password 
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