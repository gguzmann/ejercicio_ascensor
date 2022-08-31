const pisos = document.querySelectorAll('.piso');
const btnBajar = document.querySelectorAll('.btnBajar')

console.log(pisos.length);

piso_actual = 4;
pisos[piso_actual].classList.toggle('active');

btnBajar.forEach((button, index) => {
    button.addEventListener('click', () => {
        // console.log('click')
        // console.log(piso_actual)
        elegir  (index)
    })
});

function elegir(destino){
    if(destino > piso_actual)
    {
        subir(destino)
    }else{
        bajar(destino)
    }
}

async function subir(destino) {

    console.log(piso_actual + 1, destino + 1)
    if (piso_actual === destino) {
        console.log('llego a destino')
        return;
    }
    await delay(1)
    pisos[piso_actual].classList.toggle('active');
    piso_actual++;
    pisos[piso_actual].classList.toggle('active');

    return subir(destino)


}

async function bajar(destino) {

    console.log(piso_actual + 1, destino + 1)
    if (piso_actual === destino) {
        console.log('llego a destino')
        return;
    }
    await delay(1)
    pisos[piso_actual].classList.toggle('active');
    piso_actual--;
    pisos[piso_actual].classList.toggle('active');

    return bajar(destino)

}

function random() {
    return Math.floor(Math.random() * (5 - 0) + 0);
}

function delay(seg) {
    return new Promise(res => setTimeout(res, 1000 * 1))
}

// subir(random())


// count = 0;
// setInterval(() => {
//     console.log(count)
//     pisos[count].classList.toggle('active');
//     if (count > 0) {
//         pisos[count - 1].classList.toggle('active');

//     }
//     count++;
//     if(count == 5)
//     {
//         // pisos[count - 1].classList.toggle('active');
//         count = 0
//     }
// }, 500)