const player = document.querySelector('.player');
const playarea = document.querySelector('#main-play-area');
const enemies = ['./img/enemy1.png', './img/enemy2.png', './img/enemy3.png'];
const instructionsText = document.querySelector('.game-instructions');
const startButton = document.querySelector('.start-button');
let enemyInterval;

// Função de ação do jogador
function flyShip(event) {
    if (event.key === 'ArrowUp') {
        event.preventDefault();
        moveUp();
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        moveDown();
    } else if (event.key === ' ') {
        event.preventDefault();
        fireLaser();
    }
}

// Função de movimento para cima
function moveUp() {
    let topPosition = getComputedStyle(player).getPropertyValue('top');
    if (topPosition === '0px') {
        return;
    } else {
        let position = parseInt(topPosition);
        position -= 50;
        player.style.top = `${position}px`;
    }
}

// Função de movimento para baixo
function moveDown() {
    let topPosition = getComputedStyle(player).getPropertyValue('top');
    if (topPosition === '510px') {
        return;
    } else {
        let position = parseInt(topPosition);
        position += 50;
        player.style.top = `${position}px`;
    }
}

// Função de ataque
function fireLaser() {
    let laser = createLaserElement();
    playarea.appendChild(laser);
    moveLaser(laser);
}

function createLaserElement() {
    let xPosition = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    let yPosition = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    let newLaser = document.createElement('img');
    newLaser.src = './img/laser.png';
    newLaser.classList.add('laser');
    newLaser.style.left = `${xPosition}px`;
    newLaser.style.top = `${yPosition - 10}px`;
    return newLaser;
}

function moveLaser(laser) {
    let laserInterval = setInterval(() => {
        let xPosition = parseInt(laser.style.left);
        let enemies = document.querySelectorAll('.enemy');

        enemies.forEach((enemy) => {
            if (checkLaserColision(laser, enemy)) {
                enemy.src = 'img/explosion.png';
                enemy.classList.remove('enemy');
                enemy.classList.add('dead-enemy');
            }
        });
        
        if (xPosition === 340) {
            laser.remove();
        } else {
            laser.style.left = `${xPosition + 8}px`;
        }
    }, 10);
}

// Função de criação de inimigos aleatórios
function createEnemies() {
    let newEnemy = document.createElement('img');
    let enemySprite = enemies[Math.floor(Math.random() * enemies.length)];
    newEnemy.src = enemySprite;
    newEnemy.classList.add('enemy');
    newEnemy.classList.add('enemy-transition');
    newEnemy.style.left = '500px';
    newEnemy.style.top = `${Math.floor(Math.random() * 330) + 30}px`;
    playarea.appendChild(newEnemy);
    moveEnemy(newEnemy);
}

// Função de movimentação do inimigo
function moveEnemy(enemy) {
    let moveEnemyInterval = setInterval(() => {
        let xPosition = parseInt(window.getComputedStyle(enemy).getPropertyValue('left'));
        if (xPosition <= 50) {
            if (Array.from(enemy.classList).includes('dead-enemy')) {
                enemy.remove();
            } else {
                gameOver();
            }
        } else {
            enemy.style.left = `${xPosition - 2.5}px`;
        }
    }, 25);
}

// Função de verificação da colisão
function checkLaserColision(laser, enemy) {
    let laserTop = parseInt(laser.style.top);
    let laserLeft = parseInt(laser.style.left);
    let laserBottom = laserTop - 20;

    let enemyTop = parseInt(enemy.style.top);
    let enemyLeft = parseInt(enemy.style.left);
    let enemyBottom = enemyTop - 30;

    if (laserLeft != 340 && laserLeft + 40 >= enemyLeft) {
        if (laserTop <= enemyTop && laserTop >= enemyBottom) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

startButton.addEventListener('click', (event) => {
    playGame();
});

// Função de Início
function playGame() {
    startButton.style.display = 'none';
    instructionsText.style.display = 'none';
    window.addEventListener('keydown', flyShip);
    enemyInterval = setInterval(() => {
        createEnemies();
    }, 2000);
}

// Função de Game Over
function gameOver() {
    window.removeEventListener('keydown', flyShip);
    clearInterval(enemyInterval);

    let enemies = document.querySelectorAll('.enemy');
    enemies.forEach((enemy) => enemy.remove());

    let lasers = document.querySelectorAll('.laser');
    lasers.forEach((laser) => laser.remove());

    setTimeout(() => {
        alert('Game Over');
        player.style.top = '250px';
        startButton.style.display = 'block';
        instructionsText.style.display = 'block';
    });
}