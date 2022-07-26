let boton = document.querySelector("button")
let input = document.querySelector("input")

function cargarCiudad (){  
    let city = input.value
document.querySelector(".container").style.visibility = "visible"
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function(data){
    console.log(data)
    document.querySelector("#ciudad").textContent = data.name
    document.querySelector("#temperatura").textContent = data.main.temp
    document.querySelector("#descripcion").textContent = data.weather[0].description
    let icon = data.weather[0].icon
    let url_icon = "https://openweathermap.org/img/w/" + icon + ".png"
    document.querySelector("#wicon").src = url_icon
})
}          

boton.addEventListener("click",function(){
    cargarCiudad()
})






