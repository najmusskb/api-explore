// API --- secret----- key 
const API_KEY = '46ad7457603b9b0104e633e78cd60e16';
const LoadTemperature = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => DisplayData(data))
}



const DisplayData = (data) => {

    // const Temparature = document.getElementById('temparature');
    // Temparature.innerText = data.main.temp;
    // console.log(data.weather[0].main)

    setInnerTextbyID('temparature', data.main.temp);
    setInnerTextbyID('condition', data.weather[0].main);

}

const setInnerTextbyID = (id, text) => {

    const Temparature = document.getElementById(id);
    Temparature.innerText = text;


}


// addevenlistener for button 
document.getElementById('btn-search').addEventListener('click', function () {
    // console.log('okkkk')
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    console.log(city)
    LoadTemperature(city)

})

// LoadTemperature('dhaka')