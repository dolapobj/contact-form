// validate names, email, message 
//display error for each 

//Variables 


//Event Listeners

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
    if (checkAllValidInputs()) {
        displaySuccessMessage();
    }
    console.log("BUTTON PRESSED");

})






//Functions

//Function to call all Validation Functions
//if true, then submit and display 

function checkAllValidInputs () {
    let isValid = true; 

    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const message = document.getElementById("message");
    const contactCheckBox = document.getElementById("contact-checkbox");
    
    if(!validateName(firstName.value)){
        isValid = false;
        displayNameError("first-name-error", firstName);
    }
    if(!validateName(lastName.value)){
        isValid = false;
        displayNameError("last-name-error", lastName);
    }

    if(!validateEmail(email.value)){
        isValid = false;
        displayEmailError("email-error", email);
    }

     if(!validateQueryType(radioButtons)){
        isValid = false;
        displayQueryTypeError("query-type-error");
    }

    if(!validateMessage(message.value)){
        isValid = false;
        displayMessageError("message-error", message);
    }

    if(!validateCheckbox(contactCheckBox)){
        isValid = false;
        displayCheckboxError("checkbox-error");
    }

return isValid;

}

//Function to display success message 

function displaySuccessMessage () {
    document.getElementById('successMessage').style.display = 'block';

}

//Validation Functions 
function validateName(name) {
    return name.trim() !== "";
    
}

function displayNameError(errorId,nameElement){
    nameElement.classList.add("error-border");
    const nameError = document.getElementById(errorId);
    nameError.innerHTML = "This field is required";
    nameError.style.display = "block";

}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    
}

function displayEmailError(errorId, emailElement){
    emailElement.classList.add("error-border");
    console.log(errorId);
    const emailError = document.getElementById(errorId);
    emailError.innerHTML = "Please enter a valid email address";
    emailError.style.display = "block";


}

function validateQueryType(radioButtons){
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
          return true;
        }
      }
      return false;
    }

function displayQueryTypeError(errorId){
console.log(errorId);
const queryTypeError = document.getElementById(errorId);
queryTypeError.innerHTML = "Please select a query type";

}

function validateMessage (message) {
    return message.trim() !== "";


}

function displayMessageError(errorId,messageElement){
    messageElement.classList.add("error-border");
    const messageError = document.getElementById(errorId);
    messageError.innerHTML = "This field is required";
}

function validateCheckbox (contactCheckBox) {
    if (contactCheckBox.checked){
        return true;
    }
    return false;

}

function displayCheckboxError(errorId){
    console.log(errorId);
    const checkboxError = document.getElementById(errorId);
    checkboxError.innerHTML = "To submit this form, please consent to being contacted";
}