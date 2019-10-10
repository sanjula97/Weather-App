class Weather {
    constructor(city,state) {
        this.apiKey = '929f72d3460b036adf8059d3390bf122';
        this.city = city;
        this.state = state;
    }

    //Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}`);

        const responseData = await response.json();
        
        return responseData;
    }

    //Change weather location
    changeLocation(city,state) {
        this.city = city;
        this.state = state;
    }
}