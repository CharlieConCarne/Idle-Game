# Soul Reaper Idle Game

A browser-based idle/incremental game where players reap souls to strengthen the armies of Hell.

![Game Screenshot](img/screenshot.png)

## Description

Soul Reaper is an idle game where players collect souls (§) by clicking and purchasing upgrades to increase their passive income. Build your demonic army with various tiers of demons to maximize your soul collection rate. 

I have just completed the Learn Javascript course with scrimba and the freeCodeCamp responsive web design course and did my best to attempt an idle game with 
the knowledge ive gained, I used AI to make the images, ∆the background and to generate some of the readme contents but the code is 100% beginner code written all by me over the course of 3 days give or take. 

## Features

- Manual soul collection with upgradable clicking power
- Four tiers of demonic minions to automate soul collection
- Upgradable game speed for faster progression
- Persistent game state using localStorage
- Demonic theme with all AI generated graphics

## How to Play

1. Click the main button to collect souls manually
2. Purchase demons to automatically collect souls for you:
   - Lesser Demons: Basic soul collectors +1
   - Lesser Demon Packs: More efficient than individual demons +5
   - Lesser Demon Armies: Large-scale soul harvesting +100
   - Demon Lords: Elite soul collectors with massive output +1000
3. Upgrade your manual clicking power and game speed
4. Strategize to maximize your souls per second (§/s)

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- LocalStorage for game state persistence

## Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/soul-reaper-idle.git
   ```
2. Open `index.html` in your web browser
3. No additional dependencies required - just pure HTML, CSS, and JavaScript!


---

## Still to Fix

- Calculating and rendering new costs for upgrades on page load, currently when refreshing the page, upgrades display defaults back to baseCost value

- After purchasing x2 clicks upgrade, button needs to change to greyed out version idicating purchase is no longer availbale 

Feel free to contribute to this project by submitting issues or pull requests! 