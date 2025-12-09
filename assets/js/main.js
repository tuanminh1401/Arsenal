// DOM Elements for Auth
const modal = document.getElementById("auth-modal");
const openModalBtns = document.querySelectorAll(".btn-sign-up");
const closeModalBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".modal-overlay");

// DOM Elements for Mobile Menu
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileNav = document.querySelector(".nav");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const body = document.body;

// Create Menu Overlay
const menuOverlay = document.createElement("div");
menuOverlay.classList.add("menu-overlay");
document.body.appendChild(menuOverlay);

// Views
const viewSelection = document.getElementById("auth-selection");
const viewLogin = document.getElementById("login-form");
const viewRegister = document.getElementById("register-form");

// --- Mobile Menu Functions ---
function openMenu() {
    mobileNav.classList.add("active");
    menuOverlay.classList.add("active");
    body.style.overflow = "hidden"; // Prevent scrolling
}

function closeMenu() {
    mobileNav.classList.remove("active");
    menuOverlay.classList.remove("active");
    body.style.overflow = "";
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", openMenu);
}

if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", closeMenu);
}

// Close menu when clicking overlay
menuOverlay.addEventListener("click", closeMenu);

// Close menu when clicking a link
const navLinks = mobileNav.querySelectorAll("a");
navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});


// --- Auth Functions --- //

// Open Modal
openModalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.remove("hidden");
    });
});

// Close Modal
function closeModal() {
    modal.classList.add("hidden");
    // Reset view to selection after closing (optional)
    setTimeout(() => {
        switchView("selection");
    }, 300);
}

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Close on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

// Switch Views
function switchView(viewName) {
    // Hide all views
    viewSelection.classList.add("hidden");
    viewLogin.classList.add("hidden");
    viewRegister.classList.add("hidden");

    // Show selected view
    if (viewName === "selection") {
        viewSelection.classList.remove("hidden");
    } else if (viewName === "login") {
        viewLogin.classList.remove("hidden");
    } else if (viewName === "register") {
        viewRegister.classList.remove("hidden");
    }
}

// Expose switchView to global scope for inline onclicks (if any)
window.switchView = switchView;

// Simulate Sending Code
function sendCode() {
    const btn = document.querySelector(".input-with-btn .btn-small");
    const codeGroup = document.getElementById("group-verify-code");

    // Change button state
    btn.textContent = "Sending...";
    btn.disabled = true;
    btn.style.opacity = "0.7";

    // Simulate API delay
    setTimeout(() => {
        btn.textContent = "Code Sent!";
        btn.style.background = "#28a745"; // Green color

        // Show code input
        codeGroup.classList.remove("hidden");

        // Log demo code
        console.log("DEMO CODE: 123456");

        // Reset button after a while
        setTimeout(() => {
            btn.disabled = false;
            btn.textContent = "Resend";
            btn.style.background = "#333";
            btn.style.opacity = "1";
        }, 30000);
    }, 1500);
}

// Expose sendCode
window.sendCode = sendCode;
