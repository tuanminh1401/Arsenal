
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
// Mock Data (Based on user request + FC Mobile style stats)
const playerData = [
    {
        name: "V. Gyökeres",
        season: "25TS",
        pos: "ST",
        stars: 4,
        avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p468028.png", // Placeholder
        ovr: 121,
        pac: 122, sho: 119, pas: 105, dri: 115
    },
    {
        name: "Gabriel",
        season: "25TS",
        pos: "CB",
        stars: 3,
        avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p225321.png",
        ovr: 119,
        pac: 106, sho: 60, pas: 95, dri: 90
    },
    {
        name: "D. Rice",
        season: "25TS",
        pos: "CM",
        stars: 4,
        avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p204480.png",
        ovr: 119,
        pac: 102, sho: 98, pas: 115, dri: 108
    },
    {
        name: "B. Saka",
        season: "25TS",
        pos: "RW",
        stars: 5,
        avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p223340.png",
        ovr: 119,
        pac: 120, sho: 115, pas: 110, dri: 122
    },
    {
        name: "E. Eze",
        season: "25DP",
        pos: "CAM",
        stars: 5,
        avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p232361.png", // Eze placeholder (Crystal Palace but requested in context likely)
        ovr: 119,
        pac: 115, sho: 112, pas: 118, dri: 124
    },
    {
        name: "W. Saliba",
        season: "25TY",
        pos: "CB",
        stars: 3,
        avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p462424.png",
        ovr: 118,
        pac: 108, sho: 55, pas: 98, dri: 95
    },
    {
        name: "Jorginho",
        season: "CH",
        pos: "CDM",
        stars: 3,
        avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p85955.png",
        ovr: 118,
        pac: 85, sho: 88, pas: 118, dri: 105
    },
    {
        name: "Gabriel Jesus",
        season: "FAC",
        pos: "ST",
        stars: 5,
        avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p205651.png",
        ovr: 118,
        pac: 116, sho: 112, pas: 105, dri: 120
    },
    {
        name: "G. Martinelli",
        season: "25TS",
        pos: "LW",
        stars: 4,
        avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p444145.png",
        ovr: 118,
        pac: 121, sho: 110, pas: 105, dri: 119
    },
    {
        name: "Ben White",
        season: "25TS",
        pos: "RB",
        stars: 3,
        avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p198869.png",
        ovr: 117,
        pac: 105, sho: 70, pas: 110, dri: 95
    },
    {
        name: "Kai Havertz",
        season: "25TS",
        pos: "ST",
        stars: 4,
        avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p219847.png",
        ovr: 118,
        pac: 108, sho: 112, pas: 108, dri: 110
    },
    {
        name: "Leandro Trossard",
        season: "25TS",
        pos: "LW",
        stars: 4,
        avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p116216.png",
        ovr: 116,
        pac: 105, sho: 114, pas: 108, dri: 115
    },
    {
        name: "David Raya",
        season: "25TS",
        pos: "GK",
        stars: 1,
        avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p154566.png",
        ovr: 117,
        pac: 80, sho: 60, pas: 95, dri: 70
    },
    {
        name: "Thomas Partey",
        season: "24TY",
        pos: "CDM",
        stars: 3,
        avatar: "https://resources.premierleague.com/premierleague/photos/players/250x250/p167199.png",
        ovr: 116,
        pac: 95, sho: 90, pas: 112, dri: 105
    }
];

function openPlayerDatabase() {
    const dbView = document.getElementById('player-database-view');
    if (dbView) {
        dbView.classList.remove('hidden');
        renderPlayerList(playerData); // Render on open
    }
}

function closePlayerDatabase() {
    const dbView = document.getElementById('player-database-view');
    if (dbView) {
        dbView.classList.add('hidden');
    }
}

function renderPlayerList(data) {
    const grid = document.getElementById('player-list-grid');
    if (!grid) return;
    grid.innerHTML = "";

    data.forEach(p => {
        // Generate Stars HTML
        let starsHtml = '';
        for (let i = 0; i < 5; i++) {
            starsHtml += `<span class="star ${i < p.stars ? 'gold' : 'gray'}">★</span>`;
        }

        // Color based on Position for bars/boxes
        let posClass = p.pos;

        const html = `
            <div class="player-row">
                <!-- Left Colored Bar -->
                <div class="p-bar ${posClass}">
                    <span class="vertical-pos">${p.pos}</span>
                </div>
                
                <!-- Avatar -->
                <div class="p-avatar-container">
                    <img src="${p.avatar}" alt="${p.name}" class="p-avatar-img">
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
                <!-- Use grid fraction layout for these -->
                <div class="p-stats-group">
                    <div class="p-stat-col">
                         <div class="stat-val ${p.pac >= 100 ? 'high' : ''}">${p.pac}</div>
                         <div class="stat-label">PAC</div>
                    </div>
                    <div class="p-stat-col">
                         <div class="stat-val ${p.sho >= 100 ? 'high' : ''}">${p.sho}</div>
                          <div class="stat-label">SHO</div>
                    </div>
                    <div class="p-stat-col">
                         <div class="stat-val ${p.pas >= 100 ? 'high' : ''}">${p.pas}</div>
                          <div class="stat-label">PAS</div>
                    </div>
                    <div class="p-stat-col">
                         <div class="stat-val ${p.dri >= 100 ? 'high' : ''}">${p.dri}</div>
                          <div class="stat-label">DRI</div>
                    </div>
                     <!-- Arsenal Logo on far right -->
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
    const filtered = playerData.filter(p => p.name.toLowerCase().includes(query));
    renderPlayerList(filtered);
}
