function getTime(){
    var Hours = document.getElementById("hours").value;
    var Minutes = document.getElementById("minutes").value;
    var Seconds = document.getElementById("seconds").value;
    let Time = Hours + ":" + Minutes + ":" + Seconds;

    if ((Hours === "" && Minutes === "" && Seconds === "") || (Hours === "0" && Minutes === "0" && Seconds === "0")) {
        alert("Please Enter a Time");
    } else {
        return Time;
    }
}

function startTimer() {
    getTime();
    const [hours, minutes, seconds] = getTime().split(':');

    console.log(hours);
    console.log(minutes);
    console.log(seconds);

    if(hours > 0) {
        if((minutes == 0) && (seconds > 0)) {
            document.getElementById("minutes").value = "59";
        }
        else if ((minutes > 0) && (seconds == 0)) {
            document.getElementById("seconds").value = "59";
        }
        else if ((minutes == 0) && (seconds == 0)) {
            document.getElementById("minutes").value = "59";
            document.getElementById("seconds").value = "59";
        }
    }
}

function clearTimer() {
    document.getElementById("hours").value = "0";
    document.getElementById("minutes").value = "0";
    document.getElementById("seconds").value = "0";
}

function 