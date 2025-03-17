let score = 0;
let gameRunning = false;
let gamePaused = false;
let balloonCreationTimer;
let gameStartTime;
let isDiceRolling = false;  // Variable para saber si se está tirando el dado
const goal = 500; // Objetivo de 100.000
let playerName = ''; // Nombre del jugador

const balloonValues = [1, 2, 5, 10, 20, 50, 100];
const stoppedClass = 'stopped'; // Clase para detener la animación

// Inicializar el modal oculto
document.getElementById('nameModal').style.display = 'none'; // El modal está oculto al inicio

// Mostrar el formulario para ingresar el nombre cuando se presiona "Iniciar"
document.getElementById('startBtn').onclick = function () {
    document.getElementById('nameForm').style.display = 'block'; // Mostrar formulario
    document.getElementById('startBtn').style.display = 'none'; // Ocultar el botón de inicio
};

// Función que se llama cuando el jugador hace clic en "Continuar"
function startGameWithName() {
    playerName = document.getElementById('playerName').value.trim();

    if (playerName === '') {
        alert('Por favor ingresa un nombre válido.');
        return;
    }

    // Ocultar el modal
    document.getElementById('nameModal').style.display = 'none';

    // Mostrar la interfaz del juego
    document.getElementById('gameTitle').style.display = 'none';
    document.getElementById('score').style.display = 'block';
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('pauseBtn').style.display = 'inline-block';
    document.getElementById('resetBtn').style.display = 'inline-block';
    document.getElementById('gameArea').style.display = 'block';
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('frase').style.display = 'none';
    document.getElementById('footer').style.display = 'none';

    document.getElementById('score').innerText = `Puntaje de ${playerName}: 0`;

    startGame();
}

// Mostrar el modal solo al presionar el botón de inicio
document.getElementById('startBtn').onclick = function () {
    document.getElementById('nameModal').style.display = 'block'; // Mostrar formulario
    document.getElementById('startBtn').style.display = 'none'; // Ocultar el botón de inicio
};

// Función que comienza el juego
function startGame() {
    if (!gameRunning) {
        gameRunning = true;
        gameStartTime = Date.now(); // Registrar la hora de inicio del juego

        document.getElementById('gameTitle').style.display = 'none';
        document.getElementById('score').style.display = 'block';
        document.getElementById('startBtn').style.display = 'none';
        document.getElementById('pauseBtn').style.display = 'inline-block';
        document.getElementById('resetBtn').style.display = 'inline-block';
        document.getElementById('gameArea').style.display = 'block';
        document.getElementById('instructions').style.display = 'none';

        document.getElementById('score').innerText = `Puntaje de ${playerName}: 0`;
        createBalloon(); // Crear el primer globo
    }
}

function createBalloon() {
    if (!gameRunning || gamePaused || isDiceRolling) return;

    const gameArea = document.getElementById('gameArea');
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    const isSpecialBalloon = Math.random() < 0.2 && score >= 100; // 20% de probabilidad y puntaje mínimo de 100
    let balloonValue;

    if (isSpecialBalloon) {
        balloonValue = 0; // No sumamos puntos en los globos especiales
        balloon.style.backgroundColor = "#FFD700"; // Color dorado para globo especial
        balloon.innerHTML = "Bonus"; // Texto 'Bonus' para globos especiales
        balloon.style.boxShadow = "0 0 10px rgba(255, 215, 0, 0.7)"; // Efecto de brillo
    } else {
        balloonValue = balloonValues[Math.floor(Math.random() * balloonValues.length)]; // Valor aleatorio
        balloon.style.backgroundColor = "#ff6347"; // Color rojo para globo normal
        balloon.innerHTML = balloonValue; // Valor numérico en los globos normales
    }

    balloon.style.left = `${Math.random() * (gameArea.offsetWidth - 80)}px`; // Posición aleatoria horizontal
    balloon.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`; // Animación de caída

    balloon.onclick = function () {
        if (balloonValue === 0) {
            // Si el globo es especial, detén el juego para lanzar un dado (por ejemplo)
            stopGameForDiceRoll(); // Detener juego y lanzar dado
        } else {
            // Si el globo no es especial, sumar puntos
            score += balloonValue;
            document.getElementById('score').innerText = `Acumulado: ${score}`;
            if (score >= goal) {
                winGame(); // Ganar si alcanza la meta de puntos
                return;
            }
        }

        balloon.style.animation = 'explode 0.5s forwards'; // Animación de explosión al hacer clic
        setTimeout(() => balloon.remove(), 500); // Eliminar globo después de la animación
    };

    // Eliminar el globo después de 5 segundos si no fue clickeado
    setTimeout(() => {
        if (balloon.parentElement) {
            balloon.remove();
        }
    }, 5000);

    // Añadir el globo al área de juego
    gameArea.appendChild(balloon);

    // Si no está pausado el juego y no se está lanzando el dado, crear globos periódicamente
    if (!gamePaused && score < goal && !isDiceRolling) {
        balloonCreationTimer = setTimeout(createBalloon, Math.random() * 1200 + 300);
    }
}


function stopGameForDiceRoll() {
    clearTimeout(balloonCreationTimer);
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => balloon.classList.add(stoppedClass));

    const legend = document.getElementById('legend');
    legend.style.display = 'block';
    legend.innerHTML = "¡Elige en qué te inscribes y multiplicá...!";

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('d-flex', 'justify-content-center', 'mt-3');

    const diceOptions = [
        { label: 'Curso', sides: Math.floor(Math.random() * 7) + 1 },
        { label: 'Taller', sides: Math.floor(Math.random() * 7) + 1 },
        { label: 'Tutorial', sides: Math.floor(Math.random() * 7) + 1 }
    ];

    diceOptions.forEach(option => {
        const diceButton = document.createElement('button');
        diceButton.textContent = option.label;
        diceButton.classList.add('btn', 'btn-secondary', 'm-2');
        diceButton.onclick = function () {
            rollDice(option.sides);
            legend.style.display = 'none';
        };
        buttonContainer.appendChild(diceButton);
    });

    legend.appendChild(buttonContainer);
}

function rollDice(sides) {
    if (isDiceRolling) return;
    isDiceRolling = true;
    clearTimeout(balloonCreationTimer);

    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => balloon.classList.add(stoppedClass));

    const diceRoll = Math.floor(Math.random() * sides) + 2;
    let multiplier = diceRoll;
    alert(`¡Has multiplicado tu dinero por ${diceRoll}!`);

    score *= multiplier;
    document.getElementById('score').innerText = `Acumulado: ${score}`;

    if (score >= goal) {
        winGame();
        return;
    }

    setTimeout(() => {
        createBalloon();
        balloons.forEach(balloon => {
            balloon.classList.remove(stoppedClass);
            balloon.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        });

        if (score < goal) {
            balloonCreationTimer = setTimeout(createBalloon, Math.random() * 1200 + 300);
        }

        isDiceRolling = false;
    }, 500);
}

function winGame() {
    clearTimeout(balloonCreationTimer);
    document.getElementById('pauseBtn').style.display = 'none';
    document.getElementById('resetBtn').style.display = 'none';
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('score').style.display = 'none';

    const victoryImageContainer = document.getElementById('victoryImageContainer');
    victoryImageContainer.style.display = 'block';
    const winMessage = document.getElementById('winMessage');
    winMessage.style.display = 'block';

    const timeElapsed = Math.floor((Date.now() - gameStartTime) / 1000);
    document.getElementById('finalScore').innerText = `Puntaje Final: ${score}`;
    document.getElementById('finalTime').innerText = `Tiempo: ${timeElapsed} segundos`;

    saveScore(playerName, score, timeElapsed);

    setTimeout(function () {
        window.location.href = "tabladeposiciones.html";
    }, 3500);
}

function saveScore(playerName, score, time) {
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    // Agregar el puntaje con el nombre del jugador
    highScores.push({ playerName, score, time });

    // Ordenar los puntajes de mayor a menor
    highScores.sort((a, b) => b.score - a.score);

    // Limitar a los 10 primeros puntajes
    if (highScores.length > 10) {
        highScores = highScores.slice(0, 10);
    }

    // Guardar en localStorage
    localStorage.setItem('highScores', JSON.stringify(highScores));
}

function pauseGame() {
    if (gameRunning && !gamePaused) {
        gamePaused = true;
        clearTimeout(balloonCreationTimer); // Detener la creación de globos
        document.getElementById('pauseMessage').style.display = 'block'; // Mostrar mensaje de pausa
        document.getElementById('pauseBtn').innerText = 'Reanudar'; // Cambiar texto del botón
    } else if (gameRunning && gamePaused) {
        gamePaused = false;
        document.getElementById('pauseMessage').style.display = 'none'; // Ocultar mensaje de pausa
        document.getElementById('pauseBtn').innerText = 'Pausar'; // Cambiar texto del botón
        balloonCreationTimer = setTimeout(createBalloon, Math.random() * 1200 + 300); // Reanudar creación de globos
    }
}


function resetGame() {
    score = 0;
    document.getElementById('score').innerText = `Acumulado: ${score}`;
    document.getElementById('gameArea').innerHTML = '';
    gameRunning = false;
    gamePaused = false;
    document.getElementById('gameTitle').style.display = 'block';
    document.getElementById('score').style.display = 'none';
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('pauseBtn').style.display = 'none';
    document.getElementById('resetBtn').style.display = 'none';
    document.getElementById('legend').style.display = 'none';
    document.getElementById('pauseMessage').style.display = 'none';
    document.getElementById('winMessage').style.display = 'none';
    document.getElementById('victoryImageContainer').style.display = 'none';
    clearTimeout(balloonCreationTimer);
}

document.getElementById('pauseBtn').onclick = pauseGame;
document.getElementById('resetBtn').onclick = resetGame;

document.addEventListener('keydown', function (event) {
    if (event.key === 'p' || event.key === 'P') {
        pauseGame();
    } else if (event.key === 'r' || event.key === 'R') {
        resetGame();
    }
});