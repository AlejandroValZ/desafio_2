const numGuardado = document.getElementById('num_guardado');
const numActivo = document.getElementById('num_activo');
const operacionActiva = document.getElementById('operacion');
const botonInvertirSigno = document.getElementById('invertir_signo');
const numeros = document.querySelectorAll('.numero');
const operaciones = document.querySelectorAll('.operador');
const pantalla = new Pantalla(numGuardado, numActivo, operacionActiva);

numeros.forEach(boton => {
    boton.addEventListener('click', () => {
        pantalla.agregarNumero(boton.innerHTML);
    });
});

operaciones.forEach(boton => {
    boton.addEventListener('click', () => {
        pantalla.agregarOperador(boton.value);
    });
});

botonInvertirSigno.addEventListener('click', () => {
    pantalla.invertirSigno();
});