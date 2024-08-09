function generateRandomPassword() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let pass = ""
    for (let i = 0; i < 10; i++) {
        pass += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      }
    return pass
}

function generateRandomCharacter() {
    const characters = "!@#$%^&*()_+{}:'<>?[];,./";
    return characters.charAt(Math.floor(Math.random() * characters.length));
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
}

function displayMessage() {
    const passwordField = document.getElementById("password");
    const specialCharacterCheckbox = document.getElementById("special_char");
    const numbersCheckbox = document.getElementById("numb");
    let password = generateRandomPassword(); // Generates new passowrd


    let newPassword = ""
    for (let char of password) {
        newPassword += char;

        if (specialCharacterCheckbox.checked && Math.random() > 0.5) {
            newPassword += generateRandomCharacter(); // Add random character
        }

        if (numbersCheckbox.checked && Math.random() > 0.5) {
            newPassword += generateRandomNumber(); // Add random number
        }
    }

    passwordField.value = newPassword;
}

// Add event listener to the button
const button = document.getElementById("generateButton");
button.addEventListener("click", displayMessage);

// Function to auto-resize the textarea
function autoResize() {
    const textarea = document.getElementById('password');
    textarea.style.height = "auto"; // Reset height
    textarea.style.height = textarea.scrollHeight + "px"; // Set it to the scroll height
}

// Add event listener to the textarea
const textarea = document.getElementById("password");
textarea.addEventListener("input", autoResize);