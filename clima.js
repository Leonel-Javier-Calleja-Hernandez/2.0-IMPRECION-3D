function buscarCiudad(ciudad){
fetch('https://goweather.herokuapp.com/weather/houston' )
.then(res => res.json())
.then(data => { 
    console.log("la temperatura es: " + data.temperature + " y su velocidad es " + data.wind)})
if (data.temperature < "10°C"){
    document.getElementById("temperatura").src ="https://www.prosutelsistemas.net/wp-content/uploads/2021/10/El-compresor-de-aire-y-el-calor.png"
}
else(data.temperature);{
    document.getElementById("temperatura").src ="https://cnnespanol.cnn.com/wp-content/uploads/2022/12/221220154109-01-cold-weather-safety.jpg?quality=100&strip=info"
}}
buscarCiudad("Bogota")