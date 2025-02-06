const clock = document.getElementById("clock")

var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

setInterval(() => {
    clock.textContent = hr + ":" + min +":" + sec
})

console.log("The current time is", hr + ":" + min + ":" +sec);