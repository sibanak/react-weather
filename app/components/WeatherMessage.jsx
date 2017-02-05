var React = require('react');
var WeatherMessage = require('WeatherMessage');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>Y fait {temp} degré à {location}</h3>
  );
};

module.exports = WeatherMessage;
