const getGif = async (desc) => {
  try {
    //calls api
    let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=0rvzBeZcPTKU9FJMPRwEtqpzKYNPr4ZA&s=${desc}`, {mode: 'cors'})
    
    //converts to json data
    let json = await response.json();

    //returns promise of a gif url
    return json.data.images.original.url;
  } catch (error) {
    console.log(error)
  }
}

const getData = async (city) => {
  const openWeatherKey = '480b9920e735a04affc24c731838e8fe';
  let openWeatherAPI = 'api.openweathermap.org/data/2.5/weather?q=';
  let api = `http://${openWeatherAPI}${city}&units=imperial&appid=${openWeatherKey}`;
  try {
    //call api
    let response = await fetch(api, { mode: 'cors' });

    //convert resposne to json
    let obj = await response.json();

    //return a promise of an object with usable data
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

    //stops form submission if any errors
    preventDefault();
  }
}

export { getData, getGif }