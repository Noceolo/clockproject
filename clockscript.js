

setInterval(() => {
    
    const clock = document.getElementById("clock")
    var date = new Date();
    
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    clock.textContent = hr + ":" + min +":" + sec
}), 1000

