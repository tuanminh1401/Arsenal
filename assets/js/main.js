
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
// Player Data moved to assets/js/player-data.js

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
            <div class="player-row" onclick="openPlayerDetail(${globalPlayerData.indexOf(p)})" style="cursor: pointer;">
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
                    <div class="p-stat-col nat">
                        <img src="https://resources.premierleague.com/premierleague/flags/${p.flag}.png" alt="Nat" class="p-flag-icon" onerror="this.style.display='none'">
                    </div>
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

/* ================= PLAYER DETAIL VIEW LOGIC ================= */
let detailChart = null;

function openPlayerDetail(index) {
    const p = globalPlayerData[index];
    if (!p) return;

    const overlay = document.getElementById('player-detail-overlay');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Populate Header
    document.getElementById('pd-season').innerText = p.season;
    document.getElementById('pd-name').innerText = p.name;
    document.getElementById('pd-pos').innerText = p.pos;
    document.getElementById('pd-pos').className = `pd-pos ${p.pos}`; // Apply color class
    document.getElementById('pd-ovr').innerText = p.ovr;

    // Country & Flag
    const flagImg = document.getElementById('pd-nation-flag');
    if (p.flag) {
        flagImg.src = `https://resources.premierleague.com/premierleague/flags/${p.flag}.png`;
        flagImg.style.display = 'block';
    } else {
        flagImg.style.display = 'none';
    }
    document.getElementById('pd-nation-name').innerText = p.flag || ""; // Keep strict

    // Action Image (Use Avatar for now, or a better placeholder)
    document.getElementById('pd-action-img').src = p.avatar;

    // Generate Detailed Stats
    const stats = generateDetailedStats(p);

    // Render Stats Row
    renderMainStatsRow(stats);

    // Render Attributes Grid
    renderAttributesGrid(stats);

    // Render Traits
    renderTraits(p);

    // Render Bio, Tabs, Achievements
    renderTabsAndContent(p);

    // Render Radar Chart
    setTimeout(() => {
        renderRadarChart(stats);
    }, 100);
}

function closePlayerDetail() {
    const overlay = document.getElementById('player-detail-overlay');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
}

// Global variable to store current player for filtering
let currentPlayer = null;

function renderTabsAndContent(p) {
    currentPlayer = p;

    // Reset Tab to General
    switchTab('general');

    // 1. General Tab
    const general = p.general || {};
    document.getElementById('pd-bio-text').innerText = general.bio || "No biography available.";
    document.getElementById('pd-history-text').innerText = general.history || "No history available.";

    // Clubs List
    const clubsList = document.getElementById('pd-clubs-list');
    clubsList.innerHTML = (general.clubs || []).map(c => `<li>${c}</li>`).join('');

    // 2. Contribution Tab
    initContributionFilters(p);
    filterStats(); // Initial render of all stats

    // 3. Achievement Tab
    const achList = document.getElementById('pd-achievements-list');
    achList.innerHTML = (p.achievements || []).map(a => `<li>${a}</li>`).join('');
    if (!p.achievements || p.achievements.length === 0) {
        achList.innerHTML = `<li style="border:none; color:#666; background:none; padding-left:0;">No tracked achievements.</li>`;
    }
}

function switchTab(tabName) {
    // Update Buttons
    document.querySelectorAll('.pd-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(tabName));
    });

    // Update Content
    document.querySelectorAll('.pd-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`tab-${tabName}`).classList.add('active');
}

function initContributionFilters(p) {
    const stats = p.careerStats || [];
    const seasonSelect = document.getElementById('filter-season');
    const compSelect = document.getElementById('filter-comp');

    // Extract unique Seasons and Comps
    const seasons = [...new Set(stats.map(s => s.season))];
    const comps = [...new Set(stats.map(s => s.comp))];

    // Populate Season Dropdown
    seasonSelect.innerHTML = `<option value="all">All Seasons</option>` +
        seasons.map(s => `<option value="${s}">${s}</option>`).join('');

    // Populate Comp Dropdown
    compSelect.innerHTML = `<option value="all">All Competitions</option>` +
        comps.map(c => `<option value="${c}">${c}</option>`).join('');
}

function filterStats() {
    if (!currentPlayer || !currentPlayer.careerStats) return;

    const seasonFilter = document.getElementById('filter-season').value;
    const compFilter = document.getElementById('filter-comp').value;

    let filtered = currentPlayer.careerStats;

    if (seasonFilter !== 'all') {
        filtered = filtered.filter(s => s.season === seasonFilter);
    }
    if (compFilter !== 'all') {
        filtered = filtered.filter(s => s.comp === compFilter);
    }

    renderStatsTable(filtered);
}

function renderStatsTable(stats) {
    const tbody = document.getElementById('pd-stats-body');
    if (stats.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:#666;">No stats found for selection.</td></tr>`;
        return;
    }

    tbody.innerHTML = stats.map(s => `
        <tr>
            <td>${s.season}</td>
            <td>${s.comp}</td>
            <td>${s.apps}</td>
            <td>${s.goals}</td>
            <td>${s.assists}</td>
        </tr>
    `).join('');
}

// Generate mocked detailed stats based on base stats + position
function generateDetailedStats(p) {
    // Base stats: pac, sho, pas, dri. Infer Def/Phy of unknown.
    // If not in p, default based on pos:
    let baseDef = p.def;
    let basePhy = p.phy;

    // Simple heuristic if missing (likely are)
    if (!baseDef) {
        if (['CB', 'LB', 'RB', 'LWB', 'RWB', 'CDM'].includes(p.pos)) baseDef = 85;
        else if (['GK'].includes(p.pos)) baseDef = 50;
        else baseDef = 45;
    }
    if (!basePhy) basePhy = 75;

    // Randomize slightly for variety
    const varStat = (base) => parseInt(base) + Math.floor(Math.random() * 10) - 2;

    return {
        // Main 6
        PAC: p.pac, SHO: p.sho, PAS: p.pas, DRI: p.dri, DEF: baseDef, PHY: basePhy,

        // Detailed (Mapped)
        Acceleration: varStat(p.pac),
        SprintSpeed: varStat(p.pac),
        Positioning: varStat(p.sho),
        Finishing: varStat(p.sho),
        ShotPower: varStat(p.sho),
        LongShots: varStat(p.sho),
        Volleys: varStat(p.sho - 10),
        Penalties: varStat(p.sho - 5),
        Vision: varStat(p.pas),
        Crossing: varStat(p.pas),
        FreeKick: varStat(p.pas),
        ShortPass: varStat(p.pas),
        LongPass: varStat(p.pas),
        Curve: varStat(p.pas - 5),
        Agility: varStat(p.dri),
        Balance: varStat(p.dri - 10),
        Reactions: varStat(p.dri),
        BallControl: varStat(p.dri),
        Dribbling: varStat(p.dri),
        Composure: varStat(p.dri),
        Interceptions: varStat(baseDef),
        Heading: varStat(baseDef),
        Marking: varStat(baseDef),
        StandTackle: varStat(baseDef),
        SlideTackle: varStat(baseDef - 5),
        Jumping: varStat(basePhy),
        Stamina: varStat(basePhy),
        Strength: varStat(basePhy),
        Aggression: varStat(basePhy)
    };
}

function renderMainStatsRow(s) {
    const container = document.querySelector('.pd-main-stats-row');
    const items = [
        { label: 'Speed', val: s.PAC },
        { label: 'Shot', val: s.SHO },
        { label: 'Pass', val: s.PAS },
        { label: 'Dribble', val: s.DRI },
        { label: 'Defense', val: s.DEF },
        { label: 'Physical', val: s.PHY }
    ];

    container.innerHTML = items.map(i => `
        <div class="pd-stat-item">
            <span class="pd-stat-label">${i.label}</span>
            <span class="pd-stat-val ${i.val >= 90 ? 'high' : ''}">${i.val}</span>
        </div>
    `).join('');
}

function renderAttributesGrid(s) {
    const table = document.getElementById('pd-attributes-table');
    // Filter out the main 6 from the details logic for the grid
    const ignored = ['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'];
    const keys = Object.keys(s).filter(k => !ignored.includes(k));

    table.innerHTML = keys.map(k => `
        <div class="pd-attr-row">
            <span class="pd-attr-name">${k.replace(/([A-Z])/g, ' $1').trim()}</span>
            <span class="pd-attr-val ${s[k] >= 90 ? 'high' : ''}">${s[k]}</span>
        </div>
    `).join('');
}

function renderTraits(p) {
    // Mock traits
    const mockTraits = ["Finesse Shot", "Speed Dribbler (AI)", "Technical Dribbler (AI)", "Playmaker (AI)", "Outside Foot Shot"];
    const list = document.getElementById('pd-traits-list');
    list.innerHTML = mockTraits.map(t => `<li>${t}</li>`).join('');
}

function renderRadarChart(s) {
    const ctx = document.getElementById('pd-radar-chart').getContext('2d');

    if (detailChart) detailChart.destroy();

    detailChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'],
            datasets: [{
                label: 'Stats',
                data: [s.PAC, s.SHO, s.PAS, s.DRI, s.DEF, s.PHY],
                backgroundColor: 'rgba(230, 27, 27, 0.2)', // Red tint
                borderColor: '#e61b1b',
                borderWidth: 2,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#e61b1b',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#e61b1b'
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { color: '#444' },
                    grid: { color: '#444' },
                    pointLabels: {
                        color: '#ddd',
                        font: { size: 12, weight: '700' }
                    },
                    ticks: { display: false, backdropColor: 'transparent' },
                    suggestedMin: 40,
                    suggestedMax: 110
                }
            },

            plugins: {
                legend: { display: false }
            },
            maintainAspectRatio: false
        }
    });
}
