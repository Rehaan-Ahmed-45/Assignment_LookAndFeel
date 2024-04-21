// Validates a single input field and manages the display of error messages and field enabling
function validateInput(currentInput, nextFieldId) {
    const errorMessageId = currentInput.id + '-error'; // Generate ID for error message span based on current input field ID
    const errorMessageSpan = document.getElementById(errorMessageId); // Get the span element for displaying error messages

    if (currentInput.checkValidity()) { // If current input is valid
        document.getElementById(nextFieldId).disabled = false; // Enable the next input field
        errorMessageSpan.style.display = 'none'; // Hide the error message
    } else { // If current input is invalid
        document.getElementById(nextFieldId).disabled = true; // Disable the next input field
        if (currentInput.value.length > 0) { // If there is some text in the input
            errorMessageSpan.textContent = currentInput.title; // Display a custom error message from the input's title attribute
            errorMessageSpan.style.display = 'block'; // Show the error message
        } else {
            errorMessageSpan.style.display = 'none'; // Hide the error message if the input is empty
        }
        currentInput.focus(); // Set focus back to the invalid input field
    }
}

// Validates all form fields before submission
function validateForm() {
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var address = document.getElementById('address');
    var brand = document.getElementById('vaccineBrand');
    var time = document.getElementById('timeSlot');
    var registerButton = document.getElementById('registerButton');

    // Sequentially check each required input for validity
    if (!firstName.checkValidity()) { firstName.focus(); alert(firstName.title); return; }
    if (!lastName.checkValidity()) { lastName.focus(); alert(lastName.title); return; }
    if (!email.checkValidity()) { email.focus(); alert(email.title); return; }
    if (!phone.checkValidity()) { phone.focus(); alert(phone.title); return; }
    if (!address.checkValidity()) { address.focus(); alert(address.title); return; }
    if (!brand.checkValidity()) { brand.focus(); alert(brand.title); return; }
    if (!time.checkValidity()) { time.focus(); alert(time.title); return; }

    registerButton.disabled = false; // Enable the registration button if all inputs are valid
    displaySuccessMessage(firstName.value, lastName.value, email.value, phone.value, address.value, brand.value, time.value);
}

// Displays a success message with all registration details
function displaySuccessMessage(firstName, lastName, email, phone, address, brand, time) {
    var result = document.getElementById('result');
    result.style.display = 'block';
    result.innerHTML = `Registration successful!<br>
                        Name: ${firstName} ${lastName}<br>
                        Email: ${email}<br>
                        Phone: ${phone}<br>
                        Address: ${address}<br>
                        Vaccine Brand: ${brand}<br>
                        Time Slot: ${time}.`;
}

// Checks the validity of the current input and enables or disables the next input field based on validity
function softValidate(currentInput) {
    var nextFieldId = currentInput.getAttribute('data-next'); // Get the ID of the next input field
    if (nextFieldId) {
        document.getElementById(nextFieldId).disabled = !currentInput.checkValidity(); // Disable or enable the next field based on validity of current input
    }
}
