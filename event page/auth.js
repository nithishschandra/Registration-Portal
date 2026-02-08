import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut 
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyD8RrIjE65clsVzzDN4IqSCUKZiVhyoNQE",
    authDomain: "project-10c78.firebaseapp.com",
    projectId: "project-10c78",
    storageBucket: "project-10c78.firebasestorage.app",
    messagingSenderId: "1063199502680",
    appId: "1:1063199502680:web:d1b9cef4f02cbd632d352d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signup-email').value;
        const pass = document.getElementById('signup-password').value;
        const name = document.getElementById('signup-name').value;

        createUserWithEmailAndPassword(auth, email, pass)
            .then(() => {
                localStorage.setItem("userName", name);
                localStorage.setItem("isLoggedIn", "true");
                alert("Account Created!");
                window.location.href = "dashboard.html";
            })
            .catch((error) => {
                alert("Sign Up Error: " + error.message);
            });
    });
}

const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const pass = document.getElementById('login-password').value;

        signInWithEmailAndPassword(auth, email, pass)
            .then(() => {
                localStorage.setItem("userEmail", email);
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = "dashboard.html";
            })
            .catch((error) => {
                alert("Login Failed: " + error.message);
            });
    });
}

window.logout = function() {
    signOut(auth).then(() => {
        localStorage.clear();
        window.location.href = "index.html";
    });
};