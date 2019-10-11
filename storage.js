class Storage {
    constructor() {
        this.city;
        this.state;
        this.defsultCity = 'London';
        this.defaultState = 'uk';
    }

    getLocationData() {
        if(localStorage.getItem('city') === null) {
            this.city = this.defsultCity;
        }else {
            this.city = localStorage.getItem('city');
        }

        if(localStorage.getItem('state') === null) {
            this.state = this.defsultState;
        }else {
            this.state = localStorage.getItem('state');
        }

        return {
            city:this.city,
            state:this.state
        }
    }
  

    setLocationData(city,state) {
    
        localStorage.setItem('city',city);
        localStorage.setItem('state',state);
    }
}