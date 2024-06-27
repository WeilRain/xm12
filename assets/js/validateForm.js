function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var phoneError = document.getElementById('phoneError');
    var successMessage = document.getElementById('successMessage');

    nameError.style.display = 'none';
    emailError.style.display = 'none';
    phoneError.style.display = 'none';
    successMessage.style.display = 'none';

    var valid = true;

    if (name.trim() === '') {
        nameError.style.display = 'block';
        valid = false;
    }

    if (email.trim() === '' || !validateEmail(email)) {
        emailError.style.display = 'block';
        valid = false;
    }

    if (phone.trim() === '' || !validatePhone(phone)) {
        phoneError.style.display = 'block';
        valid = false;
    }

    if (valid) {
        successMessage.style.display = 'block';
    }
}

function validateEmail(email) {
    var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    var re = /^[0-9]+$/;
    return re.test(phone);
}

document.getElementById('phone').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
});