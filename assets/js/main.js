// DOM Elements
const modal = document.getElementById("auth-modal");
const openModalBtns = document.querySelectorAll(".btn-sign-up");
const closeModalBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".modal-overlay");

// Views
const viewSelection = document.getElementById("auth-selection");
const viewLogin = document.getElementById("login-form");
const viewRegister = document.getElementById("register-form");

// View Switching Buttons
const btnShowLogin = document.getElementById("btn-show-login");
const btnShowRegister = document.getElementById("btn-show-register");
const linkToRegister = document.getElementById("link-to-register");
const linkToLogin = document.getElementById("link-to-login");

// Register Logic
const btnSendCode = document.getElementById("btn-send-code");
const groupVerify = document.getElementById("group-verify-code");

// --- MODAL FUNCTIONALITY ---

const openModal = (e) => {
    e.preventDefault();
    modal.classList.remove("hidden");
    // Reset to selection view
    switchView(viewSelection);
};

const closeModal = () => {
    modal.classList.add("hidden");
};

// Add Event Listeners to all "Sign Up" buttons
openModalBtns.forEach((btn) => {
    btn.addEventListener("click", openModal);
});

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// --- VIEW SWITCHING ---

const switchView = (targetView) => {
    // Hide all
    viewSelection.classList.add("hidden");
    viewLogin.classList.add("hidden");
    viewRegister.classList.add("hidden");

    // Show target
    targetView.classList.remove("hidden");
};

// From Selection to Forms
btnShowLogin.addEventListener("click", () => switchView(viewLogin));
btnShowRegister.addEventListener("click", () => switchView(viewRegister));

// Between Forms
linkToRegister.addEventListener("click", (e) => {
    e.preventDefault();
    switchView(viewRegister);
});

linkToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    switchView(viewLogin);
});

// --- REGISTER LOGIC ---

btnSendCode.addEventListener("click", () => {
    const emailInput = document.getElementById("reg-email");
    if (!emailInput.value) {
        alert("Please enter an email address first.");
        return;
    }

    // Validate email format simply
    if (!emailInput.value.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }

    // Mock sending code
    btnSendCode.textContent = "Sending...";
    btnSendCode.disabled = true;

    setTimeout(() => {
        btnSendCode.textContent = "Sent!";
        groupVerify.classList.remove("hidden");
        alert(`Verification code sent to ${emailInput.value} (Check your console/mock)`);
        console.log("Mock Verification Code: 123456");
    }, 1500);
});
