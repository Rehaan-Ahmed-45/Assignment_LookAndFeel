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

    if (!firstName.checkValidity() || !lastName.checkValidity() || !email.checkValidity() ||
        !phone.checkValidity() || !address.checkValidity() || !brand.checkValidity() || !time.checkValidity()) {
        [firstName, lastName, email, phone, address, brand, time].find(field => !field.checkValidity()).focus();
        alert("Please enter required details before submitting the registration.");
        return;
    }

    displaySuccessMessage(firstName.value, lastName.value, email.value, phone.value, address.value, brand.value, time.value);
}

// Displays a success message with all registration details
function displaySuccessMessage(firstName, lastName, email, phone, address, brand, time) {
    var result = document.getElementById('result');
    result.style.display = 'block';
    result.innerHTML = `Registration successful for<br>
                        ${firstName} ${lastName}<br>
                        Email: ${email}<br>
                        Phone: ${phone}<br>
                        Address: ${address}<br>
                        ${brand} vaccine appointment at<br>
                        ${time}.`;

    var registerButton = document.getElementById('registerButton');
    registerButton.textContent = 'Register';
    registerButton.onclick = validateForm;

    var editButton = document.getElementById('editButton');
    editButton.style.display = 'inline-block';
}

// Allows editing of the registration details
function editRegistration() {
    var inputs = document.querySelectorAll('#registrationForm input, #registrationForm select');
    inputs.forEach(function(input) {
        input.disabled = false;
    });

    var result = document.getElementById('result');
    result.style.display = 'none';

    var registerButton = document.getElementById('registerButton');
    registerButton.textContent = 'Update Registration';
    registerButton.onclick = validateForm;

    var editButton = document.getElementById('editButton');
    editButton.style.display = 'none';
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
        var result = document.getElementById('result');
        result.style.display = 'none';
        result.innerHTML = '';
    }
}

// Function to delete registration and clear form fields
function deleteRegistration() {
    if (confirm("Are you sure you want to delete your registration?")) {
        alert("Registration deleted.");
        var result = document.getElementById('result');
        result.style.display = 'none';
        result.innerHTML = '';

        document.getElementById('registrationForm').reset();
    }
}
