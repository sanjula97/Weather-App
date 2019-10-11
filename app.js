//Init storage
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();

//Init weather object
const weather = new Weather(weatherLocation.city,weatherLocation.state);

//Init UI
const ui = new UI();

//Get weather on dom load
document.addEventListener('DOMContentLoaded',getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click',(e) => {
    const city = document.getElementById('city').Value;
    const state = document.getElementById('state').Value;

    //Change Location
    weather.changeLocation(city,state);

    //Set Location on local storage
    storage.setLocationData(city,state);

    //Get and display
    getWeather();

    //close model
    $('#locModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
    .then(results => {
        console.log(results);
        ui.paint(results);
    })
    .catch(err => console.log(err));
}

