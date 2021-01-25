import './styles.css';
const openWeatherKey = '480b9920e735a04affc24c731838e8fe';
let openWeatherAPI = 'api.openweathermap.org/data/2.5/weather?q=';
const form = document.querySelector('form');
const checkbox = document.querySelector('input[type=checkbox]');

const getData = async (city) => {
  let api = `http://${openWeatherAPI}${city}&units=imperial&appid=${openWeatherKey}`;
  try {
    let response = await fetch(api, {
      mode: 'cors'
    });
    let obj = await response.json();
    let desc = obj.weather[0].description;
    let temp = obj.main.temp;
    let feelsLike = obj.main.feels_like;
    let hi = obj.main.temp_max;
    let low = obj.main.temp_min;
    return {
      desc: desc, 
      temp: Math.round(temp),
      feelsLike: Math.round(feelsLike),
      hi: Math.round(hi),
      low: Math.round(low)
    }
  } catch(error) {
    alert(error);
    preventDefault();
  }
}


const toC = (c) => {
  let deg = (c - 32) * (5 / 9);
  return Math.round(deg);
}

const getCity = () => {
  return form.querySelector('input').value;
}

const getGif = async (desc) => {
  try {
    let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=0rvzBeZcPTKU9FJMPRwEtqpzKYNPr4ZA&s=${desc}`, {mode: 'cors'})
    let json = await response.json();
    return json.data.images.original.url;
  } catch (error) {
    console.log(error)
  }
}

const displayData = (obj, city, deg = '°F') => {
  if (checkbox.checked) { 
    deg = '°C';
    obj.temp = toC(obj.temp);
    obj.feels = toC(obj.feels);
    obj.hi = toC(obj.hi);
    obj.low = toC(obj.low);
  }
  const loc = document.getElementById('city');
  const temp = document.querySelector('#temp > div');
  const feels = document.querySelector('#feels > div');
  const desc = document.querySelector('#desc > div');
  const hi = document.querySelector('#hi > div');
  const low = document.querySelector('#low > div');
  const gif = document.querySelector('#gif');
  loc.textContent = city;
  temp.textContent = obj.temp + deg;
  feels.textContent = obj.feelsLike + deg;
  desc.textContent = obj.desc;
  hi.textContent = obj.hi + deg;
  low.textContent = obj.low + deg;
  getGif(obj.desc).then(url => {gif.src = url})
}

checkbox.addEventListener('click', (e) => {
  let city = getCity();
  getData(city)
  .then(data => {displayData(data, city)})
})
const getDeg = () => {
  if (checkbox.checked) { deg = '°C' }
  data.then((obj) => {
    displayData(obj, city, deg);
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let city = getCity();
  getData(city)
  .then(data => {displayData(data, city)})
})

