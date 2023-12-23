const temperatura = document.querySelector(".temperatura")
const ciudad = document.querySelector(".ciudad")
const clima = document.querySelector(".clima")
const precipitacion = document.querySelector(".precipitacion")
const humedad = document.querySelector(".humedad")
const viento = document.querySelector(".viento")
const cont = document.querySelector(".predict")
const apiKey = "77dd8f17278a4e1a9f2225016232212"
const city = "ciudad Real"
const getfetch = async () => {
    try {
        const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`);
        if (!res.ok) {
            throw new Error("cosa mala");
        }
        const data = await res.json();
        printData(data)
    } catch (error) {
        console.error(error);
    }
};
const epoch = (epoch)=>{
    let fecha = new Date(epoch*1000);
    let hora = parseInt(fecha.toLocaleTimeString())
    return hora
}
const printData = (data) => {
    const { name } = data.location
    const { temp_c, precip_in, humidity, wind_kph, } = data.current
    const { icon } = data.current.condition
    const secundarias = data.forecast.forecastday[0].hour
    
    ciudad.innerHTML = `${name}`
    temperatura.innerHTML = `${temp_c}`
    clima.innerHTML = `<img src="${icon}" alt="icon">`
    precipitacion.innerHTML = `probabilidad de lluvia de un ${precip_in}%`
    humedad.innerHTML = `humedad del ${humidity}%`
    viento.innerHTML = `viento de ${wind_kph} km/h`
    
    secundarias.forEach(hour => {
        let hourItem = document.createElement("div")
        hourItem.className = `hourItem`
        hourItem.innerHTML = `
        ${epoch(hour.time_epoch)} 
        <img src="${hour.condition.icon}" alt="icon">
        ${hour.temp_c}`
        cont.appendChild(hourItem);
    });
}
getfetch()



