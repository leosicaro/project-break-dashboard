const hora = document.querySelector(".horas")
const minuto = document.querySelector(".minutos")
const segundo = document.querySelector(".segundos")
const advice = document.querySelector(".advice")

const zeros = (n) => {
    if (n.toString().length < 2) {
        return "0".concat(n);
    } else {
        return n;
    }
}

const actualizarHora = () => {
    const time = new Date();
    let horas = zeros(time.getHours());
    let minutos = zeros(time.getMinutes());
    let segundos = zeros(time.getSeconds());

    hora.textContent = `${horas} `
    minuto.textContent = `:${minutos} `
    segundo.textContent = `:${segundos}`
}
actualizarHora()
setInterval(actualizarHora, 1000)

const postAdvice = (n) => {
    if (n <= 0) {
        advice.textContent = `"Sobre esta hora la gente pierde o ha perdido  zapatos, deberias plantearte dormir"`;
    } else if (n >= 6 && n <= 11) {
        advice.textContent = `GOOOD MORNING VIETNAM`;
    }
    else if (n >= 12 && n <= 15) {
        advice.textContent = `Es hora de ir llamando a ratatouille`;
    }
    else if (n >= 16 && n <= 17) {
        advice.textContent = "Espero que tengas la panza como Oogie Boogie (pero no rellena de lo mismo...)";
    }
    else if (n >= 18 && n <= 20) {
        advice.textContent = "Es la hora del tè y recuerda que hoy es tu feliz no cumpleaños";
    }
    else if (n >= 21 && n <= 22) {
        advice.textContent = "Hay que ir preparando la cena...¿Spaghetti con albondigas es una opcion?";
    }
    else {
        advice.textContent = "Hi-ho, hi-ho A casa a descansar  hi-ho Es hora de cerrar Hi-ho, hi-ho";
    }
}
postAdvice(hora.textContent);


