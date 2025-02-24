let cycleDate = new Date();
let cycleHour = cycleDate.getHours();
let currentTheme;

setInterval(() => {
    
    const clock = document.getElementById("clock")
    let date = new Date();
    
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






const themes = {
    morning: {
        containerBackground : '#ffe9a6',
        containerColor : '#4a4a4a',
        clockBorder : '#ffcd80',
        clockBoxShadow : 'rgba(212, 175, 55, 0.5)',
        clockBackground : 'rgba(255, 255, 255, 0.8)',
        clockTextShadow : '#ffdb00',
        // sunOpacity : "100",
        // sunTop : "40%",
        // sunLeft : "20%",
        // moonOpacity : "10",
        // moonTop : "15%",
        // moonLeft : "65%"
    },
    afternoon: {
        containerBackground : '#aceaff',
        containerColor : '#cdb500',
        clockBorder : '#70bee2',
        clockBoxShadow : 'rgba(55, 157, 212, 0.5)',
        clockBackground : 'rgba(230, 254, 255, 0.8)',
        clockTextShadow : '#94cdf8',
        // sunOpacity : "100",
        // sunTop : "10%",
        // sunLeft : "60%",
        // moonOpacity : "0",
    },
    evening: {
        containerBackground : '#475d85',
        containerColor : '#d67b6b',
        clockBorder : '#b0d5f5',
        clockBoxShadow : 'rgba(212, 175, 55, 0.5)',
        clockBackground : 'rgba(255, 206, 99, 0.8)',
        clockTextShadow : '#ffdb85',
        // sunOpacity : "50",
        // sunTop : "40%",
        // sunLeft : "80%",
        // moonOpacity : "50",
        // moonTop : "40%",
        // moonLeft : "40%",
    },
    night: {
        containerBackground : '#131862',
        containerColor : '#bea9de',
        clockBorder : '#462e82',
        clockBoxShadow : 'rgba(32, 46, 195, 0.6)',
        clockBackground : 'rgba(46,68,130, 0.8)',
        clockTextShadow : '#87889c',
        // sunOpacity : "0",
        // sunTop : "50%",
        // sunLeft : "80%",
        // moonOpacity : "100",
        // moonTop : "20%",
        // moonLeft : "60%",
    }
};

function getTheme(a){
    if ( a >= 6 && a < 12){
        currentTheme = themes.morning;
        console.log("the theme is morning");

    }if (a >= 12 && a < 18){
        currentTheme = themes.afternoon;
        console.log("the theme is afternoon");

    }if (a >= 18 && a <= 23){
        currentTheme = themes.evening;
        console.log("the theme is evening");

    }if (a < 6){
        currentTheme = themes.night;
        console.log("the theme is night");
    };
};


function applyTheme(theme){
    document.getElementById('container').style.background = theme.containerBackground;
    document.getElementById('container').style.color = theme.containerColor;
    document.getElementById('clock').style.boxShadow = theme.clockBoxShadow;
    document.getElementById('clock').style.background = theme.clockBackground;
    document.getElementById('clock').style.textShadow = theme.clockTextShadow;
    // document.getElementById('sun').style.opacity = theme.sunOpacity;
    // document.getElementById('sun').style.top = theme.sunTop;
    // document.getElementById('sun').style.left = theme.sunLeft;


    // document.getElementById('moon').style.opacity = theme.moonOpacity;

};


setTimeout(() => {
    setInterval(getTheme, 60000);
    getTheme(cycleHour);
    applyTheme(currentTheme);
}, (60 - cycleDate.getSeconds()) * 1000);

getTheme(cycleHour);
applyTheme(currentTheme);
