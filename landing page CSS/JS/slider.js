// Esta es una función anónima que se ejecuta inmediatamente al cargar la página.
(function(){
    // Selecciona todos los elementos con la clase "testimony__body" y los almacena en un arreglo.
    const sliders = [...document.querySelectorAll('.testimony__body')];
    
    // Obtiene referencias a los botones "Next" y "Before" por su ID.
    const buttonNext = document.getElementById('next');
    const buttonBefore = document.getElementById('before');
    
    // Declara una variable "value" sin asignarle un valor inicial.
    let value;
    
    // Agrega un manejador de evento al botón "Next" para avanzar en el carrusel.
    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });
    
    // Agrega un manejador de evento al botón "Before" para retroceder en el carrusel.
    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    // Esta función cambia la posición del carrusel según el argumento "add".
    const changePosition = (add) => {
        // Obtiene el testimonio actual que se está mostrando.
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        // Convierte el valor actual en un número y le suma "add".
        value = Number(currentTestimony) + add;

        // Quita la clase "testimony__body--show" del testimonio actual, ocultándolo.
        sliders[Number(currentTestimony) - 1].classList.remove('testimony__body--show');

        // Verifica si "value" es igual a la longitud de "sliders" + 1 o igual a 0.
        if (value === sliders.length + 1 || value === 0) {
            // Si es igual a 0, lo ajusta a la longitud de "sliders", o viceversa, para hacer el carrusel cíclico.
            value = value === 0 ? sliders.length : 1;
        }

        // Agrega la clase "testimony__body--show" al testimonio correspondiente al nuevo valor de "value" para mostrarlo.
        sliders[value - 1].classList.add('testimony__body--show');
    }
})();
