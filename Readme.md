# AstroMachine

AstroMachine is an interactive educational website featuring a Space Time Machine for exploring space history, a Planet Speed Lab for fun gravity-based speed simulations (See how fast Usain Bolt would run on the moon? :P), a Solar System Explorer, a very cool ISRO missions timeline and a retro Space Invaders-style game. The project is designed for learning, fun, and engagement with space science.

Live Demo: https://heramb-acharya.github.io/AstroMachine/

---

## Installation and Setup Instructions

1. **Clone or Download the Repository**
   - Clone the repo using:
     ```
     git clone https://github.com/Heramb-Acharya/AstroMachine
     ```
   - Or download and extract the ZIP file.

2. **Navigate to the Project Directory**
   ```
   cd AstroMachine
   ```

3. **No Build Required**
   - This project is fully client-side and does **not** require Node.js, npm, or any build tools.

4. **Run Locally**
   - Open any of the main HTML files (`index.html`, `speedlab.html`, `solar-system.html`, `game.html`, `isrotimeline.html`) directly in your web browser.
   - For best results, use a modern browser like Chrome, Firefox, or Edge.

5. **Optional: Local Server**
   - For some features (like loading local assets), you may want to use a simple local server:
     ```
     # Python 3.x
     python -m http.server
     ```
   - Then visit `http://localhost:8000` in your browser.

---

## Website Functionality and Unique Features

AstroMachine is not just another space website—it's a **fully interactive, visually immersive, and gamified learning platform**. Here’s what makes it truly stand out:

### 1. **Space Time Machine**
   - **Travel through time:** Instantly explore real historical space events from 1957 to today.
   - **Terminal-style interface:** Retro animated terminal UI for a unique, nostalgic experience.
   - **Smart event cards:** Each event is presented with icons, mission patches, and quick facts.
   - **Quick access:** Jump to today’s events or a random date with a single click.
   - No other site lets you “time travel” through space history with this much style and interactivity.

   
   ![Space Time Machine Screenshot1](screenshots/1.png)


   ![Space Time Machine Screenshot2](screenshots/2.png)

### 2. **Planet Speed Lab**
   - **Gravity playground:** Enter your running speed and instantly see how fast you’d go on any planet or moon.
   - **Interactive 3D gallery:** Click on planets to test, with animated feedback and fun facts.
   - **Real physics:** Calculations based on actual surface gravity for each body.
   

   ![Planet Speed Lab Screenshot1](screenshots/3.png)


   ![Planet Speed Lab Screenshot2](screenshots/4.png)

### 3. **Solar System Explorer**
   - **3D simulation:** Realistic, interactive solar system with accurate orbits and scaling.
   - **Planet info popups:** Click any planet for detailed facts, comparisons, and trivia.
   - **Customizable:** Adjust time speed, zoom, and toggle orbits for a tailored experience.
   - Combines education and exploration with smooth, modern 3D graphics.

   
   ![Solar System Explorer Screenshot1](screenshots/5.png)


   ![Solar System Explorer Screenshot2](screenshots/6.png)

### 4. **Space Invaders Game**
   - **Arcade action:** Defend Earth from waves of aliens in a retro-inspired shooter.
   - **Responsive controls:** Play with keyboard or touch—works great on desktop and mobile.
   - **Mission log terminal:** Real-time feedback, score tracking, and visual effects.
  

   
   ![Space Invaders Game Screenshot](screenshots/7.png)


### 5. **ISRO Timeline**
   - **India's Space Journey:** A dedicated timeline page highlighting ISRO’s most significant missions and milestones from 1975 to the present.
   - **Interactive filtering:** Instantly filter missions by category—Launch Vehicles, Lunar Missions, Planetary Missions, Earth Observation, and Communication—using the filter buttons at the top.
   - **Landmark highlights:** Major missions like Aryabhata, SLV-3, Chandrayaan, Mangalyaan, and Gaganyaan are visually emphasized.
   - **Animated timeline:** Each mission appears with smooth animations and glowing effects for an engaging experience.

  
   ![ISRO Timeline Screenshot1](screenshots/8.png)  


   ![ISRO Timeline Screenshot2](screenshots/9.png)   

### 6. **General Features**
   - **Retro neon UI:** Eye-catching, animated starfield and glowing interface.
   - **Fully responsive:** Looks and works great on any device.
   - **No login, no backend:** 100% privacy, instant access, and lightning-fast performance.
   - **Gamified learning:** Every section is designed to be interactive, rewarding, and memorable.

---

## Screenshots

Below are some screenshots to showcase the unique look and feel of AstroMachine.  


- Space Time Machine  
  ![Space Time Machine Screenshot](screenshots/10.png)

- Planet Speed Lab  
  ![Planet Speed Lab Screenshot](screenshots/4.png)

- Solar System Explorer  
  ![Solar System Explorer Screenshot](screenshots/11.png)

- Space Invaders Game  
  ![Space Invaders Game Screenshot](screenshots/7.png)

---

## Dependencies

AstroMachine is built with vanilla HTML, CSS, and JavaScript. The following external libraries and tools are used:

- **[Three.js](https://threejs.org/)** (CDN)  
  Used for 3D rendering in the Solar System Explorer.

- **Google Fonts: [Courier Prime](https://fonts.google.com/specimen/Courier+Prime)**  
  For retro terminal-style typography.

- **Modern Web Browser**  
  Required for ES6+ JavaScript and CSS features.

**No other dependencies or package managers are required.**

---

Enjoy exploring the cosmos with AstroMachine!
