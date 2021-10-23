const location_one = document.getElementById('location');
const button = document.querySelector('button');
const cities = ['Paris', 'California', 'Cairo'];
const select = document.querySelector('#cities');
select.style.display = 'none';
const weather = document.getElementById('weather');
const tempreture = document.getElementById('tempreture');
let options = document.querySelectorAll('option');
const dateto = document.getElementById('date');
const icon = document.getElementById('icon');
const wind = document.getElementById('wind');

let city = 'Amman'; //initial value

let date = new Date();
let today = date.toDateString();
dateto.innerHTML = today;


const one = document.getElementById('one');
const humidity = document.getElementById('humidity');
const three = document.getElementById('three');

select.addEventListener('click', (e) => {

    city = e.target.value;
    //console.log(city);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f21166ceac89cea9fb24de968596e1b7`)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            location_one.innerText = data.name;
            weather.innerHTML = data.weather[0].description;
            let tempC = (`${data.main.temp}`).substr(0, 2) + `&#176`;
            tempreture.innerHTML = tempC;
            humidity.innerText = data.main.humidity + '%';
            icon.innerText = data.weather[0].icon;
            wind.innerHTML = data.wind.speed + 'km/h';
             

            //console.log(data.weather[0].description);
            // one.innerHTML = data.
        });
})
button.addEventListener('click', () => {
    button.style.display = "none";
    select.style.display = 'block';
})




