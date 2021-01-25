// import './styles.css';
import displayData from './dom';
import { getData } from './apis';
const form = document.querySelector('form');
const checkbox = document.querySelector('input[type=checkbox]');

const toC = (c) => {
  //changes Farenheit to Celcius
  let deg = (c - 32) * (5 / 9);
  return Math.round(deg);
}

const getCity = () => {
  return form.querySelector('input').value;
}

const populate = () => {
  let city = getCity();
  let deg = '°F';

  //retrieve data for given city
  getData(city)

  //resolve the promise
  .then(data => {
    //if Celcius units are selected, convert data values
    if (checkbox.checked) { 
      deg = '°C';
      data.temp = toC(data.temp);
      data.feels = toC(data.feels);
      data.hi = toC(data.hi);
      data.low = toC(data.low);
    }
    displayData(data, city, deg)
  })
}

checkbox.addEventListener('click', (e) => {
  populate();
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  populate();
})

