
// Función para actualizar las opciones de la lista dependiente
function updateSubCategoryOptions(category, selectedSubCategory) {
    const subCategory = document.getElementById('subCategory');

    // Limpiar las opciones previas
    subCategory.innerHTML = '<option value="">Selecciona una opción relacionada</option>';

    let options = [];

    // Llenar la lista dependiente basada en la categoría seleccionada
    if (category === 'cursos') {
        options = ['Idiomas', 'Inversiones', 'Economía', 'Gestión', 'Sustentabilidad', 'Salud'];
    } else if (category === 'talleres') {
        options = ['Fotografía', 'Pintura', 'Cocina', 'Música', 'Escritura Creativa', 'Diseño Gráfico'];
    } else if (category === 'tutoriales') {
        options = [
            'Programación', 'Diseño Web', 'Fotografía', 'Cocina', 'Photoshop', 'Marketing Digital'
        ];
    }

    // Agregar las nuevas opciones a la lista desplegable
    options.forEach(function (option) {
        const newOption = document.createElement('option');
        newOption.value = option;
        newOption.textContent = option;
        subCategory.appendChild(newOption);
    });

    // Si existe una subcategoría seleccionada, asignarla
    if (selectedSubCategory) {
        subCategory.value = selectedSubCategory;
    }
}

// Función para obtener parámetros de la URL
function getUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        category: urlParams.get('category'),
        subCategory: urlParams.get('subCategory'),
        message: urlParams.get('message'),
    };
}

// Llamar a la función para manejar los parámetros de la URL
window.onload = function () {
    const params = getUrlParams();

    // Asignar el valor de 'category' si existe
    if (params.category) {
        document.getElementById('category').value = params.category;
        // Llamar a la función para actualizar las subcategorías
        updateSubCategoryOptions(params.category, params.subCategory);
    }

    // Asignar el valor de 'subCategory' si existe
    if (params.subCategory) {
        document.getElementById('subCategory').value = params.subCategory;
    }

    // Asignar el valor de 'message' si existe
    if (params.message) {
        document.getElementById('message').value = decodeURIComponent(params.message); // Decodificando el mensaje
    }
};

// Agregar un event listener para actualizar las subcategorías cuando se seleccione una categoría
document.getElementById('category').addEventListener('change', function () {
    const selectedCategory = this.value;
    updateSubCategoryOptions(selectedCategory);
});

// Función de validación para el formulario
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío del formulario para validarlo primero

    let valid = true;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let category = document.getElementById('category').value;
    let subCategory = document.getElementById('subCategory').value;

    // Validación del nombre
    if (name === "") {
        alert("El nombre es obligatorio.");
        valid = false;
    }

    // Validación del correo electrónico
    //let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let emailRegex = /^[a-zA-Z0-9._-]+@(gmail\.com|yahoo\.com|outlook\.com)$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido de tipo gmail.com, yahoo.com o outlook.com.");
        valid = false;
    }

    // Validación del mensaje
    if (message === "") {
        alert("El mensaje no puede estar vacío.");
        valid = false;
    }

    // Validación de la categoría y subcategoría
    if (category === "") {
        alert("Por favor, selecciona una categoría.");
        valid = false;
    }

    if (subCategory === "") {
        alert("Por favor, selecciona una opción relacionada.");
        valid = false;
    }

    // Si todo es válido, puedes proceder a enviar los datos
    if (valid) {
        alert("¡Formulario enviado exitosamente!");
        this.submit();
    }

});
