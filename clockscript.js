
setInterval(() => {
    
    const clock = document.getElementById("clock")
    var date = new Date();
    
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let isDay;

    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    clock.textContent = hr + ":" + min +":" + sec

    if (hr >= 8 && hr < 18){
        isDay = true;
    }else {
        isDay = false
    }

}, 1000);


var cycleDate = new Date();
let cycleHour = cycleDate.getHours();
var currentTheme

function getTheme(a){
    if ( 6 <= a < 12){
        currentTheme = "morning";
    }if (12 <= a < 18){
        currentTheme = "afternoon";
    }if (18 <= a <= 23){
        currentTheme = "evening";
    }else if ( 0 >= a < 6){
        currentTheme = "night";
    }
console.log(currentTheme);
};

setTimeout(() => {
    setInterval(getTheme, 60000);
    getTheme(cycleHour);
}, (60 - cycleDate.getSeconds()) * 1000);

