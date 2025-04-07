// VARIABLES 
const moneyElement = document.getElementById("clickers");
const manualClick = document.getElementById("manual-clicker")
const manualClickX2 = document.getElementById("manual-x2");
const gameSpeedx2 = document.getElementById("game-speed-x2")
const clickerLvl1 = document.getElementById("lvl1-clicker");
const clickerLvl2 = document.getElementById("lvl2-clicker");
const clickerLvl3 = document.getElementById("lvl3-clicker");
const clickerLvl4 = document.getElementById("lvl4-clicker");
const mpsDisplay = document.getElementById("MPS-Number");
const gameInfo = document.getElementById("game-info"); 
const clearSave = document.getElementById("clear-save-data");
const demon2Img = document.getElementById("demon2-img");
const level1Demon = document.getElementById("level1-demon");
const level2Demon = document.getElementById("level2-demon");
const level3Demon = document.getElementById("level3-demon");
const level4Demon = document.getElementById("level4-demon");

// BASECOSTS
const lvl1BaseCost = 50;
const lvl2BaseCost = 500;
const lvl3BaseCost = 10000;
const lvl4BaseCost = 1000000;

// UPGRADES
let level1Upgrades = 0;
let level2Upgrades = 0;
let level3Upgrades = 0;
let level4Upgrades = 0;
let manualClickerUpgrade = false;
let gameSpeedUpgrade = false;
let MPS = 0;
let currentMoney = 0;
let gameLoop = null;

const level1Cost = () => { return Math.floor(lvl1BaseCost + (level1Upgrades ** 1.87)) }
const level2Cost = () => { return Math.floor(lvl2BaseCost + (level2Upgrades ** 3.47)) }
const level3Cost = () => { return Math.floor(lvl3BaseCost + (level3Upgrades ** 5.47)) }
const level4Cost = () => { return Math.floor(lvl4BaseCost + (level4Upgrades ** 10.47))}


function savedInfo() {
    const savedMoney = localStorage.getItem("Money"); 
    const savedMPS = localStorage.getItem("MPS"); 
    const savedLvl1 = localStorage.getItem("lvl1"); 
    const savedLvl2 = localStorage.getItem("lvl2"); 
    const savedLvl3 = localStorage.getItem("lvl3"); 
    const savedLvl4 = localStorage.getItem("lvl4"); 
    const manUp = localStorage.getItem("manUp");
    const speedUp = localStorage.getItem("speedUp");

    
    if (savedMoney) {
        currentMoney = parseFloat(savedMoney);
        moneyElement.textContent = "§ " + currentMoney;


    }

    if (manUp === "true") {
        manualClickerUpgrade = true
        demon2Img.innerHTML = `<img src="img/11.png">`
    }

    if (speedUp === "true") {
        gameSpeedUpgrade = true
    }

    if (savedMPS) {
        MPS = parseFloat(savedMPS)
                mpsDisplay.textContent = "§ " + MPS + " Per Second"
    }

    if (savedLvl1) {
        level1Upgrades = parseInt(savedLvl1)
        level1Demon.innerHTML = `Lesser Demons: ${level1Upgrades}`


    }

    if (savedLvl2) {
        level2Upgrades = parseInt(savedLvl2)
        level2Demon.innerHTML = `Lesser Demon Packs: ${level2Upgrades}`



    }

    if (savedLvl3) {
        level3Upgrades = parseInt(savedLvl3)
        level3Demon.innerHTML = `Lesser Demon Armies: ${level3Upgrades}`



    }

    if (savedLvl4)  {
        level4Upgrades = parseInt(savedLvl4)
        level4Demon.innerHTML = `Demon Lords: ${level4Upgrades}`
    
    }
}

window.onload = savedInfo;

const manualClicker = () => {if (manualClickerUpgrade) {
    currentMoney += 2
} else {
    currentMoney++
}}


manualClick.addEventListener("click", manualClicker)

const manualUpgrade = () => {if ((currentMoney >= 1000) && (!manualClickerUpgrade)) {
    currentMoney -= 1000
    manualClickerUpgrade = true
    demon2Img.innerHTML = `<img src="img/11.png">`
}}

manualClickX2.addEventListener("click", manualUpgrade)

const speedUpgrade = () => {if ((currentMoney >= 100) && (!gameSpeedUpgrade)) { 
    currentMoney -= 100
    gameSpeedUpgrade = true;
    updateGameLoop()
}}

gameSpeedx2.addEventListener("click", speedUpgrade)


const level1Clicker = () => {if (currentMoney >= level1Cost()) {
    currentMoney -= level1Cost()
    level1Upgrades++
    MPS++
    level1Demon.innerHTML = `Lesser Demons: ${level1Upgrades}`
    
} 
}

clickerLvl1.addEventListener("click", level1Clicker)

const level2Clicker = () => {if (currentMoney >= level2Cost()) {
    currentMoney -= level2Cost()
    level2Upgrades++
    MPS += 5
    level2Demon.innerHTML = `Lesser Demon Packs: ${level2Upgrades}`
}}

clickerLvl2.addEventListener("click", level2Clicker)

const level3Clicker = () => { if (currentMoney >= level3Cost()) {
    currentMoney -= level3Cost()
    level3Upgrades++
    MPS += 100
    level3Demon.innerHTML = `Lesser Demon Armies: ${level3Upgrades}`
}
}

clickerLvl3.addEventListener("click", level3Clicker)

const level4Clicker = () => { if (currentMoney >= level4Cost()) 
    currentMoney -= level4Cost()
    level4Upgrades++
    MPS += 1000
    level4Demon.innerHTML = `Demon Lords: ${level4Upgrades}`

}

clickerLvl4.addEventListener("click", level4Clicker)

function updateGameLoop() {

if (gameLoop) {
    clearInterval(gameLoop)
}
if (gameSpeedUpgrade) {


gameLoop = setInterval(function() {
    currentMoney += MPS
    localStorage.setItem("Money", currentMoney)
    localStorage.setItem("lvl1", level1Upgrades)
    localStorage.setItem("lvl2", level2Upgrades)
    localStorage.setItem("lvl3", level3Upgrades)
    localStorage.setItem("lvl4", level4Upgrades)
    localStorage.setItem("MPS", MPS)
    localStorage.setItem("manUp", manualClickerUpgrade)
    localStorage.setItem("speedUp", gameSpeedUpgrade)
}, 500)
} else {

gameLoop = setInterval(function() {
    currentMoney += MPS
    localStorage.setItem("Money", currentMoney)
    localStorage.setItem("lvl1", level1Upgrades)
    localStorage.setItem("lvl2", level2Upgrades)
    localStorage.setItem("lvl3", level3Upgrades)
    localStorage.setItem("lvl4", level4Upgrades)
    localStorage.setItem("MPS", MPS)
    localStorage.setItem("manUp", manualClickerUpgrade)
    localStorage.setItem("speedUp", gameSpeedUpgrade)
}, 1000)
}
}

updateGameLoop()

setInterval(function updateMoneyCount() {
    moneyElement.innerHTML  =`
    § ${currentMoney}`

    if (gameSpeedUpgrade === true) {
        gameInfo.textContent = "Game Speed is 2x.."
        mpsDisplay.textContent = "§" + (MPS * 2) + " Per Second" 
        clickerLvl1.textContent = `§ ${level1Cost()}`
        clickerLvl2.textContent = `§ ${level2Cost()}`
        clickerLvl3.textContent = `§ ${level3Cost()}`
        clickerLvl4.textContent = `§ ${level4Cost()}`
    } else {
        gameInfo.textContent = "Game Speed is 1x.."
        mpsDisplay.textContent = "§ " + MPS + " Per Second"
        clickerLvl1.textContent = `§ ${level1Cost()}`
        clickerLvl2.textContent = `§ ${level2Cost()}`
        clickerLvl3.textContent = `§ ${level3Cost()}`
        clickerLvl4.textContent = `§ ${level4Cost()}`

    }
}, 10)

const clearData = () => {
    localStorage.clear()
    location.reload()
}

clearSave.addEventListener("click", clearData)

