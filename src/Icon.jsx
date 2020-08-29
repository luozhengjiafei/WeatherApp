import React from 'react';
import CloudyDayIcon from './App/assets/Icon/cloudy-day.svg';
import CloudyNightIcon from './App/assets/Icon/cloudy-night.svg';
import Day from './App/assets/Icon/day.svg';
import Night from './App/assets/Icon/night.svg';
import Rain from './App/assets/Icon/rainy.svg';
import Snow from './App/assets/Icon/snowy.svg';

const WeatherIcon = (status) => {
    switch(status){
        case("cloudyDay"):
            return (
                <div>
                    <CloudyDayIcon />
                </div>
            );
        case ("cloudyNight"):
            return (
                <div>
                    <CloudyNightIcon />
                </div>
            );
        case ("day"):
            return (
                <div>
                    <Day />
                </div>
            );
        case ("night"):
            return (
                <div>
                    <Night />
                </div>
            );
        case ("rain"):
            return (
                <div>
                    <Rain />
                </div>
            );
        case ("snow"):
            return (
                <div>
                    <Snow />
                </div>
            );
        default:
            return("NO change");
    }
}
export default WeatherIcon;