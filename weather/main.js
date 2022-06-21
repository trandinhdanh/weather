 var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var time = document.querySelector(".time")
var shortDesc = document.querySelector(".short-desc");
var visibility = document.querySelector(".visibility span");
var wind = document.querySelector(".wind span");
var sun = document.querySelector(".sun span");
var value = document.querySelector(".value");
var content = document.querySelector(".content")
var body = document.querySelector("body");

async function changeWeatherUI(capitalSearch){
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`

    let data = await fetch(apiURL).then(res=> res.json())
    if(data.cod == 200){
    content.classList.remove('hide')
    console.log(data)
    city.innerText = data.name;
    country.innerText = data.sys.country
    visibility.innerText = data.visibility + 'm'
    wind.innerText = data.wind.speed + 'm/s' 
    sun.innerText = data.main.humidity + '(%)'
    
    value.innerHTML =(data.main.temp).toFixed() +` <sup>o</sup>C`;
    let temp = (data.main.temp).toFixed();
    shortDesc.innerHTML = data.weather[0].main
    time.innerText = new Date().toLocaleString('vi')


    body.setAttribute('class','hot')
    if(temp <= 25){
    body.setAttribute('class','cool')
    }
    if(temp <= 28){
    body.setAttribute('class','warm')
    }
    if(temp <= 18){
    body.setAttribute('class','')
    }
    
    }else{
    content.classList.add('hide')
    }
}
search.addEventListener('keypress',function(e){ 
    if(e.code === 'Enter'){
    let capitalSearch = search.value.trim()
        changeWeatherUI(capitalSearch)
    }
})
changeWeatherUI('Ho Chi Minh')