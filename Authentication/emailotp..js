import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const auth = getAuth();

const registerUser = (email) => {
  createUserWithEmailAndPassword(auth, email)
    .then((userCredential) => {
      const user = userCredential.user;
      // Send email verification
      sendEmailVerification(user)
        .then(() => {
          console.log("Email verification sent.");
          alert("Email verification sent. Check your email.");
        })
        .catch((error) => {
          console.error("Error sending email verification:", error);
          alert("Error sending email verification.");
        });
    })
    .catch((error) => {
      console.error("Error creating user:", error);
      alert("Error creating user.");
    });
};

// Example usage
const email = document.getElementById('email').value;
registerUser(email);
