const toggleBox = document.getElementById('checkVisible');
const password = document.getElementById('password');

toggleBox.addEventListener('click', () => {
    if(password.value == "text"){
        password.type == "password";
    } else {
        password.type = "text";
    }
})

//Survey Form checkbox get Cookies
function saveCheckbox() {
    // Get the element by the id
    const checkbox = document.getElementById("surveyText");

    // Check if the checkbox has been checked
    const isChecked = checkbox.checked;

    if (isChecked) {
        // Save the checkbox state in the cookie
        document.cookie = "checkedBox=" + isChecked;
        alert("Product State Has Been Saved");
    } else {
        // Alert the user to select the checkbox
        alert("Please select At Least One Product");
    }
}

//Function for the navigation bar redirection
function showPage(pageId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(function(section) {
      section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(pageId).style.display = 'block';
  }



