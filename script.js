
    
    document.addEventListener('DOMContentLoaded', function() {
    //Primero creamos el contenedor principal que tendrá ambos ejercicios
    const contenedor = document.createElement('div');
    contenedor.className = 'container';
    
    //EJERCICIO 1

    //Creamos el div que contendrá todo el ejercicio 1
    const ejercicio1 = document.createElement('div');
    ejercicio1.className = 'exercise';
    
    //Título del ejercicio 1
    const titulo1 = document.createElement('h1');
    titulo1.className = 'title';
    titulo1.textContent = 'ACCESO POR CLAVE';
    ejercicio1.appendChild(titulo1);
    
    //Esta es la pantalla donde se ven los puntos de la contraseña
    const pantallaClave = document.createElement('div');
    pantallaClave.className = 'password-display';
    pantallaClave.id = 'pantalla-clave';
    pantallaClave.textContent = '____'; //Empezamos con 4 guiones
    ejercicio1.appendChild(pantallaClave);
    
    //Aquí irán los botones numéricos y los de acción
    const contenedorBotones = document.createElement('div');
    contenedorBotones.className = 'buttons-container';
    contenedorBotones.id = 'contenedor-botones';
    ejercicio1.appendChild(contenedorBotones);
    
    //Aquí aparecerán los mensajes de error o éxito
    const elementoMensaje = document.createElement('div');
    elementoMensaje.className = 'message';
    elementoMensaje.id = 'mensaje';
    ejercicio1.appendChild(elementoMensaje);
    
    //Variable para guardar la clave que va escribiendo el usuario
    let claveIngresada = '';
    //La clave correcta es 9999 según el ejercicio
    const claveCorrecta = '9999';
    
    //Función para mezclar los números aleatoriamente
    //Esto cumple el requisito de que los botones aparezcan en orden aleatorio
    function mezclarNumeros(numeros) {
        //Recorremos el array de atrás hacia adelante
        for (let i = numeros.length - 1; i > 0; i--) {
            //Elegimos una posición aleatoria
            const j = Math.floor(Math.random() * (i + 1));
            //Intercambiamos las posiciones
            [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
        }
        return numeros;
    }
    
    //Creamos los números del 1 al 9 y los mezclamos
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numerosMezclados = mezclarNumeros([...numeros]);
    
    //Ahora creamos los 9 botones numéricos
    numerosMezclados.forEach(numero => {
        const boton = document.createElement('button');
        boton.className = 'btn';
        boton.textContent = numero;
        //Cuando se hace click en un botón numérico
        boton.addEventListener('click', function() {
            //Solo agregamos el número si aún no tenemos 4 dígitos
            if (claveIngresada.length < 4) {
                claveIngresada += numero;
                actualizarPantallaClave();
            }
        });
        contenedorBotones.appendChild(boton);
    });
    
    //Botón para borrar el último carácter (la C)
    const botonBorrar = document.createElement('button');
    botonBorrar.className = 'btn clear-btn';
    botonBorrar.textContent = 'C';
    botonBorrar.addEventListener('click', function() {
        if (claveIngresada.length > 0) {
            //Quitamos el último carácter
            claveIngresada = claveIngresada.slice(0, -1);
            actualizarPantallaClave();
            limpiarMensaje();
        }
    });
    contenedorBotones.appendChild(botonBorrar);
    
    //Botón para validar la contraseña
    const botonValidar = document.createElement('button');
    botonValidar.className = 'btn validate-btn';
    botonValidar.textContent = 'VALIDAR';
    botonValidar.addEventListener('click', validarClave);
    contenedorBotones.appendChild(botonValidar);
    
    //Esta función actualiza lo que se ve en la pantalla de la clave
    function actualizarPantallaClave() {
        let textoMostrado = '';
        //Siempre mostramos 4 caracteres
        for (let i = 0; i < 4; i++) {
            if (i < claveIngresada.length) {
                //Si el usuario ya escribió este dígito, mostramos un punto
                textoMostrado += '•';
            } else {
                //Si no, mostramos un guión
                textoMostrado += '_';
            }
        }
        pantallaClave.textContent = textoMostrado;
    }
    
    //Limpia los mensajes de error o éxito
    function limpiarMensaje() {
        elementoMensaje.textContent = '';
        elementoMensaje.className = 'message';
    }
    
    //Valida la clave
    function validarClave() {
        limpiarMensaje();
        
        //La clave debe tener exactamente 4 caracteres
        if (claveIngresada.length !== 4) {
            elementoMensaje.textContent = 'Error: La clave debe tener exactamente 4 caracteres';
            elementoMensaje.className = 'message error';
            return;
        }
        
        //Expresión regular para validar
        const expresionRegular = /^9999$/;
        if (expresionRegular.test(claveIngresada)) {
            elementoMensaje.textContent = '¡Contraseña correcta! Acceso permitido';
            elementoMensaje.className = 'message success';
        } else {
            elementoMensaje.textContent = 'Error: Contraseña incorrecta';
            elementoMensaje.className = 'message error';
        }
    }
    
    //EJERCICIO 2
    
    //Creamos el div que contendrá todo el ejercicio 2
    const ejercicio2 = document.createElement('div');
    ejercicio2.className = 'exercise';
    
    //Título del ejercicio 2
    const titulo2 = document.createElement('h1');
    titulo2.className = 'primitiva-title';
    titulo2.textContent = 'LOTERÍA PRIMITIVA';
    ejercicio2.appendChild(titulo2);
    
    //Esta es la cuadrícula de 7x7 con los números del 1 al 49
    const cuadriculaNumeros = document.createElement('div');
    cuadriculaNumeros.className = 'lottery-grid';
    cuadriculaNumeros.id = 'cuadricula-numeros';
    ejercicio2.appendChild(cuadriculaNumeros);
    
    //Línea separadora como en la imagen
    const separador = document.createElement('hr');
    separador.className = 'separator';
    ejercicio2.appendChild(separador);
    
    //Contenedor para el botón de sorteo
    const controles = document.createElement('div');
    controles.className = 'controls';
    ejercicio2.appendChild(controles);
    
    //Botón para realizar el sorteo
    const botonSorteo = document.createElement('button');
    botonSorteo.className = 'draw-btn';
    botonSorteo.id = 'boton-sorteo';
    botonSorteo.textContent = 'Realizar sorteo';
    controles.appendChild(botonSorteo);
    
    //Contenedor para mostrar los resultados
    const resultados = document.createElement('div');
    resultados.className = 'results';
    ejercicio2.appendChild(resultados);
    
    //Aquí aparecerán los números que salgan en el sorteo
    const numerosSorteadosElemento = document.createElement('div');
    numerosSorteadosElemento.className = 'drawn-numbers';
    numerosSorteadosElemento.id = 'numeros-sorteados';
    resultados.appendChild(numerosSorteadosElemento);
    
    //Aquí aparecerá el número de aciertos
    const aciertosElemento = document.createElement('div');
    aciertosElemento.className = 'matches';
    aciertosElemento.id = 'aciertos';
    resultados.appendChild(aciertosElemento);
    
    //Aquí guardamos qué números ha seleccionado el usuario
    let numerosSeleccionados = [];
    //En la primitiva hay 49 números
    const totalNumeros = 49;
    
    //Creamos los 49 números de la lotería
    for (let i = 1; i <= totalNumeros; i++) {
        const numeroElemento = document.createElement('div');
        numeroElemento.className = 'lottery-number';
        numeroElemento.textContent = i;
        //Guardamos el número como dato en el elemento
        numeroElemento.dataset.numero = i;
        
        //Usamos delegación de eventos como pide el ejercicio
        //Esto significa que cada número escucha sus propios clicks
        numeroElemento.addEventListener('click', alternarSeleccionNumero);
        
        cuadriculaNumeros.appendChild(numeroElemento);
    }
    
    //Esta función se llama cuando se hace click en un número
    function alternarSeleccionNumero(evento) {
        const numeroElemento = evento.currentTarget;
        const numero = parseInt(numeroElemento.dataset.numero);
        
        //Si el número ya estaba seleccionado, lo deseleccionamos
        if (numeroElemento.classList.contains('selected')) {
            numeroElemento.classList.remove('selected');
            numerosSeleccionados = numerosSeleccionados.filter(n => n !== numero);
        } else {
            //Solo permitimos seleccionar si tenemos menos de 6 números
            if (numerosSeleccionados.length < 6) {
                numeroElemento.classList.add('selected');
                numerosSeleccionados.push(numero);
            } else {
                alert('Solo puedes seleccionar 6 números');
            }
        }
    }
    
    //Cuando se hace click en el botón de sorteo
    botonSorteo.addEventListener('click', function() {
        //Primero validamos que el usuario haya seleccionado 6 números
        if (numerosSeleccionados.length !== 6) {
            alert('Debes seleccionar exactamente 6 números antes de realizar el sorteo');
            return;
        }
        
        //Generamos 6 números aleatorios distintos para el sorteo
        const numerosDelSorteo = [];
        while (numerosDelSorteo.length < 6) {
            const numeroAleatorio = Math.floor(Math.random() * totalNumeros) + 1;
            //Nos aseguramos de que no se repitan
            if (!numerosDelSorteo.includes(numeroAleatorio)) {
                numerosDelSorteo.push(numeroAleatorio);
            }
        }
        
        //Ordenamos los números de menor a mayor para que se vean mejor
        numerosDelSorteo.sort((a, b) => a - b);
        
        //Mostramos los números sorteados separados por espacios
        numerosSorteadosElemento.textContent = numerosDelSorteo.join('  ');
        
        //Calculamos cuántos aciertos ha tenido el usuario
        const aciertos = numerosSeleccionados.filter(num => numerosDelSorteo.includes(num));
        
        //Mostramos el resultado de los aciertos
        if (aciertos.length === 0) {
            aciertosElemento.textContent = 'No has tenido ningún acierto';
            aciertosElemento.style.color = '#e74c3c'; //Rojo para 0 aciertos
        } else {
            aciertosElemento.textContent = `Has tenido ${aciertos.length} acierto${aciertos.length > 1 ? 's' : ''}.`;
            aciertosElemento.style.color = '#27ae60'; //Verde para aciertos
        }
    });
    
    //------------------------------------------------------------
    //ENSAMBLAJE FINAL
    //------------------------------------------------------------
    
    //Metemos el ejercicio 1 dentro del contenedor principal
    contenedor.appendChild(ejercicio1);
    //Metemos el ejercicio 2 dentro del contenedor principal
    contenedor.appendChild(ejercicio2);
    
    //Finalmente, metemos el contenedor principal en el body
    document.body.appendChild(contenedor);
    
    //Inicializamos la pantalla de la clave con los 4 guiones
    actualizarPantallaClave();
});