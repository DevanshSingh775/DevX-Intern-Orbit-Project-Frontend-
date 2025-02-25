const countdownDate = new Date("January 1, 2030 00:00:00").getTime();
const interval = setInterval(function() {
    const now = new Date().getTime();
    const remainingTime = countdownDate - now;
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days + "d";
    document.getElementById("hours").innerHTML = hours + "h";
    document.getElementById("minutes").innerHTML = minutes+"";
    document.getElementById("seconds").innerHTML = seconds + "s";
    if (remainingTime < 0) 
        {
        clearInterval(interval);
        document.getElementById("Timer").innerHTML = "EXPIRED";
        }
},1000);