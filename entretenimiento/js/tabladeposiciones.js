
// Función para cargar la tabla de posiciones 
window.onload = function () {
    loadHighScores(); // Llamar a la función que carga la tabla de posiciones al cargar la página
};

function loadHighScores() {
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    // Llenar la tabla con los puntajes
    const tbody = document.querySelector('#highScoresTable tbody');
    tbody.innerHTML = ''; // Limpiar la tabla antes de agregar nuevas filas

    highScores.forEach((score, index) => {

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${score.playerName}</td>
            <td>${score.score}</td>
            <td>${score.time}s</td>

        `;
        tbody.appendChild(row);
    });
}

// Función para cargar la tabla de posiciones
function loadHighScores() {
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    // Llenar la tabla con los puntajes
    const tbody = document.querySelector('#highScoresTable tbody');
    tbody.innerHTML = ''; // Limpiar la tabla antes de agregar nuevas filas

    highScores.forEach((score, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
    <td>${index + 1}</td>
    <td>${score.playerName}</td>
    <td>${score.score}</td>
    <td>${score.time}s</td>
   `;
        tbody.appendChild(row);
    });
}

// Función para borrar los datos de la tabla de posiciones
//document.getElementById('clearScoresBtn').addEventListener('click', function () {
//    if (confirm("¿Estás seguro de que deseas borrar la tabla de posiciones?")) {
//        // Borrar los datos de localStorage
//        localStorage.removeItem('highScores');
//
// Volver a cargar la tabla (vacía)
//        loadHighScores();
//    }
//});
