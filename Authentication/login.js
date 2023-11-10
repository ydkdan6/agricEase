
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB14gSpksofJIE7Qv_aMiFjtLqjJEBSpFA",
  authDomain: "agricease.firebaseapp.com",
  projectId: "agricease",
  storageBucket: "agricease.appspot.com",
  messagingSenderId: "1067973519988",
  appId: "1:1067973519988:web:681aaa80adbd190970ff21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', function () { 

let form = document.getElementById('mainForm');
let email = document.getElementById('email');
let password = document.getElementById('password');



let LoginUser = evt => {
  evt.preventDefault();
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((credentials) =>{
    const user = credentials.user;
    console.log(user);
    alert(user.email + " Login Successfully!")

    window.location.href = "surveyPage.html";
  })
  .catch((error) => {
    alert(error.message);
    console.log(error.code);
    console.log(error.message);
  })
}

form.addEventListener('submit', LoginUser);

})

