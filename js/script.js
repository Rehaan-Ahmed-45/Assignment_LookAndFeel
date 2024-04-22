// Validates a single input field and manages the display of error messages and field enabling
function validateInput(currentInput, nextFieldId) {
    const errorMessageId = currentInput.id + '-error'; 
    const errorMessageSpan = document.getElementById(errorMessageId); 

    if (currentInput.checkValidity()) { 
        document.getElementById(nextFieldId).disabled = false;
        errorMessageSpan.style.display = 'none'; 
    } else { 
        document.getElementById(nextFieldId).disabled = true;
        if (currentInput.value.length > 0) {
            errorMessageSpan.textContent = currentInput.title;
            errorMessageSpan.style.display = 'block';
        } else {
            errorMessageSpan.style.display = 'none';
        }
        currentInput.focus(); 
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

    if (!firstName.checkValidity()) { firstName.focus(); alert(firstName.title); return; }
    if (!lastName.checkValidity()) { lastName.focus(); alert(lastName.title); return; }
    if (!email.checkValidity()) { email.focus(); alert(email.title); return; }
    if (!phone.checkValidity()) { phone.focus(); alert(phone.title); return; }
    if (!address.checkValidity()) { address.focus(); alert(address.title); return; }
    if (!brand.checkValidity()) { brand.focus(); alert(brand.title); return; }
    if (!time.checkValidity()) { time.focus(); alert(time.title); return; }

    registerButton.disabled = false;
    displaySuccessMessage(firstName.value, lastName.value, email.value, phone.value, address.value, brand.value, time.value);
}

// Displays a success message with all registration details
function displaySuccessMessage(firstName, lastName, email, phone, address, brand, time) {
    var result = document.getElementById('result');
    result.style.display = 'block';
    result.innerHTML = `Registration successful for<br>
                        ${firstName} ${lastName}<br>
                         ${brand} vaccine appointment at<br>
                         ${time}.`;
}

// Checks the validity of the current input and enables or disables the next input field based on validity
function softValidate(currentInput) {
    var nextFieldId = currentInput.getAttribute('data-next');
    if (nextFieldId) {
        document.getElementById(nextFieldId).disabled = !currentInput.checkValidity();
    }
}

// Cancels the registration and resets the form
function cancelRegistration() {
    if (confirm("Are you sure you want to cancel your registration?")) {
        document.getElementById('registrationForm').reset();
        alert("Registration canceled.");
    }
}


function deleteRegistration() {
    if (confirm("Are you sure you want to delete your registration?")) {
        // Logic to delete registration
        alert("Registration deleted.");

        // Clear the result section
        var result = document.getElementById('result');
        result.style.display = 'none'; // Hides the result div
        result.innerHTML = ''; // Optionally clear any inner HTML if needed
    }
}

