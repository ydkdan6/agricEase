const toggleBox = document.getElementById('checkVisible');
const password = document.getElementById('password');

toggleBox.addEventListener('click', () => {
    if(password.value == "text"){
        password.type == "password";
    } else {
        password.type = "text";
    }
})