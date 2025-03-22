const temperature = 10;
const windspeed = 43;

function calculateWindChill(temperatureC, windspeedKph) {
    if (temperatureC <= 10 || windspeedKph > 4.8) {
        const windChill = 13.12 + 0.6215 * temperatureC - 11.37 * Math.pow(windspeedKph, 0.16) + 0.3965 * temperatureC * Math.pow(windspeedKph, 0.16);
        return `${Math.round(windChill)} °C`;
    }else {
        return `N/A`;
    }
}

document.querySelector('#windchill').innerHTML = calculateWindChill(temperature, windspeed);
