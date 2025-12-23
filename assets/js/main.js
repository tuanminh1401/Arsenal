
// --- Auth Functions --- //

// Expose switchView to global scope for inline onclicks (if any)
window.switchView = function (viewName) {
    const viewSelection = document.getElementById("auth-selection");
    const viewLogin = document.getElementById("login-form");
    const viewRegister = document.getElementById("register-form");

    if (!viewSelection || !viewLogin || !viewRegister) return;

    // Hide all views
    viewSelection.classList.add("hidden");
    viewLogin.classList.add("hidden");
    viewRegister.classList.add("hidden");

    // Show selected view
    if (viewName === "selection") viewSelection.classList.remove("hidden");
    else if (viewName === "login") viewLogin.classList.remove("hidden");
    else if (viewName === "register") viewRegister.classList.remove("hidden");
};

// Expose sendCode
window.sendCode = function () {
    const btn = document.querySelector(".input-with-btn .btn-small");
    const codeGroup = document.getElementById("group-verify-code");
    if (!btn || !codeGroup) return;

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

document.addEventListener('DOMContentLoaded', () => {
    // --- Store User Data (Mock) ---
    let currentUserData = {
        name: "User",
        address: "N/A",
        fanSince: "N/A",
        idol: "N/A"
    };

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

    // DOM Elements for User Profile
    const btnLoginTrigger = document.getElementById("btn-login-trigger");
    const userProfileDisplay = document.getElementById("user-profile-display");

    // Create Menu Overlay
    const menuOverlay = document.createElement("div");
    menuOverlay.classList.add("menu-overlay");
    document.body.appendChild(menuOverlay);

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

    if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", openMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener("click", closeMenu);

    // Close menu when clicking overlay
    menuOverlay.addEventListener("click", closeMenu);

    // Close menu when clicking a link
    const navLinks = mobileNav.querySelectorAll("a");
    navLinks.forEach(link => {
        // Avoid closing if clicking the user profile link if that was inside nav (it isn't currently)
        link.addEventListener("click", closeMenu);
    });

    // Open Modal
    if (openModalBtns) {
        openModalBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                if (modal) modal.classList.remove("hidden");
            });
        });
    }

    // Close Modal
    function closeModal() {
        if (modal) modal.classList.add("hidden");
        // Reset view to selection after closing (optional)
        setTimeout(() => {
            if (window.switchView) window.switchView("selection");
        }, 300);
    }

    if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
    if (overlay) overlay.addEventListener("click", closeModal);

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
        if (modal && e.key === "Escape" && !modal.classList.contains("hidden")) {
            closeModal();
        }
    });

    // Attach View Switching Listeners
    const btnShowLogin = document.getElementById("btn-show-login");
    const btnShowRegister = document.getElementById("btn-show-register");
    const linkToRegister = document.getElementById("link-to-register");
    const linkToLogin = document.getElementById("link-to-login");

    if (btnShowLogin) btnShowLogin.addEventListener("click", () => window.switchView("login"));
    if (btnShowRegister) btnShowRegister.addEventListener("click", () => window.switchView("register"));

    if (linkToRegister) {
        linkToRegister.addEventListener("click", (e) => {
            e.preventDefault();
            window.switchView("register");
        });
    }

    if (linkToLogin) {
        linkToLogin.addEventListener("click", (e) => {
            e.preventDefault();
            window.switchView("login");
        });
    }

    // --- Handle Register Submission ---
    const registerForm = document.querySelector("#register-form form");
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent actual form submission

            // Get Input Values
            const nameInput = document.getElementById("reg-name");
            const addressInput = document.getElementById("reg-address");
            const fanSinceInput = document.getElementById("reg-fan-since");
            const idolInput = document.getElementById("reg-idol");
            const avatarInput = document.getElementById("reg-avatar");

            const name = nameInput ? nameInput.value : "User";
            const address = addressInput ? addressInput.value : "";
            const fanSince = fanSinceInput ? fanSinceInput.value : "";
            const idol = idolInput ? idolInput.value : "";

            // Save Data
            currentUserData = { name, address, fanSince, idol };

            // Determine Avatar URL
            let avatarUrl = "https://i.pravatar.cc/150?img=11"; // Default
            if (avatarInput && avatarInput.files && avatarInput.files[0]) {
                avatarUrl = URL.createObjectURL(avatarInput.files[0]);
            }

            // Perform "Login" / Update UI
            updateUserProfile(name, avatarUrl);

            alert("Registration Complete! Welcome to the Gunner family, " + name + "!");
            closeModal();
        });
    }

    // --- Handle Login Submission ---
    const loginForm = document.querySelector("#login-form form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            // Mock Login
            currentUserData = {
                name: "Tuan Minh",
                address: "London, UK",
                fanSince: "2010",
                idol: "Thierry Henry"
            };
            updateUserProfile("Tuan Minh", "https://i.pravatar.cc/150?img=11");
            alert("Login Successful! Welcome back.");
            closeModal();
        });
    }

    // --- User Dropdown Logic ---
    const userDropdown = document.getElementById("user-dropdown");
    const menuLogout = document.getElementById("menu-logout");
    const menuUserInfo = document.getElementById("menu-user-info");

    if (userProfileDisplay) {
        userProfileDisplay.addEventListener("click", (e) => {
            // Prevent triggering if clicking inside the dropdown itself
            if (e.target.closest("#user-dropdown")) return;

            if (userDropdown) {
                userDropdown.classList.toggle("hidden");
            }
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (userProfileDisplay && !userProfileDisplay.contains(e.target)) {
            if (userDropdown && !userDropdown.classList.contains("hidden")) {
                userDropdown.classList.add("hidden");
            }
        }
    });

    // Handle Logout
    if (menuLogout) {
        menuLogout.addEventListener("click", (e) => {
            e.preventDefault();
            // Hide Profile, Show Sign Up
            if (userProfileDisplay) userProfileDisplay.classList.add("hidden");
            if (btnLoginTrigger) btnLoginTrigger.classList.remove("hidden");
            if (userDropdown) userDropdown.classList.add("hidden");
            alert("You have logged out.");
        });
    }

    // Handle User Info
    if (menuUserInfo) {
        menuUserInfo.addEventListener("click", (e) => {
            e.preventDefault();
            const info = `User Information:\n\nName: ${currentUserData.name}\nAddress: ${currentUserData.address || "N/A"}\nFan Since: ${currentUserData.fanSince || "N/A"}\nIdol: ${currentUserData.idol || "N/A"}`;
            alert(info);
        });
    }

    function updateUserProfile(name, avatarUrl) {
        // Update Header UI
        if (btnLoginTrigger) btnLoginTrigger.classList.add("hidden");
        if (userProfileDisplay) {
            userProfileDisplay.classList.remove("hidden");
            const nameSpan = userProfileDisplay.querySelector(".user-name");
            const avatarImg = userProfileDisplay.querySelector(".user-avatar");

            if (nameSpan) nameSpan.textContent = name;
            if (avatarImg) avatarImg.src = avatarUrl;
        }
        // Ensure dropdown is hidden when profile is updated (e.g., after login/register)
        if (userDropdown) userDropdown.classList.add("hidden");
    }

    // Expose for debugging if needed
    window.updateUserProfile = updateUserProfile;
});

/* ================= VIDEO MODAL LOGIC ================= */
function openVideo() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('youtube-frame');
    if (modal && iframe) {
        modal.classList.remove('hidden');
        // Arsenal Invincibles Highlight URL (Embed version)
        iframe.src = "https://www.youtube.com/embed/Z41Um_rDbVw?autoplay=1";
    }
}

function closeVideo(e) {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('youtube-frame');
    // Close if clicked overlay or x button
    if (e && (e.target === modal || e.target.classList.contains('close-btn') || e.target.classList.contains('icon-close'))) {
        if (modal && iframe) {
            modal.classList.add('hidden');
            iframe.src = ""; // Stop playback
        }
    }
}

/* ================= PLAYER DATABASE LOGIC ================= */
// Comprehensive Arsenal Player Database (Current, Legends, Past Stars)
const playerData = [
    // --- Current Squad ---
    { name: "Bukayo Saka", season: "24TS", pos: "RW", stars: 5, ovr: 92, pac: 91, sho: 86, pas: 87, dri: 93, avatar: "https://www.arsenal.com/sites/default/files/styles/player_card_large/public/images/SAKA_Headshot_web_mxqw4vma.png?auto=webp&itok=nSOTSLiN" },
    { name: "Martin Ødegaard", season: "24TY", pos: "CAM", stars: 5, ovr: 91, pac: 83, sho: 85, pas: 94, dri: 92, avatar: "https://www.arsenal.com/sites/default/files/styles/player_card_large/public/images/ODEGAARD_Headshot_web_z0tram3m.png?auto=webp&itok=F8jOXTSf" },
    { name: "Declan Rice", season: "24TS", pos: "CDM", stars: 4, ovr: 90, pac: 80, sho: 78, pas: 89, dri: 85, avatar: "https://www.arsenal.com/sites/default/files/styles/player_card_large/public/images/RICE_Headshot_web_ml5vq29g.png?auto=webp&itok=3MZ50MMk" },
    { name: "William Saliba", season: "24TS", pos: "CB", stars: 3, ovr: 89, pac: 85, sho: 55, pas: 80, dri: 81, avatar: "https://www.arsenal.com/sites/default/files/styles/player_card_large/public/images/SALIBA_Headshot_web_khl9z1vw.png?auto=webp&itok=fZFYbPqZ" },
    { name: "Gabriel Magalhães", season: "24TS", pos: "CB", stars: 3, ovr: 88, pac: 80, sho: 60, pas: 75, dri: 72, avatar: "https://www.arsenal.com/sites/default/files/styles/player_card_large/public/images/MAGALHAES_Headshot_web_uhkgt913.png?auto=webp&itok=UoaaAYnU" },
    { name: "Gabriel Jesus", season: "23", pos: "ST", stars: 4, ovr: 85, pac: 86, sho: 82, pas: 79, dri: 88, avatar: "https://www.arsenal.com/sites/default/files/styles/player_card_large/public/images/JESUS_Headshot_web_wtybpitx.png?auto=webp&itok=TH4RbWIt" },
    { name: "G. Martinelli", season: "24", pos: "LW", stars: 4, ovr: 86, pac: 92, sho: 80, pas: 78, dri: 87, avatar: "https://www.arsenal.com/sites/default/files/styles/player_card_large/public/images/MARTINELLI_Headshot_web_l7r7lao5.png?auto=webp&itok=QK8zQJ7L" },
    { name: "Ben White", season: "24", pos: "RB", stars: 3, ovr: 86, pac: 82, sho: 65, pas: 82, dri: 80, avatar: "https://www.arsenal.com/sites/default/files/styles/player_card_large/public/images/B.WHITE_Headshot_web_xdbqzl78.png?auto=webp&itok=0gg2E5xJ" },
    { name: "Kai Havertz", season: "24TS", pos: "ST", stars: 4, ovr: 87, pac: 84, sho: 83, pas: 84, dri: 85, avatar: "https://www.arsenal.com/sites/default/files/styles/player_card_large/public/images/HAVERTZ_Headshot_web_frc1i8l3.png?auto=webp&itok=JvqDQSL8" },
    { name: "Leandro Trossard", season: "24", pos: "LW", stars: 4, ovr: 84, pac: 83, sho: 84, pas: 82, dri: 86, avatar: "https://www.arsenal.com/sites/default/files/styles/player_card_large/public/images/TROSSARD_Headshot_web_c75bgy21.png?auto=webp&itok=dCCTIY0U" },
    { name: "Thomas Partey", season: "23", pos: "CDM", stars: 3, ovr: 84, pac: 75, sho: 78, pas: 84, dri: 83, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p167199.png" },
    { name: "Jorginho", season: "23", pos: "CM", stars: 3, ovr: 83, pac: 60, sho: 70, pas: 88, dri: 82, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p85955.png" },
    { name: "Oleksandr Zinchenko", season: "23", pos: "LB", stars: 3, ovr: 83, pac: 78, sho: 72, pas: 86, dri: 85, avatar: "https://www.arsenal.com/sites/default/files/styles/player_card_large/public/images/Zinchenko_Headshot_web_htlbwppj.png?auto=webp&itok=_8IMI2Mj" },
    { name: "Takehiro Tomiyasu", season: "23", pos: "RB", stars: 3, ovr: 81, pac: 79, sho: 55, pas: 74, dri: 73, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p223723.png" },
    { name: "Jurrien Timber", season: "24", pos: "LB", stars: 3, ovr: 82, pac: 84, sho: 60, pas: 80, dri: 82, avatar: "https://www.arsenal.com/sites/default/files/styles/player_card_large/public/images/TIMBER_Headshot_web_by8hrsl6.png?auto=webp&itok=k6XxXs7u" },
    { name: "Jakub Kiwior", season: "24", pos: "CB", stars: 2, ovr: 79, pac: 78, sho: 45, pas: 72, dri: 70, avatar: "https://www.arsenal.com/sites/default/files/styles/player_card_large/public/images/KIWIOR_Headshot_web_yxrcq925.png?auto=webp&itok=bFPJ-Yfy" },
    { name: "David Raya", season: "24TS", pos: "GK", stars: 1, ovr: 86, pac: 82, sho: 55, pas: 88, dri: 70, avatar: "https://www.arsenal.com/sites/default/files/styles/player_card_large/public/images/RAYA_Headshot_web_njztl3wr.png?auto=webp&itok=_6peqasx" },
    { name: "Aaron Ramsdale", season: "23", pos: "GK", stars: 1, ovr: 82, pac: 80, sho: 60, pas: 85, dri: 65, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p204801.png" },
    { name: "Fabio Vieira", season: "23", pos: "CAM", stars: 3, ovr: 78, pac: 76, sho: 75, pas: 82, dri: 80, avatar: "https://www.arsenal.com/sites/default/files/styles/player_card_large/public/images/VIEIRA_Headshot_web_ttvp4mvt.png?auto=webp&itok=e0RYtimf" },
    { name: "Eddie Nketiah", season: "23", pos: "ST", stars: 3, ovr: 77, pac: 84, sho: 78, pas: 68, dri: 80, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p205533.png" },

    // --- Legends (Invincibles & Icons) ---
    { name: "Thierry Henry", season: "ICON", pos: "ST", stars: 5, ovr: 96, pac: 98, sho: 96, pas: 90, dri: 95, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1619.png" },
    { name: "Dennis Bergkamp", season: "ICON", pos: "CF", stars: 5, ovr: 94, pac: 85, sho: 94, pas: 95, dri: 96, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1608.png" },
    { name: "Patrick Vieira", season: "ICON", pos: "CM", stars: 4, ovr: 93, pac: 86, sho: 82, pas: 89, dri: 87, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1601.png" },
    { name: "Robert Pires", season: "ICON", pos: "LM", stars: 4, ovr: 91, pac: 88, sho: 85, pas: 90, dri: 92, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1613.png" },
    { name: "Sol Campbell", season: "ICON", pos: "CB", stars: 3, ovr: 90, pac: 84, sho: 45, pas: 70, dri: 72, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1024.png" },
    { name: "Ashley Cole", season: "ICON", pos: "LB", stars: 3, ovr: 89, pac: 92, sho: 65, pas: 84, dri: 85, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p7278.png" },
    { name: "Freddie Ljungberg", season: "ICON", pos: "RM", stars: 4, ovr: 88, pac: 90, sho: 82, pas: 84, dri: 88, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1623.png" },
    { name: "Ian Wright", season: "ICON", pos: "ST", stars: 4, ovr: 90, pac: 91, sho: 92, pas: 78, dri: 86, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1617.png" },
    { name: "David Seaman", season: "ICON", pos: "GK", stars: 1, ovr: 89, pac: 80, sho: 50, pas: 82, dri: 75, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1216.png" },
    { name: "Tony Adams", season: "ICON", pos: "CB", stars: 2, ovr: 91, pac: 78, sho: 55, pas: 75, dri: 70, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p898.png" },
    { name: "Emmanuel Petit", season: "ICON", pos: "CDM", stars: 3, ovr: 88, pac: 82, sho: 75, pas: 86, dri: 80, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1622.png" },
    { name: "Lauren", season: "ICON", pos: "RB", stars: 3, ovr: 86, pac: 85, sho: 65, pas: 80, dri: 82, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1621.png" },
    { name: "Gilberto Silva", season: "ICON", pos: "CDM", stars: 3, ovr: 87, pac: 78, sho: 68, pas: 84, dri: 79, avatar: "./pic/players/gilberto.jpg" },
    { name: "Kolo Toure", season: "ICON", pos: "CB", stars: 3, ovr: 86, pac: 83, sho: 55, pas: 72, dri: 75, avatar: "./pic/players/toure.jpg" },
    { name: "Jens Lehmann", season: "ICON", pos: "GK", stars: 1, ovr: 87, pac: 78, sho: 50, pas: 85, dri: 72, avatar: "./pic/players/lehmann.jpg" },

    // --- Past Stars ---
    { name: "Cesc Fabregas", season: "LEG", pos: "CM", stars: 4, ovr: 90, pac: 78, sho: 84, pas: 95, dri: 88, avatar: "./pic/players/fabregas.jpg" },
    { name: "Robin van Persie", season: "LEG", pos: "ST", stars: 4, ovr: 91, pac: 87, sho: 93, pas: 84, dri: 89, avatar: "./pic/players/van_persie.jpg" },
    { name: "Alexis Sanchez", season: "LEG", pos: "LW", stars: 4, ovr: 90, pac: 90, sho: 87, pas: 85, dri: 92, avatar: "./pic/players/sanchez.jpg" },
    { name: "Mesut Özil", season: "LEG", pos: "CAM", stars: 5, ovr: 90, pac: 78, sho: 76, pas: 96, dri: 90, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p37605.png" },
    { name: "Santi Cazorla", season: "LEG", pos: "CM", stars: 5, ovr: 88, pac: 80, sho: 82, pas: 90, dri: 91, avatar: "./pic/players/cazorla.jpg" },
    { name: "Aaron Ramsey", season: "LEG", pos: "CM", stars: 3, ovr: 86, pac: 82, sho: 80, pas: 85, dri: 84, avatar: "./pic/players/ramsey.jpg" },
    { name: "Jack Wilshere", season: "LEG", pos: "CM", stars: 4, ovr: 85, pac: 80, sho: 75, pas: 86, dri: 88, avatar: "./pic/players/wilshere.jpg" },
    { name: "Theo Walcott", season: "LEG", pos: "RW", stars: 3, ovr: 84, pac: 96, sho: 80, pas: 75, dri: 83, avatar: "./pic/players/walcott.jpg" },
    { name: "Olivier Giroud", season: "LEG", pos: "ST", stars: 3, ovr: 85, pac: 60, sho: 86, pas: 78, dri: 75, avatar: "./pic/players/giroud.jpg" },
    { name: "Laurent Koscielny", season: "LEG", pos: "CB", stars: 3, ovr: 86, pac: 82, sho: 50, pas: 75, dri: 74, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p51507.png" },
    { name: "Tomas Rosicky", season: "LEG", pos: "CAM", stars: 4, ovr: 85, pac: 80, sho: 80, pas: 88, dri: 87, avatar: "./pic/players/rosicky.jpg" },
    { name: "Samir Nasri", season: "LEG", pos: "CAM", stars: 4, ovr: 86, pac: 84, sho: 80, pas: 87, dri: 89, avatar: "./pic/players/nasri.jpg" },
    { name: "Gael Clichy", season: "LEG", pos: "LB", stars: 3, ovr: 84, pac: 90, sho: 60, pas: 78, dri: 82, avatar: "./pic/players/clichy.jpg" },
    { name: "Bacary Sagna", season: "LEG", pos: "RB", stars: 3, ovr: 84, pac: 84, sho: 60, pas: 78, dri: 76, avatar: "./pic/players/sagna.jpg" },
    { name: "Wojciech Szczesny", season: "LEG", pos: "GK", stars: 1, ovr: 85, pac: 80, sho: 50, pas: 80, dri: 72, avatar: "./pic/players/szczesny.jpg" },
    { name: "Lukas Podolski", season: "LEG", pos: "LM", stars: 3, ovr: 84, pac: 85, sho: 90, pas: 78, dri: 80, avatar: "./pic/players/podolski.jpg" },
    { name: "Per Mertesacker", season: "LEG", pos: "CB", stars: 2, ovr: 84, pac: 35, sho: 40, pas: 65, dri: 50, avatar: "./pic/players/mertesacker.jpg" },
    { name: "Alex Lacazette", season: "LEG", pos: "ST", stars: 4, ovr: 85, pac: 84, sho: 85, pas: 78, dri: 85, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p59966.png" },
    { name: "Pierre-Emerick Aubameyang", season: "LEG", pos: "ST", stars: 4, ovr: 89, pac: 96, sho: 88, pas: 75, dri: 84, avatar: "./pic/players/aubameyang.jpg" },
    { name: "Granit Xhaka", season: "LEG", pos: "CDM", stars: 3, ovr: 84, pac: 60, sho: 75, pas: 86, dri: 78, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p84450.png" },
    { name: "Kieran Tierney", season: "23", pos: "LB", stars: 3, ovr: 81, pac: 86, sho: 65, pas: 78, dri: 80, avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p192895.png" },
    { name: "Emile Smith Rowe", season: "23", pos: "CAM", stars: 4, ovr: 80, pac: 82, sho: 75, pas: 82, dri: 85, avatar: "./pic/players/smith_rowe.jpg" }
];

let globalPlayerData = playerData; // To store filtered state

function openPlayerDatabase() {
    const dbView = document.getElementById('player-database-view');
    if (dbView) {
        dbView.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Disable background scroll
        renderPlayerList(playerData); // Render full list on open
        setActiveFilter('all');
    }
}

function closePlayerDatabase() {
    const dbView = document.getElementById('player-database-view');
    if (dbView) {
        dbView.classList.add('hidden');
        document.body.style.overflow = ''; // Restore background scroll
    }
}

// Filter Logic
function filterPlayersByPos(category) {
    setActiveFilter(category);
    let filtered = [];

    if (category === 'all') {
        filtered = playerData;
    } else if (category === 'FWD') {
        // ST, RW, LW, CF, RF, LF
        filtered = playerData.filter(p => ['ST', 'RW', 'LW', 'CF', 'RF', 'LF'].includes(p.pos));
    } else if (category === 'MID') {
        // CAM, CDM, CM, LM, RM
        filtered = playerData.filter(p => ['CAM', 'CDM', 'CM', 'LM', 'RM'].includes(p.pos));
    } else if (category === 'DEF') {
        // CB, LB, RB, LWB, RWB
        filtered = playerData.filter(p => ['CB', 'LB', 'RB', 'LWB', 'RWB'].includes(p.pos));
    } else if (category === 'GK') {
        filtered = playerData.filter(p => p.pos === 'GK');
    }

    globalPlayerData = filtered; // Update global state for search
    renderPlayerList(filtered);
}

function setActiveFilter(category) {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => {
        if (btn.innerText.toLowerCase().includes(category.toLowerCase()) ||
            (category === 'all' && btn.innerText === 'All')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function renderPlayerList(data) {
    const grid = document.getElementById('player-list-grid');
    if (!grid) return;
    grid.innerHTML = "";

    if (data.length === 0) {
        grid.innerHTML = "<div style='color:#ccc; text-align:center; padding:20px;'>No players found.</div>";
        return;
    }

    data.forEach(p => {
        // Generate Stars HTML
        let starsHtml = '';
        for (let i = 0; i < 5; i++) {
            starsHtml += `<span class="star ${i < p.stars ? 'gold' : 'gray'}">★</span>`;
        }

        // Color based on Position for bars/boxes
        let posClass = p.pos;

        // Use Placeholder if no avatar
        const avatarUrl = p.avatar ? p.avatar : "./pic/arsenal-fc-logo.png";

        const html = `
            <div class="player-row">
                <!-- Left Colored Bar -->
                <div class="p-bar ${posClass}">
                    <span class="vertical-pos">${p.pos}</span>
                </div>
                
                <!-- Avatar -->
                <div class="p-avatar-container">
                    <img src="${avatarUrl}" alt="${p.name}" class="p-avatar-img" onerror="this.src='./pic/arsenal-fc-logo.png'">
                </div>

                <!-- Info Block (Name, Season, OVR, Pos) -->
                <div class="p-main-info">
                    <div class="p-top-row">
                        <span class="p-season-badge">${p.season}</span>
                        <span class="p-name">${p.name}</span>
                    </div>
                    <div class="p-bottom-row">
                        <div class="p-stars">${starsHtml}</div>
                        <span class="p-pos-box ${posClass}">${p.pos}</span>
                        <span class="p-ovr-num">${p.ovr}</span>
                    </div>
                </div>

                <!-- Stats Columns (Right Side) -->
                <div class="p-stats-group">
                    <div class="p-stat-col">
                         <div class="stat-val ${p.pac >= 90 ? 'high' : ''}">${p.pac}</div>
                         <div class="stat-label">PAC</div>
                    </div>
                    <div class="p-stat-col">
                         <div class="stat-val ${p.sho >= 90 ? 'high' : ''}">${p.sho}</div>
                          <div class="stat-label">SHO</div>
                    </div>
                    <div class="p-stat-col">
                         <div class="stat-val ${p.pas >= 90 ? 'high' : ''}">${p.pas}</div>
                          <div class="stat-label">PAS</div>
                    </div>
                    <div class="p-stat-col">
                         <div class="stat-val ${p.dri >= 90 ? 'high' : ''}">${p.dri}</div>
                          <div class="stat-label">DRI</div>
                    </div>
                    <div class="p-team-logo">
                        <img src="./pic/arsenal-fc-logo.png" alt="Arsenal" style="width:30px; opacity:0.8;">
                    </div>
                </div>
            </div>
        `;
        grid.innerHTML += html;
    });
}

function filterPlayers() {
    const query = document.getElementById('player-search').value.toLowerCase();
    // Filter from the CURRENTLY filtered set (globalPlayerData) or from all? 
    // Usually better to search from ALL data, or refine current filter.
    // Let's refine from ALL data to avoid confusion, but if we want strictly within category...
    // Let's search ALL data for simplicity as per common UX
    const filtered = playerData.filter(p => p.name.toLowerCase().includes(query));
    renderPlayerList(filtered);
}
