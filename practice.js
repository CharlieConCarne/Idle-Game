// VARIABLES 
const moneyElement = document.getElementById("clickers");
const manualClick = document.getElementById("manual-clicker")
const manualClickX2 = document.getElementById("manual-x2");
const gameSpeedx2 = document.getElementById("game-speed")
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


// EVENT LISTENERS
manualClick.addEventListener("click", manualClicker)
manualClickX2.addEventListener("click", manualUpgrade)
gameSpeedx2.addEventListener("click", speedUpgrade)
clickerLvl1.addEventListener("click", level1Clicker)
clickerLvl2.addEventListener("click", level2Clicker)
clickerLvl3.addEventListener("click", level3Clicker)
clickerLvl4.addEventListener("click", level4Clicker)
clearSave.addEventListener("click", clearData)

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

function manualClicker() {
    if (manualClickerUpgrade === true) {
        currentMoney += 2
    } else {
        currentMoney++
    }
   
}

function manualUpgrade() {
    if ((currentMoney >= 1000) && (manualClickerUpgrade === false)) {
        currentMoney -= 1000
        manualClickerUpgrade = true
        demon2Img.innerHTML = `<img src="img/11.png">`

    }
}

function speedUpgrade() {
    if ((currentMoney >= 10000000) && (gameSpeedUpgrade === false)) {
        currentMoney -= 10000000
        gameSpeedUpgrade = true
        updateGameLoop()
    }
}

function level1Clicker() {
   let cost = Math.floor(lvl1BaseCost + (level1Upgrades ** 1.87))
   if (currentMoney >= cost) {
        currentMoney -= cost
        level1Upgrades++
        MPS++
        
        level1Demon.innerHTML = `Lesser Demons: ${level1Upgrades}`

        clickerLvl1.textContent = `§ ${cost}`

   } else {
    console.log("You do not have enough Money for this upgrade!")
   }

}

function level2Clicker() {
    let cost = Math.floor(lvl2BaseCost + (level2Upgrades ** 3.47))
    if (currentMoney >= cost) {
        currentMoney -= cost
        level2Upgrades++
        MPS += 5
       
        level2Demon.innerHTML = `Lesser Demon Packs: ${level2Upgrades}`

         clickerLvl2.textContent = `§ ${cost}`
    } else {
        console.log("You do not have enough Money for this upgrade!")
    }
 }

 function level3Clicker() {
    let cost = Math.floor(lvl3BaseCost + (level3Upgrades ** 5.47))
    if (currentMoney >= cost) {
        currentMoney -= cost
        level3Upgrades++
        MPS += 100
        level3Demon.innerHTML = `Lesser Demon Armies: ${level3Upgrades}`

    } else {
        console.log("You do not have enough Money for this upgrade!")
    }
    clickerLvl3.textContent = `§ ${cost}`
 }

 function level4Clicker() {
    let cost = Math.floor(lvl4BaseCost + (level4Upgrades ** 10.47))
    if (currentMoney >= cost) {
        currentMoney -= cost
        level4Upgrades++
        MPS += 1000
        level4Demon.innerHTML = `Demon Lords: ${level4Upgrades}`

    } else {
        console.log("You do not have enough Money for this upgrade!")
    }
    clickerLvl4.textContent = `§ ${cost}`
 }


function updateGameLoop() {

if (gameLoop) {
    clearInterval(gameLoop)
}
if (gameSpeedUpgrade === true) {


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
    console.clear()
    console.log("Current Money: ", currentMoney)
    console.log("Money Per Second: ", MPS)
    console.log("Level 1 upgrades : ", level1Upgrades)
    console.log("Level 2 upgrades : ", level2Upgrades)
    console.log("Level 3 upgrades: ", level3Upgrades)
    console.log("Level 4 upgrades: ", level4Upgrades)
    console.log("Manual Upgrade: ", manualClickerUpgrade)
    console.log("Game Speed: ", gameSpeedUpgrade)
    console.log("Game Speed is x2")
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
    console.clear()
    console.log("Current Money: ", currentMoney)
    console.log("Money Per Second: ", MPS)
    console.log("Level 1 upgrades : ", level1Upgrades)
    console.log("Level 2 upgrades : ", level2Upgrades)
    console.log("Level 3 upgrades: ", level3Upgrades)
    console.log("Level 4 upgrades: ", level4Upgrades)
    console.log("Manual Upgrade: ", manualClickerUpgrade)
    console.log("Game Speed: ", gameSpeedUpgrade)
    console.log("Game Speed is x1")
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
    } else {
        gameInfo.textContent = "Game Speed is 1x.."
        mpsDisplay.textContent = "§" + MPS + " Per Second"
    }
}, 10)



function clearData() {
    localStorage.clear()
    location.reload()
}