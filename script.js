function setTargetdate(){
    var x = document.getElementById("target").value;
    target_date = new Date(x);
    return target_date;
}

function startCountdown(){
    const targetDate = setTargetdate();
    const currentDate = new Date();

    if (targetDate/1 > currentDate/1){
    
    const totalSeconds = (targetDate - currentDate)/1000;
    
    const days = Math.floor(totalSeconds/86400);
    const hours = Math.floor((totalSeconds%86400)/3600);
    const minutes = Math.floor((totalSeconds%3600)/60);
    const seconds = Math.floor(totalSeconds%60);

    document.getElementById("message").style.color = "rgb(230, 230, 230)";
    document.getElementById("message").innerHTML = "Welcome to My Countdown Page!!";
    document.getElementById("days").innerHTML = timeCtrl(days);
    document.getElementById("hours").innerHTML = timeCtrl(hours);
    document.getElementById("minutes").innerHTML = timeCtrl(minutes);
    document.getElementById("seconds").innerHTML = timeCtrl(seconds);
    document.getElementById("title").innerHTML = timeCtrl(days)+"d "+timeCtrl(hours)+"h "+timeCtrl(minutes)+"m "+timeCtrl(seconds)+"s "+"remaining";
    }else{
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "Target date should be in the future!!";
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        document.getElementById("title").innerHTML = "Wrong Input";
    }
}

function timeCtrl(time){
    return time = (time < 10) ? (`0${time}`) : time; 
}

setInterval(startCountdown, 1000);





