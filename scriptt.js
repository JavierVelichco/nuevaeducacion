      // Función para actualizar las opciones de la lista dependiente
      function updateSubCategoryOptions(category, selectedSubCategory) {
        const subCategory = document.getElementById('subCategory');
        
        // Limpiar las opciones previas
        subCategory.innerHTML = '<option value="">Selecciona una opción relacionada</option>';
    
        let options = [];
    
        // Llenar la lista dependiente basada en la categoría seleccionada
        if (category === 'cursos') {
          options = ['Idiomas', 'Inversiones', 'Economia', 'Gestión', 'Sustentabilidad', 'Salud'];
        } else if (category === 'talleres') {
          options = ['L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S'];
        } else if (category === 'tutoriales') {
          options = ['T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        }
    
        // Agregar las nuevas opciones a la lista desplegable
        options.forEach(function(option) {
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
          message: urlParams.get('message')
        };
      }
    
      // Llamar a la función para manejar los parámetros de la URL
      window.onload = function() {
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
    
      // Función para actualizar las opciones de la lista dependiente al cambiar la categoría
      document.getElementById('category').addEventListener('change', function() {
        const category = this.value;
        const subCategory = document.getElementById('subCategory');
        
        // Limpiar las opciones previas
        subCategory.innerHTML = '<option value="">Selecciona una opción relacionada</option>';
    
        let options = [];
    
        // Llenar la lista dependiente basada en la categoría seleccionada
        if (category === 'cursos') {
          options = ['Idiomas', 'Inversiones', 'Economia', 'Gestión', 'Sustentabilidad', 'Salud'];
        } else if (category === 'talleres') {
          options = ['L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S'];
        } else if (category === 'tutoriales') {
          options = ['T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        }
    
        // Agregar las nuevas opciones a la lista desplegable
        options.forEach(function(option) {
          const newOption = document.createElement('option');
          newOption.value = option;
          newOption.textContent = option;
          subCategory.appendChild(newOption);
        });
      });
    
      // Función de validación para el formulario
      document.getElementById('contactForm').addEventListener('submit', function(event) {
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
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
          alert("Por favor, ingresa un correo electrónico válido.");
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