//天気をランダムに表示
const weatherId = document.getElementById("weather"),
    warningId = document.getElementById("weatherWar"),
    rainId = document.getElementById("rainfall");
const weather = ["曇り", "曇り", "曇り", "雨", "雨", "雨", "雷", "霧", "霧", "霧", "雷雨", "晴", "雪"];

document.addEventListener("DOMContentLoaded", function(){
    weatherId.innerHTML = weather[Math.floor(Math.random()*weather.length)];

    //注意報
    if (weatherId.textContent == "霧" || weatherId.textContent == "曇り"){
        if (Math.floor(Math.random()+0.8) == 1){
            warningId.innerHTML = "濃霧注意"
        }
    }else if (weatherId.textContent == "雨"){
        if (Math.floor(Math.random()+0.8) == 1){
            warningId.innerHTML = "大雨注意"
        }
    }

    //降水確率
    if (weatherId.textContent == "晴"){
        rainId.innerHTML = `${Math.floor(Math.random()*(40-10+1)+10)} %`
    }else{
        rainId.innerHTML = `${Math.floor(Math.random()*(85-30+1)+30)} %`
    }
});

//日付を表示
const dayId = document.getElementById("day");

function dayUpdate(){
    let now = new Date();
    let month = String(now.getMonth() + 1).padStart(2, '0'),
        day = String(now.getDate()).padStart(2, '0'),
        hour = String(now.getHours()).padStart(2, '0'),
        minute = String(now.getMinutes()).padStart(2, '0'),
        seconds = now.getSeconds();;

    dayId.innerHTML = `21██/${month}/${day} <br> ${hour}:${minute}:${seconds}`;
};

setInterval(() => { dayUpdate() }, 1000);
