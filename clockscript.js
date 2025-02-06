
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


const themes = {
    morning: {
        containerBackground : '#ffe9a6',
        containerColor : '#4a4a4a',
        clockBorder : '#ffcd80',
        clockBoxShadow : 'rgba(212, 175, 55, 0.5)',
        clockBackground : 'rgba(255, 255, 255, 0.8)',
        clockTextShadow : '#ffdb00',
    },
    afternoon: {
        containerBackground : '#aceaff',
        containerColor : '#cdb500',
        clockBorder : '#70bee2',
        clockBoxShadow : 'rgba(55, 157, 212, 0.5)',
        clockBackground : 'rgba(230, 254, 255, 0.8)',
        clockTextShadow : '#94cdf8',
    },
    evening: {
        containerBackground : '#475d85',
        containerColor : '#d67b6b',
        clockBorder : '#b0d5f5',
        clockBoxShadow : 'rgba(212, 175, 55, 0.5)',
        clockBackground : 'rgba(255, 206, 99, 0.8)',
        clockTextShadow : '#ffdb85',
    },
    night: {
        containerBackground : '#131862',
        containerColor : '#bea9de',
        clockBorder : '#462e82',
        clockBoxShadow : 'rgba(32, 46, 195, 0.6)',
        clockBackground : 'rgba(46,68,130, 0.8)',
        clockTextShadow : '#87889c',
    }
};


