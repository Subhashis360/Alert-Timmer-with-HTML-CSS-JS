let maindiv = document.getElementById("maindiv");
let loader = document.getElementById("loader");
var audio = new Audio("alarm.mp3");
let textbox = document.getElementById("textbox");
let sets = document.getElementById("set");
let time = document.getElementById("time");

loader.style.display = "none";
time.style.display = "none";

var count = 0;


function settt() {
    if (!textbox.value) {
        console.log("please enter somethig")
    } else if (textbox.value <= 0){
        console.log("please enter right no")
    }else if ( textbox.value >= 43320) {
        console.log("maximum time limit is 3 days")
    } else {
        loader.style.display = "block";
        maindiv.style.display = "none";
        sets.style.display = "none";
        textbox.style.display = "none";
        time.style.display = "block";
        setTimeout(newfuntion, (Math.random() * 1 + 1)*1000)
    }
}

function splitTime(value) {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = value % 60;
    return { hours, minutes, seconds };
  }

function newfuntion() {
    maindiv.style.display = "block";
    loader.style.display = "none";
    count = textbox.value;
    textbox.value = "";

    function countDown() {
        var bc = splitTime(count)
        if (bc.hours == "" && bc.minutes == "") {
            time.innerHTML = (`${bc.seconds}sec`)
        } else if (bc.hours == ""){
            time.innerHTML = (`${bc.minutes}min ${bc.seconds}sec`)
        } else {
            time.innerHTML = (`${bc.hours}hours
             ${bc.minutes}min
             ${bc.seconds}sec`)
        }
    // time.innerHTML = count;
    count--;
    if (count > -1) {
        setTimeout(countDown, 1000);
        
      } else {
        audio.play();
        alert("Time is over Alarm is ticking");
        sets.style.display = "block";
        textbox.style.display = "block";
        time.style.display = "none";
      }
    }
    
    setTimeout(countDown, 1000);
}



