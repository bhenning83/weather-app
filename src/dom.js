import { getGif } from './apis'
const displayData = (obj, city, deg) => {
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

  //resolves the promise
  getGif(obj.desc).then(url => {gif.src = url})
}

export default displayData