class Pantalla {
    constructor(numGuardado, numActivo, operacionActiva) {
        this.calculadora = new Calculadora();
        this.numGuardado = numGuardado;
        this.numActivo = numActivo;
        this.operacionActiva = operacionActiva;
        this.operacion = undefined;
        this.valorGuardado = '';
        this.valorActivo = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            multiplicar: 'x',
            dividir: '÷',
        }
    }

    agregarNumero(num) {
        if (num != '.' || !(this.valorActivo.includes('.'))) {
            this.valorActivo = this.valorActivo.toString() + num.toString();
            this.mostrarPantalla();
        }
    }

    mostrarPantalla() {
        this.numGuardado.textContent = this.valorGuardado;
        this.operacionActiva.textContent = this.signos[this.operacion];
        this.numActivo.textContent = this.valorActivo;
    }

    borrar() {
        this.valorActivo = this.valorActivo.toString().slice(0,-1);
        this.mostrarPantalla();
    }

    borrarTodo() {
        this.valorGuardado = '';
        this.valorActivo = '';
        this.operacion = undefined;
        this.mostrarPantalla();
    }

    agregarOperador(operador) {
        this.operacion !== 'igual' && this.calcular();
        this.operacion = operador;
        this.valorGuardado = this.valorActivo || this.valorGuardado;
        this.valorActivo = '';
        this.mostrarPantalla();
    }

    invertirSigno() {
        const valorActivo = parseFloat(this.valorActivo);
        if( isNaN(valorActivo) ) return
        this.valorActivo = valorActivo * -1;
        this.mostrarPantalla();
    }

    calcular() {
        const valorGuardado = parseFloat(this.valorGuardado);
        const valorActivo = parseFloat(this.valorActivo);

        if( isNaN(valorGuardado)  || isNaN(valorActivo) ) return
        this.valorActivo = this.calculadora[this.operacion](valorGuardado, valorActivo);
    }
}