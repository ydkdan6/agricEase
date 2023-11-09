const emailForm = document.getElementById('form1');
const numberForm = document.getElementById('form2');
const switchToEmailButton = document.getElementById('switch-to-email');
const switchToNumberButton = document.getElementById('switch-to-number');

numberForm.style.display = 'none';

//function to toggle between email form and Phone Number form

function toggleForm() {
    if(emailForm.style.display == 'block') {
        emailForm.style.display = 'none';
        numberForm.style.display = 'block';
    } else {
        emailForm.style.display = 'block';
        numberForm.style.display = 'none';
    }
}

//Event Handlers to toggle forms 
switchToEmailButton.addEventListener('click', toggleForm);
switchToNumberButton.addEventListener('click', toggleForm);