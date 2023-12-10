let calcular = document.getElementById('calcular');
const ERROR = document.getElementById('error');

calcular.addEventListener("click", () => {
    let dato = document.getElementById("peso");

    if (dato.value === "") {
        ERROR.style.display = "block";
        return;
    }

    ERROR.style.display = "none";
    let peso = dato.value * 1;

    let volumenDiario = hollidaySegar(peso);
    console.log(volumenDiario);
});

function hollidaySegar(p) {
    let volumenDiario = 2;

    if (p <= 10) {
        volumenDiario = p * 100;
    } else if (p > 10 && p < 20) {
        volumenDiario = 10 * 100 + (p - 10) * 50;
    } else {
        volumenDiario = 10 * 100 + 10 * 50 + (p - 20) * 20;
    }

    return volumenDiario;
}

function superficieCorporal(peso) {
    let resultado = ((peso * 4) + 7) / (peso + 90);
    resultado = resultado * 1.5;
    return resultado;
}
