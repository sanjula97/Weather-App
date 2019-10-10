//Init weather object
const weather = new Weather('London','UK');

//Init UI
const ui = new UI();

//Get weather on dom load
document.addEventListener('DOMContentLoaded',getWeather);

function getWeather() {
    weather.getWeather()
    .then(results => {
        console.log(results);
        ui.paint(results);
    })
    .catch(err => console.log(err));
}

