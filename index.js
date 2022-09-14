let backgroundUrl
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=night")
.then(res=>res.json())
.then(data=>{
    console.log(data)
    document.body.style.backgroundImage=`url(${data.urls.regular})`
    document.getElementById("author").innerHTML=`<h3>Image credit: ${data.user.name}</h3>`
})

// document.getElementById("time").innerHTML=dateTime.toLocaleString()
function renderTime(){
    const dateTime = new Date()
    document.getElementById("time").textContent=dateTime.toLocaleTimeString()
}
renderTime()
setInterval(renderTime,1000)


navigator.geolocation.getCurrentPosition(position=>{
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather/?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        document.getElementById("weather-info").innerHTML=`
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" class="weather-condition" />
        <span class="temp">${Math.round(data.main.temp)} °</span>
        `
        document.getElementById("city").innerText=data.name
    })
})

document.getElementById('get-fact').addEventListener("click",function(){
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then(res=>res.json())
    .then(data=>{
        document.getElementById("main-text").innerText="You're welcome!"
        document.getElementById("main-fact").innerHTML = `
        <p class="facts-text">${data.text}</p>
        `
        document.getElementById("get-fact").innerText="Tell me another fact."
        document.getElementById("get-activity").innerText="Now i need something to do."
})
})
document.getElementById('get-activity').addEventListener("click",function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(res=>res.json())
    .then(data=>{
        document.getElementById("main-text").innerText="You're welcome!"
        document.getElementById("main-fact").innerHTML = `
        <p class="activity-text">${data.activity}</p>
        `
        document.getElementById("get-fact").innerText="Now tell me a fact!"
        document.getElementById("get-activity").innerText="I want another idea."
    })
})
