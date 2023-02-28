
// DESCUBRE LA PALABRA
// Base de CodingNepal  - https://www.codingnepalweb.com/word-guessing-game-html-css-javascript/
// AGREGADO: Pantalla de inicio, jugador, marcador, notificaciones con SweetAlert2, modificado CSS, agregado de variables para manipulacion DOM, salir y volver a iniciar juego con otro jugador. Reemplazado listado de palabras con agregado de imagen y categoria.


const inputs = document.querySelector(".inputs"),
    hintTag = document.querySelector(".hint span"),
    guessLeft = document.querySelector(".guess-left span"),
    wrongLetter = document.querySelector(".wrong-letter span"),
    resetBtn = document.querySelector(".reset-btn"),   
    salirBtn = document.querySelector(".salir-btn"),   
    categoria = document.querySelector(".categoria"), 
    typingInput = document.querySelector(".typing-input"),
    
    jugadorInput = document.querySelector('#jugador-input'),
    nombreJugador = document.querySelector('.nombreJugador'),
    empezar = document.querySelector('.empezar-btn'),
    resGanados = document.querySelector('.ganados'),    
    resPerdidos = document.querySelector('.perdidos'),

    wraper = document.querySelector('.wrapper'),
    ingresar = document.querySelector('.ingresar');


//Ingreso de nombre del jugador y validacion campo vacio.
//En caso de ingreso exitoso, se aplican los cambios al display de la pagina de inicio./
empezar.addEventListener('click', ()=>{
    if(jugadorInput.value === '' || !isNaN(jugadorInput.value)){
        Swal.fire({
            title: `Ingresá un nombre válido!`,
            icon: 'info',
            confirmButtonColor: 'rgb(152, 207, 158)',
            width: '75%'
        })
    } else {
        Swal.fire({
            title: `Bienvenido ${jugadorInput.value}, buena suerte!`,
            icon: 'succes',
            confirmButtonColor: 'rgb(152, 207, 158)',

        })
        wraper.removeAttribute('style')
        ingresar.classList.add('display-none')
        nombreJugador.innerText = jugadorInput.value
    }
    
})

// se declaran las variables para generar elegir palabra aleatoria del listado, las letras correctas e incorrectas y las que almacenaran el resultado en ganadas y perdidas 
let word, maxGuesses, incorrectLetters = [], correctLetters = [];
let ganados = 0;
let perdidos = 0;


// se elige una palabra aleatoria de la lista, se establece la cantidad de oportunidades maximas segun la extension de la palabra y se incorporará al dom segun corresponda
function randomWord ()  {
    let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.word;
    maxGuesses = word.length >= 5 ? 8 : 6; //si la palabras es mayor o igual a 5, 8 oportunidades, sino 6
    correctLetters = []; incorrectLetters = []; // se almacenan las letras correctas e incorrectas
    hintTag.innerText = ranItem.hint;
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;
    categoria.innerText = ranItem.categoria;
    imagen = ranItem.imagen;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
        inputs.innerHTML = html;
    }
}
randomWord();

// se inicia el juego y se recorre las palabras para determinar si agregar las letras correctas e incorrectas, para disminuir la cantidad de posibilidades o mostrar en los casilleros la letra elegida correctamente.
function initGame(e) {
    let key = e.target.value.toLowerCase();
    if(key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == key) {
                    correctLetters += key;
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrectLetters.push(` ${key}`);
        }
        guessLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrectLetters;
    }
    typingInput.value = "";

        // si se encuentra la palabra, se dispara la alerta mostrando la imagen y la palabra encontrada, se incrementa el resultado de ganados.
        // caso contrario, si no hay mas posibilidades de elegir, se incrementa los perdidos y se muestra el alerta de la partida perdida.
        if(correctLetters.length === word.length) {
            Swal.fire({
                title: `Felicitaciones, encontraste la palabra ${word.toUpperCase()}!!!`,
                icon:"success",
                imageUrl: `${imagen}`,
                confirmButtonColor: 'rgb(152, 207, 158)'
            })
            ganados++
            resGanados.innerText = ganados
            return randomWord();
        }
         else if(maxGuesses < 1) {
            Swal.fire({
                title: "Perdiste, no te quedan mas intentos!!!",
                icon: "error",
                confirmButtonColor: 'rgb(152, 207, 158)'
            })
            perdidos++
            resPerdidos.innerText = perdidos
            return randomWord();
        }
    }


// funcion salir, permite reiniciar el juego para que inicie otro jugador.
function salir () {
    Swal.fire({
        title: "Estas seguro?", 
        text: "Se perderá tu puntuacion", 
        type: "warning",
        confirmButtonText: "SI",
        cancelButtonText: "NO",
        showCancelButton: true,
        confirmButtonColor: 'rgb(152, 207, 158)'
    })
        .then((result) => {
            if (result.value) {
                location.reload();
            } else if (result.dismiss === 'cancel') {
                Swal.fire(
                  'Perfecto!',
                  'Gracias por quedarte',
                  'success',                  
                )
            }
        })
};

// elegir otra palabra
resetBtn.addEventListener("click", randomWord);
//salir del juego
salirBtn.addEventListener("click", salir);
// comienza el juego y el registro de las teclas
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());

