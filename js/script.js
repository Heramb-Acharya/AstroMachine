// STARFIELD BACKGROUND 
function createStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// NAVIGATION HAMBURGER MENU 
function initializeHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

// TERMINAL AUDIO SIMULATION 
function playSound(type) {
    const terminal = document.getElementById('terminalContent');
    if (!terminal) return;
    const soundIndicator = document.createElement('div');
    soundIndicator.style.color = '#ffff00';
    soundIndicator.style.fontSize = '12px';
    switch(type) {
        case 'beep': soundIndicator.textContent = '[BEEP]'; break;
        case 'confirm': soundIndicator.textContent = '[CONFIRMATION TONE]'; break;
        case 'error': soundIndicator.textContent = '[ERROR ALERT]'; break;
        case 'planet': soundIndicator.textContent = '[PLANET SELECTED]'; break;
        case 'calculation': soundIndicator.textContent = '[CALCULATION COMPLETE]'; break;
        default: soundIndicator.textContent = '[SOUND]';
    }
    terminal.appendChild(soundIndicator);
    setTimeout(() => soundIndicator.remove(), 1000);
    terminal.scrollTop = terminal.scrollHeight;
}

// TERMINAL TYPING EFFECT 
function typeText(text, callback) {
    const terminal = document.getElementById('terminalContent');
    if (!terminal) return;
    const cursor = terminal.querySelector('.cursor');
    if (cursor) cursor.remove();
    const textDiv = document.createElement('div');
    terminal.appendChild(textDiv);
    let i = 0;
    const typeInterval = setInterval(() => {
        textDiv.textContent += text[i];
        i++;
        if (i >= text.length) {
            clearInterval(typeInterval);
            const newCursor = document.createElement('span');
            newCursor.className = 'cursor';
            terminal.appendChild(newCursor);
            terminal.scrollTop = terminal.scrollHeight;
            if (callback) callback();
        }
    }, 30);
}


const spaceEvents = {
    "01-01": [
        { date: "January 1, 2006", title: "New Horizons Launch", description: "NASA's New Horizons spacecraft launched on its mission to Pluto, beginning humanity's first close-up study of the dwarf planet." },
        { date: "January 1, 1801", title: "Ceres Discovery", description: "Giuseppe Piazzi discovered Ceres, the first asteroid ever found, marking the beginning of asteroid astronomy." }
    ],
    "01-03": [
        { date: "January 3, 2019", title: "Chang'e 4 Moon Landing", description: "China's Chang'e 4 spacecraft successfully landed on the far side of the Moon, a historic first for lunar exploration." }
    ],
    "01-04": [
        { date: "January 4, 2004", title: "Spirit Mars Landing", description: "NASA's Spirit rover successfully landed on Mars, beginning an extended mission to explore the Red Planet's surface." }
    ],
    "01-05": [
        { date: "January 5, 2005", title: "Deep Impact Launch", description: "NASA launched the Deep Impact mission to study the composition of comet Tempel 1 by impacting it with a copper projectile." }
    ],
    "02-01": [
        { date: "February 1, 2003", title: "Columbia Disaster", description: "Space Shuttle Columbia broke apart during re-entry, resulting in the loss of all seven crew members and leading to major changes in space safety protocols." }
    ],
    "02-15": [
        { date: "February 15, 2017", title: "PSLV-C37 Record", description: "ISRO launched 104 satellites in a single mission aboard PSLV-C37, setting a world record for the most satellites deployed at once." }
    ],
    "03-09": [
        { date: "March 9, 2009", title: "Kepler Launch", description: "NASA's Kepler Space Telescope launched to search for Earth-like exoplanets, revolutionizing our understanding of planetary systems." }
    ],
    "04-12": [
        { date: "April 12, 1961", title: "First Human in Space", description: "Soviet cosmonaut Yuri Gagarin became the first human to journey into outer space, orbiting Earth aboard Vostok 1." },
        { date: "April 12, 1981", title: "First Space Shuttle Launch", description: "Space Shuttle Columbia launched on STS-1, beginning the era of reusable spacecraft and routine access to space." }
    ],
    "05-05": [
        { date: "May 5, 1961", title: "First American in Space", description: "Alan Shepard became the first American astronaut in space aboard Freedom 7, marking America's entry into human spaceflight." },
        { date: "May 5, 2023", title: "GSLV-F12/Navigation Launch", description: "ISRO successfully launched GSLV-F12 carrying the NVS-01 navigation satellite, enhancing India's NavIC system." }
    ],
    "06-16": [
        { date: "June 16, 1963", title: "First Woman in Space", description: "Soviet cosmonaut Valentina Tereshkova became the first woman to fly in space aboard Vostok 6." }
    ],
    "06-25": [
        { date: "June 25, 1978", title: "Seasat Launch", description: "NASA launched Seasat, the first satellite designed to study Earth's oceans, pioneering oceanographic research from space." },
        { date: "June 25, 1997", title: "Progress Collision", description: "An unmanned Progress spacecraft collided with the Mir space station during a docking test, causing significant damage but no casualties." }
    ],
    "07-04": [
        { date: "July 4, 1997", title: "Mars Pathfinder Landing", description: "NASA's Mars Pathfinder successfully landed on Mars, deploying the first Mars rover 'Sojourner' and beginning a new era of Mars exploration." },
        { date: "July 4, 2005", title: "Deep Impact Collision", description: "NASA's Deep Impact mission successfully collided with comet Tempel 1, creating a spectacular impact visible from Earth and revealing comet composition." }
    ],
    "07-05": [
        { date: "July 5, 2016", title: "Juno Enters Jupiter Orbit", description: "NASA's Juno spacecraft successfully entered orbit around Jupiter, beginning a detailed study of the gas giant’s atmosphere and magnetic field." }
    ],
    "07-06": [
        { date: "July 6, 2014", title: "OCO-2 Enters Orbit", description: "NASA's Orbiting Carbon Observatory-2 was inserted into orbit to study atmospheric CO₂, helping track climate change." }
    ],
    "07-07": [
        { date: "July 7, 2022", title: "PSLV-C53 Launch", description: "ISRO launched PSLV-C53 carrying three Singaporean satellites, demonstrating commercial launch capabilities." }
    ],
    "07-08": [
        { date: "July 8, 2011", title: "Final Space Shuttle Launch", description: "NASA launched Atlantis on STS-135, marking the final flight of the Space Shuttle Program after 30 years." },
        { date: "July 8, 2015", title: "ISRO GSLV Mk-II GSAT-6A", description: "ISRO conducted a successful test of GSLV Mk-II by launching GSAT-6A, a communication satellite for strategic use." }
    ],
    "07-09": [
        { date: "July 9, 2014", title: "ISRO's SPOT-7 Launch", description: "PSLV-C23 launched SPOT-7 and four other satellites for international customers, highlighting ISRO’s commercial strength." }
    ],
    "07-10": [
        { date: "July 10, 1976", title: "Viking 1 Enters Mars Orbit", description: "NASA's Viking 1 orbiter entered orbit around Mars, preparing for the first successful US Mars landing later that month." }
    ],
    "07-14": [
        { date: "July 14, 2023", title: "Chandrayaan-3 Launch", description: "ISRO launched Chandrayaan-3 to attempt a soft landing on the Moon’s south pole, following up on the Chandrayaan-2 mission." }
    ],
    "07-20": [
        { date: "July 20, 1969", title: "Moon Landing", description: "Apollo 11 astronauts Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon, fulfilling President Kennedy's goal." }
    ],
    "07-22": [
        { date: "July 22, 2019", title: "Chandrayaan-2 Launch", description: "ISRO launched Chandrayaan-2, India's second lunar exploration mission, carrying an orbiter, lander, and rover." }
    ],
    "08-15": [
        { date: "August 15, 2022", title: "SSLV-D1 Maiden Flight", description: "ISRO conducted the first developmental flight of the SSLV (Small Satellite Launch Vehicle), marking a new era of small payload launches." }
    ],
    "08-23": [
        { date: "August 23, 2023", title: "Chandrayaan-3 Moon Landing", description: "India became the first country to successfully land a spacecraft near the Moon’s south pole with Chandrayaan-3's Vikram lander." }
    ],
    "08-25": [
        { date: "August 25, 1989", title: "Voyager 2 Neptune Flyby", description: "Voyager 2 flew by Neptune, completing the first Grand Tour of the outer solar system and providing our first close-up views of the ice giant." }
    ],
    "09-12": [
        { date: "September 12, 1962", title: "Kennedy Moon Speech", description: "President John F. Kennedy delivered his famous 'We choose to go to the Moon' speech at Rice University, galvanizing American space ambitions." }
    ],
    "09-24": [
        { date: "September 24, 2014", title: "Mangalyaan Enters Mars Orbit", description: "ISRO’s Mars Orbiter Mission (Mangalyaan) successfully entered Martian orbit, making India the first Asian nation to do so." }
    ],
    "10-04": [
        { date: "October 4, 1957", title: "Sputnik Launch", description: "The Soviet Union launched Sputnik 1, the first artificial satellite, beginning the Space Age and the Space Race." }
    ],
    "11-20": [
        { date: "November 20, 1998", title: "ISS First Module", description: "The Zarya module, the first component of the International Space Station, was launched, beginning construction of humanity's permanent outpost in space." }
    ],
    "12-21": [
        { date: "December 21, 1968", title: "Apollo 8 Launch", description: "Apollo 8 launched as the first crewed mission to leave Earth orbit and travel to the Moon, taking the famous 'Earthrise' photograph." }
    ],
    "12-25": [
        { date: "December 25, 2021", title: "James Webb Launch", description: "NASA launched the James Webb Space Telescope aboard Ariane 5, beginning a new era of space-based infrared astronomy." }
    ]
};

// GET EVENTS FOR DATE 
function getEventsForDate(date) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const key = `${month}-${day}`;
    return spaceEvents[key] || [];
}

// DISPLAY EVENTS
function displayEvents(events, date) {
    const eventsContainer = document.getElementById('eventsContainer');
    const eventDisplay = document.getElementById('eventDisplay');
    if (!eventsContainer || !eventDisplay) return;
    eventsContainer.innerHTML = '';
    if (events.length === 0) {
        const noEventsCard = document.createElement('div');
        noEventsCard.className = 'event-card';
        noEventsCard.innerHTML = `
            <div class="event-date">${date.toLocaleDateString()}</div>
            <div class="event-title">No Major Space Events Recorded</div>
            <div class="event-description">Our temporal database shows no significant space events for this date. The cosmos was quiet, but the universe continued its eternal dance among the stars.</div>
        `;
        eventsContainer.appendChild(noEventsCard);
    } else {
        events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';
            eventCard.innerHTML = `
                <div class="event-date">${event.date}</div>
                <div class="event-title">${event.title}</div>
                <div class="event-description">${event.description}</div>
            `;
            eventsContainer.appendChild(eventCard);
        });
    }
    eventDisplay.style.display = 'block';
    eventDisplay.scrollIntoView({ behavior: 'smooth' });
}

// RANDOM DATE GENERATOR 
function getRandomDate() {
    const start = new Date(1957, 9, 4); 
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// DATE VALIDATION 
function validateDateRange(date) {
    const minDate = new Date(1957, 9, 4); 
    return date >= minDate;
}

// TIME JUMP FUNCTION
function initiateTimeJump() {
    const dateInput = document.getElementById('dateInput');
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const eventDisplay = document.getElementById('eventDisplay');
    if (!dateInput.value) {
        playSound('error');
        typeText('ERROR: TEMPORAL COORDINATES NOT SET. PLEASE SELECT A DATE.');
        if (error) {
            error.style.display = 'block';
            setTimeout(() => error.style.display = 'none', 3000);
        }
        return;
    }
    const selectedDate = new Date(dateInput.value);
    if (!validateDateRange(selectedDate)) {
        playSound('error');
        typeText('ERROR: DATE OUT OF RANGE. PLEASE SELECT DATE BETWEEN 1957-2025.');
        if (error) {
            error.style.display = 'block';
            setTimeout(() => error.style.display = 'none', 3000);
        }
        return;
    }
    playSound('beep');
    typeText('INITIATING TEMPORAL JUMP SEQUENCE...');
    if (loading) loading.style.display = 'block';
    if (eventDisplay) eventDisplay.style.display = 'none';
    if (error) error.style.display = 'none';
    setTimeout(() => {
        typeText(`TEMPORAL COORDINATES LOCKED: ${selectedDate.toLocaleDateString()}`);
        setTimeout(() => {
            typeText('SCANNING HISTORICAL DATABASE...');
            setTimeout(() => {
                const events = getEventsForDate(selectedDate);
                if (loading) loading.style.display = 'none';
                playSound('confirm');
                if (events.length > 0) {
                    typeText(`TIME JUMP SUCCESSFUL! ${events.length} EVENT(S) DETECTED.`);
                } else {
                    typeText('TIME JUMP COMPLETE. NO MAJOR EVENTS DETECTED FOR THIS DATE.');
                }
                setTimeout(() => {
                    displayEvents(events, selectedDate);
                }, 1000);
            }, 1500);
        }, 1000);
    }, 1000);
}

//TODAY'S EVENTS
function showTodaysEvents() {
    const today = new Date();
    document.getElementById('dateInput').value = getLocalDateString(today);
    document.getElementById('todaysDate').textContent = today.toLocaleDateString();
    initiateTimeJump();
}

//RANDOM DATE FUNCTION
function showRandomDate() {
    const randomDate = getRandomDate();
    document.getElementById('dateInput').value = getLocalDateString(randomDate);
    playSound('beep');
    typeText(`RANDOM DATE SELECTED: ${randomDate.toLocaleDateString()}`);
    setTimeout(() => {
        initiateTimeJump();
    }, 1000);
}

// GET LOCAL DATE STRING (YYYY-MM-DD)
function getLocalDateString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// --- GAME LOGGING ---
function addLog(message, type = 'normal') {
    const log = document.getElementById('terminalLog');
    if (!log) return;
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    entry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    log.appendChild(entry);
    log.scrollTop = log.scrollHeight;
    
    if (log.children.length > 16) {
        log.removeChild(log.children[1]);
    }
}

// --- GAME VARIABLES ---
const canvas = document.getElementById('gameCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;
const overlay = document.getElementById('gameOverlay');
const overlayText = document.getElementById('overlayText');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');

let gameState = 'menu'; 
let score = 0, lives = 5, level = 1, wave = 1;
let player = {
    x: 375, y: 550, width: 50, height: 30, speed: 5, lastShot: 0, shotCooldown: 200
};
let bullets = [], enemies = [], enemyBullets = [], particles = [];

// --- RESPONSIVE CANVAS SIZING ---
function resizeCanvas() {
    const container = document.querySelector('.game-area');
    if (!container || !canvas) return;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    canvas.width = Math.min(800, containerWidth - 4);
    canvas.height = Math.min(600, containerHeight - 4);
    player.x = Math.min(player.x, canvas.width - player.width);
    player.y = Math.min(player.y, canvas.height - player.height);
}

// --- INPUT HANDLING ---
const keys = {};
document.addEventListener('keydown', (e) => {
    keys[e.key.toLowerCase()] = true;
    if ((e.key === ' ' || e.key === 'ArrowUp') && gameState === 'playing') {
        e.preventDefault();
        shoot();
    }
    if (e.key.toLowerCase() === 'p') {
        if (gameState === 'playing') {
            gameState = 'paused';
            showOverlay('MISSION PAUSED', 'Press P to resume');
            addLog('MISSION PAUSED', 'warning');
        } else if (gameState === 'paused') {
            gameState = 'playing';
            hideOverlay();
            addLog('MISSION RESUMED', 'success');
        }
    }
});
document.addEventListener('keyup', (e) => {
    keys[e.key.toLowerCase()] = false;
});

// --- GAME FUNCTIONS ---
function shoot() {
    const now = Date.now();
    if (now - player.lastShot > player.shotCooldown) {
        bullets.push({
            x: player.x + player.width / 2 - 2,
            y: player.y,
            width: 4,
            height: 10,
            speed: 8,
            color: '#00ff00'
        });
        player.lastShot = now;
    }
}

function createEnemies() {
    enemies = [];
    if (!canvas) return;
    const isMobile = canvas.width < 600;
    const rows = isMobile ? 3 : 5;
    const cols = Math.floor(canvas.width / 60);
    const enemyWidth = 40, enemyHeight = 30, spacing = 10;
    const totalWidth = cols * (enemyWidth + spacing) - spacing;
    const startX = (canvas.width - totalWidth) / 2, startY = 50;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            enemies.push({
                x: startX + col * (enemyWidth + spacing),
                y: startY + row * (enemyHeight + spacing),
                width: enemyWidth,
                height: enemyHeight,
                speed: 0.5 + (level - 1) * 0.2,
                direction: 1,
                color: row === 0 ? '#ff6600' : row === 1 ? '#ffff00' : '#00ffff',
                points: row === 0 ? 30 : row === 1 ? 20 : 10,
                lastShot: 0,
                shotCooldown: 2000 + Math.random() * 3000
            });
        }
    }
}

function updatePlayer() {
    if (keys['a'] || keys['arrowleft']) player.x = Math.max(0, player.x - player.speed);
    if (keys['d'] || keys['arrowright']) player.x = Math.min(canvas.width - player.width, player.x + player.speed);
}

function updateBullets() {
    bullets = bullets.filter(bullet => {
        bullet.y -= bullet.speed;
        return bullet.y > -bullet.height;
    });
    enemyBullets = enemyBullets.filter(bullet => {
        bullet.y += bullet.speed;
        return bullet.y < canvas.height;
    });
}

function updateEnemies() {
    if (enemies.length === 0 || !canvas) return;
    let shouldReverse = false, leftMost = canvas.width, rightMost = 0;
    enemies.forEach(enemy => {
        if (enemy.x < leftMost) leftMost = enemy.x;
        if (enemy.x + enemy.width > rightMost) rightMost = enemy.x + enemy.width;
    });
    if (rightMost >= canvas.width - 10 || leftMost <= 10) shouldReverse = true;
    enemies.forEach(enemy => {
        if (shouldReverse) {
            enemy.y += 20;
            enemy.direction *= -1;
        }
        enemy.x += (enemy.speed * 1.4) * enemy.direction;
        const now = Date.now();
        if (now - enemy.lastShot > enemy.shotCooldown && Math.random() < 0.001) {
            enemyBullets.push({
                x: enemy.x + enemy.width / 2 - 2,
                y: enemy.y + enemy.height,
                width: 4,
                height: 10,
                speed: 1.5,
                color: '#ff0000'
            });
            enemy.lastShot = now;
        }
    });
}

function checkCollisions() {
    // Player bullets vs enemies
    bullets.forEach((bullet, bulletIndex) => {
        enemies.forEach((enemy, enemyIndex) => {
            if (bullet.x < enemy.x + enemy.width &&
                bullet.x + bullet.width > enemy.x &&
                bullet.y < enemy.y + enemy.height &&
                bullet.y + bullet.height > enemy.y) {
                bullets.splice(bulletIndex, 1);
                const points = enemy.points;
                enemies.splice(enemyIndex, 1);
                score += points;
                document.getElementById('score').textContent = score;
                createExplosion(enemy.x + enemy.width / 2, enemy.y + enemy.height / 2);
                addLog(`ENEMY DESTROYED +${points}`, 'success');
            }
        });
    });
    // Enemy bullets vs player
    enemyBullets.forEach((bullet, bulletIndex) => {
        if (bullet.x < player.x + player.width &&
            bullet.x + bullet.width > player.x &&
            bullet.y < player.y + player.height &&
            bullet.y + bullet.height > player.y) {
            enemyBullets.splice(bulletIndex, 1);
            lives--;
            document.getElementById('lives').textContent = lives;
            createExplosion(player.x + player.width / 2, player.y + player.height / 2);
            addLog('HULL DAMAGE DETECTED!', 'error');
            if (lives <= 0) gameOver();
        }
    });
    // Enemies reach player
    enemies.forEach(enemy => {
        if (enemy.y + enemy.height >= player.y) gameOver();
    });
}

function createExplosion(x, y) {
    for (let i = 0; i < 8; i++) {
        particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 8,
            vy: (Math.random() - 0.5) * 8,
            life: 30,
            color: ['#ffff00', '#ff6600', '#00ff00'][Math.floor(Math.random() * 3)]
        });
    }
}

function updateParticles() {
    particles = particles.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        return particle.life > 0;
    });
}

function drawPlayer() {
    if (!ctx) return;
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.fillStyle = '#00ffff';
    ctx.fillRect(player.x + 20, player.y - 5, 10, 5);
    ctx.fillRect(player.x + 10, player.y + 25, 10, 5);
    ctx.fillRect(player.x + 30, player.y + 25, 10, 5);
}

function drawBullets() {
    if (!ctx) return;
    bullets.forEach(bullet => {
        ctx.fillStyle = bullet.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = bullet.color;
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
        ctx.shadowBlur = 0;
    });
    enemyBullets.forEach(bullet => {
        ctx.fillStyle = bullet.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = bullet.color;
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
        ctx.shadowBlur = 0;
    });
}

function drawEnemies() {
    if (!ctx) return;
    enemies.forEach(enemy => {
        ctx.fillStyle = enemy.color;
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(enemy.x + 5, enemy.y + 5, 5, 5);
        ctx.fillRect(enemy.x + 30, enemy.y + 5, 5, 5);
        ctx.fillRect(enemy.x + 15, enemy.y + 20, 10, 5);
    });
}

function drawParticles() {
    if (!ctx) return;
    particles.forEach(particle => {
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.life / 30;
        ctx.fillRect(particle.x, particle.y, 3, 3);
        ctx.globalAlpha = 1;
    });
}

function drawGame() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (gameState === 'playing') {
        drawPlayer();
        drawBullets();
        drawEnemies();
        drawParticles();
    }
}

function gameLoop() {
    if (gameState === 'playing') {
        updatePlayer();
        updateBullets();
        updateEnemies();
        updateParticles();
        checkCollisions();
        if (enemies.length === 0) nextWave();
    }
    drawGame();
    requestAnimationFrame(gameLoop);
}

function nextWave() {
    wave++;
    if (wave > 3) {
        level++;
        wave = 1;
        document.getElementById('level').textContent = level;
        addLog(`LEVEL ${level} REACHED`, 'success');
    }
    document.getElementById('wave').textContent = wave;
    addLog(`WAVE ${wave} INCOMING`, 'warning');
    createEnemies();
    score += 100 * level;
    document.getElementById('score').textContent = score;
}

function gameOver() {
    gameState = 'gameOver';
    showOverlay('MISSION FAILED', `Final Score: ${score}`);
    addLog('MISSION FAILED - EARTH OVERRUN', 'error');
    if (startBtn) startBtn.style.display = 'none';
    if (restartBtn) restartBtn.style.display = 'inline-block';
}

function showOverlay(title, subtitle = '') {
    if (!overlayText || !overlay) return;
    overlayText.innerHTML = title;
    if (subtitle) {
        overlayText.innerHTML += `<br><span style="font-size: 0.6em; color: #ffff00;">${subtitle}</span>`;
    }
    overlay.style.display = 'flex';
}

function hideOverlay() {
    if (overlay) overlay.style.display = 'none';
}

function startGame() {
    gameState = 'playing';
    score = 0; lives = 3; level = 1; wave = 1;
    bullets = []; enemyBullets = []; particles = [];
    document.getElementById('score').textContent = score;
    document.getElementById('lives').textContent = lives;
    document.getElementById('level').textContent = level;
    document.getElementById('wave').textContent = wave;
    player.x = canvas.width / 2 - player.width / 2;
    player.y = canvas.height - player.height - 20;
    createEnemies();
    hideOverlay();
    addLog('MISSION STARTED - DEFEND EARTH!', 'success');
}

function restartGame() {
    if (startBtn) startBtn.style.display = 'inline-block';
    if (restartBtn) restartBtn.style.display = 'none';
    startGame();
}

// --- PLANET SPEED LAB ---
const planets = [
    { name: "Mercury", gravity: 0.378, emoji: "☿️", fact: "You'd run so fast you might escape orbit!", cssClass: "mercury" },
    { name: "Venus", gravity: 0.907, emoji: "♀️", fact: "Almost like Earth, but you'd melt instantly!", cssClass: "venus" },
    { name: "Earth", gravity: 1.0, emoji: "🌍", fact: "Your home planet baseline speed!", cssClass: "earth" },
    { name: "Mars", gravity: 0.377, emoji: "🔴", fact: "Perfect for superhuman running!", cssClass: "mars" },
    { name: "Jupiter", gravity: 2.36, emoji: "🪐", fact: "You'd feel like running in molasses!", cssClass: "jupiter" },
    { name: "Saturn", gravity: 0.916, emoji: "🪐", fact: "Almost Earth-like, but with amazing rings!", cssClass: "saturn" },
    { name: "Uranus", gravity: 0.889, emoji: "🌀", fact: "Running sideways on this tilted world!", cssClass: "uranus" },
    { name: "Neptune", gravity: 1.13, emoji: "🔵", fact: "Slightly harder than Earth, with diamond rain!", cssClass: "neptune" },
    { name: "Moon", gravity: 0.166, emoji: "🌙", fact: "You'd practically fly with each step!", cssClass: "moon" },
    { name: "Pluto", gravity: 0.071, emoji: "🪐", fact: "You'd launch yourself into space!", cssClass: "pluto" }
];
let currentUnit = 'mph';
let currentSpeed = 0;

function convertToMph(speed, unit) {
    switch(unit) {
        case 'mph': return speed;
        case 'kph': return speed * 0.621371;
        case 'ms': return speed * 2.23694;
        default: return speed;
    }
}
function convertFromMph(speed, unit) {
    switch(unit) {
        case 'mph': return speed;
        case 'kph': return speed / 0.621371;
        case 'ms': return speed / 2.23694;
        default: return speed;
    }
}
function setSpeed(speed) {
    document.getElementById('speedInput').value = speed;
    currentSpeed = speed;
    playSound('beep');
    typeText(`SPEED SET TO ${speed} ${currentUnit.toUpperCase()}`);
}
function selectUnit(unit) {
    currentUnit = unit;
    document.querySelectorAll('.unit-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    playSound('beep');
    typeText(`UNIT CHANGED TO ${unit.toUpperCase()}`);
}
function calculateSpeedOnPlanet(earthSpeed, planetGravity) {
    return earthSpeed / Math.sqrt(planetGravity);
}
function formatSpeed(speed, unit) {
    return `${speed.toFixed(2)} ${unit.toUpperCase()}`;
}
function createPlanetGallery() {
    const planetsGrid = document.getElementById('planetsGrid');
    if (!planetsGrid) return;
    planets.forEach((planet, index) => {
        const planetContainer = document.createElement('div');
        planetContainer.className = 'planet-container';
        planetContainer.setAttribute('data-planet', planet.name.toLowerCase());
        planetContainer.innerHTML = `
            <div class="planet ${planet.cssClass}"></div>
            <div class="planet-info">
                <div class="planet-name">${planet.emoji} ${planet.name}</div>
                <div class="planet-gravity">Gravity: ${planet.gravity}g</div>
                <div class="planet-fact">${planet.fact}</div>
            </div>
            <div class="speed-result" id="result-${index}"></div>
        `;
        planetContainer.addEventListener('click', () => {
            calculateAndDisplaySpeed(planet, index);
        });
        planetsGrid.appendChild(planetContainer);
    });
}
function calculateAndDisplaySpeed(planet, index) {
    const speedInput = document.getElementById('speedInput');
    const inputSpeed = parseFloat(speedInput.value);
    if (!inputSpeed || inputSpeed <= 0) {
        showError('Please enter a valid speed first!');
        return;
    }
    document.querySelectorAll('.planet-container').forEach(container => container.classList.remove('active'));
    document.querySelectorAll('.speed-result').forEach(result => result.classList.remove('show'));
    const planetContainer = document.querySelector(`[data-planet="${planet.name.toLowerCase()}"]`);
    planetContainer.classList.add('active');
    const speedInMph = convertToMph(inputSpeed, currentUnit);
    const planetSpeed = calculateSpeedOnPlanet(speedInMph, planet.gravity);
    const displaySpeed = convertFromMph(planetSpeed, currentUnit);
    const resultElement = document.getElementById(`result-${index}`);
    resultElement.textContent = formatSpeed(displaySpeed, currentUnit);
    resultElement.classList.add('show');
    playSound('planet');
    typeText(`PLANET ${planet.name.toUpperCase()} SELECTED`);
    typeText(`YOUR SPEED: ${formatSpeed(displaySpeed, currentUnit)}`);
    const speedRatio = planetSpeed / speedInMph;
    let commentary = '';
    if (speedRatio > 2) commentary = 'SUPERHUMAN SPEED ACHIEVED!';
    else if (speedRatio > 1.5) commentary = 'INCREDIBLE BOOST!';
    else if (speedRatio > 1.1) commentary = 'NICE SPEED INCREASE!';
    else if (speedRatio > 0.9) commentary = 'SIMILAR TO EARTH SPEED';
    else if (speedRatio > 0.5) commentary = 'GRAVITY IS SLOWING YOU DOWN';
    else commentary = 'HEAVY GRAVITY ZONE!';
    typeText(commentary);
}
function showError(message) {
    const errorDiv = document.getElementById('error');
    if (!errorDiv) return;
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    playSound('error');
    typeText(`ERROR: ${message}`);
    setTimeout(() => { errorDiv.style.display = 'none'; }, 3000);
}
function randomSpeedTest() {
    const randomSpeed = Math.random() * 50 + 5;
    const randomUnit = ['mph', 'kph', 'ms'][Math.floor(Math.random() * 3)];
    currentUnit = randomUnit;
    document.querySelectorAll('.unit-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === randomUnit) btn.classList.add('active');
    });
    document.getElementById('speedInput').value = randomSpeed.toFixed(1);
    currentSpeed = randomSpeed;
    const randomPlanet = planets[Math.floor(Math.random() * planets.length)];
    const planetIndex = planets.indexOf(randomPlanet);
    playSound('beep');
    typeText(`RANDOM TEST INITIATED`);
    typeText(`SPEED: ${randomSpeed.toFixed(1)} ${randomUnit.toUpperCase()}`);
    typeText(`PLANET: ${randomPlanet.name.toUpperCase()}`);
    setTimeout(() => {
        calculateAndDisplaySpeed(randomPlanet, planetIndex);
    }, 1000);
}
function initializeSpeedLab() {
    createStars();
    createPlanetGallery();
    document.getElementById('randomBtn').addEventListener('click', randomSpeedTest);
    document.getElementById('speedInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const speed = parseFloat(this.value);
            if (speed && speed > 0) {
                currentSpeed = speed;
                playSound('confirm');
                typeText(`SPEED CONFIRMED: ${formatSpeed(speed, currentUnit)}`);
                typeText('CLICK ANY PLANET TO TEST YOUR SPEED!');
            } else {
                showError('Please enter a valid speed value');
            }
        }
    });
    setTimeout(() => { typeText('3D PLANET RENDERER LOADED'); }, 1000);
    setTimeout(() => { typeText('READY FOR SPEED CALCULATIONS'); }, 2000);
    setTimeout(() => { typeText('SELECT A PLANET TO BEGIN!'); }, 3000);
}

// --- TIMELINE FILTER FUNCTIONALITY ---
function initializeFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filterValue = this.dataset.filter;
            timelineItems.forEach(item => {
                if (filterValue === 'all' || item.dataset.category === filterValue) {
                    item.style.display = 'block';
                    item.style.animation = 'none';
                    item.offsetHeight;
                    item.style.animation = 'fadeInUp 0.8s ease-out forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// --- TIMELINE SCROLL ANIMATIONS ---
function initializeTimelineAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
}

// --- PAGE INITIALIZATION ---
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    initializeHamburgerMenu();

    // --- AstroMachine (index) ---
    if (document.getElementById('dateInput')) {
        // Set today's date as default
        const today = new Date();
        document.getElementById('dateInput').value = getLocalDateString(today);
        document.getElementById('todaysDate').textContent = today.toLocaleDateString();
        document.getElementById('timeJumpBtn').addEventListener('click', initiateTimeJump);
        document.getElementById('todayBtn').addEventListener('click', showTodaysEvents);
        document.getElementById('randomBtn').addEventListener('click', showRandomDate);
        document.getElementById('dateInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') initiateTimeJump();
        });
        setTimeout(() => {
            typeText('AUTO-SCAN COMPLETE. DISPLAYING TODAY\'S EVENTS...');
            setTimeout(showTodaysEvents, 1000);
        }, 2000);
    }

    // --- ISRO Timeline ---
    if (document.querySelector('.filter-btn') && document.querySelector('.timeline-item')) {
        initializeFilters();
        initializeTimelineAnimations();
    }

    // --- Game ---
    if (canvas && ctx) {
        createStars();
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        if (startBtn) startBtn.addEventListener('click', startGame);
        if (restartBtn) restartBtn.addEventListener('click', restartGame);
        gameLoop();
        setTimeout(() => { addLog('SCANNING FOR ALIEN SIGNATURES...', 'warning'); }, 1000);
        setTimeout(() => { addLog('MULTIPLE BOGEYS DETECTED', 'error'); }, 2000);
        setTimeout(() => { addLog('ALL PILOTS TO BATTLE STATIONS', 'warning'); }, 3000);
    }
});

// --- SpeedLab Initialization (on window load for full DOM) ---
window.addEventListener('load', function() {
    if (document.getElementById('planetsGrid')) {
        initializeSpeedLab();
    }
});

// --- MOBILE TOUCH CONTROLS ---
function setupMobileControls() {
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');
    const fireBtn = document.getElementById('fireBtn');
    if (!leftBtn || !rightBtn || !fireBtn) return;

    // Simulate keydown/keyup for left/right
    leftBtn.addEventListener('touchstart', e => { e.preventDefault(); keys['a'] = true; });
    leftBtn.addEventListener('touchend', e => { e.preventDefault(); keys['a'] = false; });

    rightBtn.addEventListener('touchstart', e => { e.preventDefault(); keys['d'] = true; });
    rightBtn.addEventListener('touchend', e => { e.preventDefault(); keys['d'] = false; });

    // Fire button: tap to shoot
    fireBtn.addEventListener('touchstart', e => { e.preventDefault(); shoot(); });
}

window.addEventListener('load', setupMobileControls);